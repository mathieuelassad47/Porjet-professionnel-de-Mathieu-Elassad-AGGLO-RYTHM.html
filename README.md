<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> AGGLO-RYTHM | Culture Agen & DJ Set</title>
    <link rel="stylesheet" href="AGGLO-RYTHM.css">
</head>
<body>

    <div class="main-container">
         
        <header class="interface-header">
            <div class="status-light"></div>
            <div class="mode-indicator">
                <div class="light evenement">HISTOIRE</div>
                <div class="light festival"> COMMERCE</div>
                <div class="light festival"> EVENEMENT</div>
            </div>
        </header>

        <section id="main-screen">
            <div id="content-display" class="screen-content">
                <h2 id="service-title">CHARGEMENT...</h2>
                
                <div class="visual-frame">
                    <img id="main-image" src="" alt="Vue d'Agen">
                </div> 
                
                <div id="service-info">
                    <p class="description-text"> 
                        <strong>Une Ville, une Ambiance, une Histoire !</strong> 
                    </p>
                    <p class="description-sub">Sélectionnez un lieu pour découvrir l'âme d'Agen.</p>
                </div>

                <div class="master-controls">
                    <div class="audio-progress">
                        <div class="bar-label">Ambiance sensorielle auditive visuelle</div>
                        <div class="waveform-container">
                            <div id="waveform-progress"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <nav class="controls">
            <div class="navigation-pad">
                <button class="btn nav" id="deck-prev">PRÉC.</button>
                <button class="btn master" id="master-play">PLAY / PAUSE</button>
                <button class="btn nav" id="deck-next">SUIV.</button>
            </div>

            <div class="action-buttons">
                <button class="btn info-btn">CULTURE</button>
                <button class="btn reservation-btn">TARIF</button>
            </div>
        </nav>

        <footer class="speaker-area">
            <div class="grille">
                <span></span><span></span><span></span><span></span>
            </div>
            <p class="sound-label">AGGLO-RYTHM MATT DIZAIR</p>
        </footer>

    </div>

    <script src="AGGLO-RYTHM.js"></script>
</body>
</html>
