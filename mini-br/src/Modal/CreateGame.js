import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";
import DataPlayer from '../DataObject/DataPlayer'
import DataGame from '../DataObject/DataGame'
import DataGrid from '../DataObject/DataGrid'
import { Button } from '@material-ui/core';
import './modal.css';
import Constantes from "../Constantes"




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    formItem: {
        margin: '25px 10px',
        textAlign: 'center',
        color: 'black',
        textTransform: 'capitalize'
    }
}));

export default function CreateGame() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [nom, setNom] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [playerName, setPlayerName] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showNotification = () => {
        new Notification("Création d'une nouvelle partie !", {
            body: "⚔ Partie créée avec succès. Que le meilleur gagne !",
            icon: "https://img.icons8.com/dusk/64/000000/appointment-reminders--v1.png"
        })
    }

    const notifNewGame = () => {
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

            await fetch(Constantes.backend_URL + "/subscribe", {
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



    const createNewGame = async () => {
        let gameId = getGameId();
        let player1 = new DataPlayer(gameId, 1, { name: playerName, weapon: { dmg: 0 }, position: { x: 3, y: 2 } })

        // Save une BDD call backend
        let dataGrid = new DataGrid(gameId, { players: [player1] });
        let dataGame = new DataGame(gameId, nom, { grid: dataGrid });

        const response = await fetch(Constantes.backend_URL + "/games/add", {
            method: "POST",
            body: JSON.stringify(dataGame),
            headers: {
                'content-type': "application/json"
            }
        });

        const data = await response.json();
        subscribePushNotification(data.dataPlayer[0].gameId, data.dataPlayer[0].playerId);
        notifNewGame();
    }

    const getGameId = () => {
        return nom + password;
    }

    return (
        <div>

            <Button className="CustomButton" onClick={handleOpen}>
                Créer une partie
            </Button>
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
                            <input className="Input" type="text" onChange={(e) => { setNom(e.target.value) }} placeholder="Nom de la partie" value={nom} />
                            <input className="Input" type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password de la partie" value={password} />
                            <input className="Input" type="text" onChange={(e) => setPlayerName(e.target.value)} placeholder="Pseudo" value={playerName} />

                        </form>
                        <div className={classes.formItem}>
                            <Link to={{ pathname: `/Game/${getGameId()}` }} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="btn" variant="outlined" onClick={createNewGame}>Créer la partie</div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
