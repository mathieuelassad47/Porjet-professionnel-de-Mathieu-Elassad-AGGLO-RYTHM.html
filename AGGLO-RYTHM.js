/**
 * AGGLO-RYTHM - Logiciel de gestion culturelle Agen
 */

// 1. CONFIGURATION AUDIO
const bgMusic = new Audio("AGGLO-RYTHM.flac");
bgMusic.loop = true;
bgMusic.volume = 0.15;

const sfxClick = new Audio("audio/scratch-bip.mp3");
let currentAudio = null;

// 2. GESTION DU TIMER (20 min = 1200 sec)
let tempsEcoule = 0;
const dureeMax = 1200; 
let timerInterval = null;
const progressBar = document.getElementById('waveform-progress');

// Lancement global au premier clic (obligatoire pour les navigateurs)
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Audio en attente..."));
        startTimer();
    }
}, { once: true });

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (!bgMusic.paused) {
            tempsEcoule++;
            let pourcentage = (tempsEcoule / dureeMax) * 100;
            if (progressBar) progressBar.style.width = pourcentage + "%";
            if (tempsEcoule >= dureeMax) clearInterval(timerInterval);
        }
    }, 1000);
}

// 3. BASE DE DONNÉES PATRIMONIALE
const AGEN_DATABASE = [
    { id: 1, nom: "Le Pont-Canal", desc: "Le deuxième plus long pont-canal de France, enjambant la Garonne.", image: "https://images.unsplash.com/photo-1500382017468-9049fee74a52", audio: "audio/garonne.mp3" },
    { id: 2, nom: "Stade Armandie", desc: "Le temple du rugby agenais. Ici bat le cœur du SUA.", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2", audio: "audio/rugby.mp3" },
    { id: 3, nom: "Cathédrale Saint-Caprais", desc: "Classée au patrimoine mondial de l'UNESCO.", image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9", audio: "audio/cloches.mp3" }
];

let currentIndex = 0;

// 4. MOTEUR D'INTERFACE
function updateInterface(index) {
    // Navigation cyclique
    if (index < 0) index = AGEN_DATABASE.length - 1;
    if (index >= AGEN_DATABASE.length) index = 0;
    currentIndex = index;

    const data = AGEN_DATABASE[currentIndex];
    
    // Feedback sonore (Scratch)
    sfxClick.currentTime = 0;
    sfxClick.play().catch(() => {});

    // Mise à jour du DOM
    document.getElementById('service-title').innerText = `N°${data.id.toString().padStart(3, '0')} ${data.nom}`;
    document.getElementById('main-image').src = data.image;
    document.querySelector('.description-sub').innerText = data.desc;

    // Gestion de l'audio du lieu
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    currentAudio = new Audio(data.audio);
    currentAudio.volume = 0.5;
    
    // Lecture différée pour l'effet d'immersion
    setTimeout(() => { 
        if (!bgMusic.paused) currentAudio.play().catch(() => {}); 
    }, 400);
}

// 5. ÉVÉNEMENTS
document.getElementById('deck-prev').addEventListener('click', () => updateInterface(currentIndex - 1));
document.getElementById('deck-next').addEventListener('click', () => updateInterface(currentIndex + 1));

document.getElementById('master-play').addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        if (currentAudio) currentAudio.play();
    } else {
        bgMusic.pause();
        if (currentAudio) currentAudio.pause();
    }
});

// Initialisation au chargement
window.addEventListener('DOMContentLoaded', () => updateInterface(0));