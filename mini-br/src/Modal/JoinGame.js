import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, capitalize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DataPlayer from '../DataObject/DataPlayer'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: '200px',
        width: '50%',
        maxWidth: '700px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    formItem: {
        margin: '10px 10px',
        color: 'black',
        textTransform: 'capitalize'
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [nom, setNom] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [playerName, setPlayerName] = React.useState("");
    let gameId

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showNotification = () => {
        const notifJoin = new Notification("Nouvelle partie rejointe !", {
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
            console.log(subscription);

            await fetch("http://localhost:8000/subscribe", {
                method: "POST",
                body: JSON.stringify({ "subscription": subscription, "gameId": gameId, "playerId": playerId }),
                headers: {
                    'content-type': "application/json"
                }
            });


        }
        catch (e) {
            console.log("Subscribe rejected");
        }
    }

    const JoinGame = async () => {
        gameId = getGameId();
        let newPlayer = new DataPlayer(gameId, 1, { name: playerName, weapon: { dmg: 0 }, position: { x: 3, y: 2 } })

        const response = await fetch("http://localhost:8000/players/add", {
            method: "POST",
            body: JSON.stringify(newPlayer),
            headers: {
                'content-type': "application/json"
            }
        });
        const data = await response.json();

        subscribePushNotification(data.newPlayer.gameId, data.newPlayer.playerId);

        notifJoinGame();
    }

    const getGameId = () => {
        return nom + password;
    }

    return (
        <div>
            <div className="btn1" onClick={handleOpen}>
                Joindre une partie
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form noValidate autoComplete="off" className={classes.form}>
                            <input className="Input" type="text" onChange={(e) => setNom(e.target.value)} placeholder="Nom de la partie" />
                            <input className="Input" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password de la partie" />
                            <input className="Input" type="text" onChange={(e) => setPlayerName(e.target.value)} placeholder="Pseudo" value={playerName} />
                            <Link to={{ pathname: `/Game/${getGameId()}` }} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="btn" variant="outlined" onClick={JoinGame}>Rejoindre la partie</div>
                            </Link>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
