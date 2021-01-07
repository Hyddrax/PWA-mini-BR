import React from 'react';
import './Accueil.css';

function Accueil() {
    return (
        <div className='accueil'>
            <h1 className="accueil__title">My Mini BR</h1>
            <div className="accueil__body">
                <div className="accueil__left">
                    <ul>
                        <li><a>Créer une partie</a></li>
                        <li><a>Rejoindre une partie</a></li>
                    </ul>
                </div>
                <div className="accueil__right">
                    <p>Liste des partie en cours :</p>
                    <ul>
                        <li><a>Partie 1</a></li>
                        <li><a>Partie 2</a></li>
                        <li><a>Partie 3</a></li>
                        <li><a>Partie 4</a></li>
                        <li><a>Partie 5</a></li>
                        <li><a>Partie 6</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accueil
