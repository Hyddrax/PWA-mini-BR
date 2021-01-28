import React, { useEffect, useState } from 'react';
import './Accueil.css';
import JoinGame from './Modal/JoinGame'
import CreateGame from './Modal/CreateGame'
import { Button } from '@material-ui/core';

function Accueil() {



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
        new Notification("Nouvelle partie rejointe !", {
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
        }
        catch (e) {
            console.error("Subscribe rejected");
        }
    }

    return (
        <div className='accueil'>
            <div className="accueil__title">My Mini BR</div>
            <div className="accueil__body">
                <div className="accueil__left">
                    <CreateGame />
                    <JoinGame />
                    <Button className="accueil__left_div" onClick={() => subscribePushNotification('game1', '1')}>🔔 S'abonner aux notifications</Button>
                    <Button className="accueil__left_div" onClick={install}>📦 Installer PWA Mini BR</Button>
                    {/* <a href='Game/'><li><CreateGame /></li></a> */}
                    {/* <a href='Game/'><li><JoinGame /></li></a> */}
                </div>
                <div className="accueil__right">
                    <p>Liste des partie en cours</p>
                    <div className="parties_list">
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 1</div></a>
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 2</div></a>
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 3</div></a>
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 4</div></a>
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 5</div></a>
                        <a href='Game/'><div onClick={notifJoinGame}>Partie 6</div></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accueil
