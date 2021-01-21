import React from 'react';
import './Accueil.css';
import JoinGame from './Modal/JoinGame'
import CreateGame from './Modal/CreateGame'

function Accueil() {

    const showNotification = () => {
        const notifJoinHome = new Notification("Nouvelle partie rejointe !", {
            body: "🛡 Partie rejointe avec succès. Que le meilleur gagne !",
            icon: "https://img.icons8.com/dusk/64/000000/appointment-reminders--v1.png"
        })
    }

    const notifJoinGame = () => {
        if (Notification.permission === 'granted') {
            showNotification()
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (Notification.permission === 'granted') {
                    showNotification()
                }
            })
        }
        console.log('Join Game ...');
    }
    
    return (
        <div className='accueil'>
            <h1 className="accueil__title">My Mini BR</h1>
            <div className="accueil__body">
                <div className="accueil__left">
                    <ul>
                        <li><CreateGame /></li>
                        <li><JoinGame /></li>
                        {/* <a href='Game/'><li><CreateGame /></li></a> */}
                        {/* <a href='Game/'><li><JoinGame /></li></a> */}
                    </ul>
                </div>
                <div className="accueil__right">
                    <p>Liste des partie en cours :</p>
                    <ul>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 1</li></a>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 2</li></a>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 3</li></a>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 4</li></a>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 5</li></a>
                        <a href='Game/'><li onClick={notifJoinGame}>Partie 6</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accueil
