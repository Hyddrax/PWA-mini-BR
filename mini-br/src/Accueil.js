import React from 'react';
import './Accueil.css';
import JoinGame from './Modal/JoinGame'
import CreateGame from './Modal/CreateGame'
import DataPlayer from './DataObject/DataPlayer';

function Accueil() {


    function testPlayerData() {
        var player1 = new DataPlayer("123456789", 1, {});
        var player2 = new DataPlayer("123456789", 2, { name: "Can", armor: null, weapon: null, health: 100, position: { x: 20, y: 9 } });
        console.log(player1);
        console.log(player2);

        return (
            <div>
            </div>
        )
    }

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

                {testPlayerData()}
            </div>
        </div>
    )
}

export default Accueil
