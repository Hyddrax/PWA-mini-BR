import React, { useEffect, useState } from 'react';
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


    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const install = (event) => {
        event.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    }

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

    const subscribePushNotification = async (gameId, playerId) => {

        const publicVapidKey = 'BOgjL4TQxxngezXpmDytqwDc01U-JdI6JikShCWQSW6X92S5Pe5Hq_wGidEK-SsPpIi4dhsB2S-0i7N8fSBcfGE'

        const urlBase64ToUint8Array = (base64String) => {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        };

        const register = await navigator.serviceWorker.ready;
        try {
            const subscription = await register.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });
            await fetch("http://localhost:8000/subscribe", {
                method: "POST",
                body: JSON.stringify({ "subscription": subscription, "gameId": gameId, "playerId": playerId }),
                headers: {
                    'content-type': "application/json"
                }
            });
            console.log('Push send !');
        }
        catch (e) {
            console.log("Subscribe rejected");
        }
    }

    return (
        <div className='accueil'>
            <h1 className="accueil__title">My Mini BR</h1>
            <div className="accueil__body">
                <div className="accueil__left">
                    <ul>
                        <li><CreateGame /></li>
                        <li><JoinGame /></li>
                        <li onClick={() => subscribePushNotification('game1', '1')}>🔔 S'abonner aux notifications</li>
                        <li onClick={install}>📦 Installer PWA Mini BR</li>
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

                {testPlayerData()}
            </div>
        </div >
    )
}

export default Accueil
