import React from 'react';
import './Accueil.css';
import JoinGame from './Modal/JoinGame'
import CreateGame from './Modal/CreateGame'

function Accueil() {
    return (
        <div className='accueil'>
            <h1 className="accueil__title">My Mini BR</h1>
            <div className="accueil__body">
                <div className="accueil__left">
                        <CreateGame />
                        <JoinGame />
                </div>
                <div className="accueil__right">
                    <p>Liste des partie en cours :</p>
                    <ul>
                        <a href='Game/'><li>Partie 1</li></a>
                        <a href='Game/'><li>Partie 2</li></a>
                        <a href='Game/'><li>Partie 3</li></a>
                        <a href='Game/'><li>Partie 4</li></a>
                        <a href='Game/'><li>Partie 5</li></a>
                        <a href='Game/'><li>Partie 6</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accueil
