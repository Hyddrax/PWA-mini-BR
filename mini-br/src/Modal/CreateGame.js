import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import DataPlayer from '../DataObject/DataPlayer'
import DataGame from '../DataObject/DataGame'
import DataGrid from '../DataObject/DataGrid'
import DataCell from '../DataObject/DataCell'
import './modal.css';




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
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    formItem: {
        margin: '25px 10px',
        color: 'black',
        textTransform: 'capitalize'
    }
}));

export default function CreateGame() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [nom, setNom] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nbj, setNbj] = React.useState('');
    const [nbt, setNbt] = React.useState('');

    const [playerName, setPlayerName] = React.useState("");
    let gameId


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeNbj = (event) => {
        setNbj(event.target.value);
    };

    const handleChangeNbt = (event) => {
        setNbt(event.target.value);
    };

    const showNotification = () => {
        const notifCreate = new Notification("Création d'une nouvelle partie !", {
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
        console.log('Create New Game ...');
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

            await fetch("https://pwa-mini-br-backend.vercel.app/subscribe", {
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



    const createNewGame = async () => {
        let gameId = getGameId();
        let player1 = new DataPlayer(gameId, 1, { name: playerName, weapon: { dmg: 0 }, position: { x: 3, y: 2 } })

        // Save une BDD call backend
        let dataGrid = new DataGrid(gameId, { players: [player1] });
        let dataGame = new DataGame(gameId, nom, { grid: dataGrid });

        const response = await fetch("https://pwa-mini-br-backend.vercel.app/games/add", {
            method: "POST",
            body: JSON.stringify(dataGame),
            headers: {
                'content-type': "application/json"
            }
        });

        const data = await response.json();
        console.log(data);
        subscribePushNotification(data.dataPlayer[0].gameId, data.dataPlayer[0].playerId);
        notifNewGame();
    }

    const getGameId = () => {
        return nom + password;
    }

    return (
        <div>

            <div className="btn1" onClick={handleOpen}>

                Créer une partie
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
                            <input className="Input" type="text" onChange={(e) => { setNom(e.target.value) }} placeholder="Nom de la partie" value={nom} />
                            <input className="Input" type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password de la partie" value={password} />
                            <input className="Input" type="text" onChange={(e) => setPlayerName(e.target.value)} placeholder="Pseudo" value={playerName} />
                            <div className={classes.formItem}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="grouped-native-select">Temps par tour:</InputLabel>
                                    <Select native defaultValue=""
                                        id="grouped-native-select"
                                        value={nbt}
                                        onChange={handleChangeNbt}
                                    >
                                        <option value={1}>1h</option>
                                        <option value={6}>6h</option>
                                        <option value={12}>12h</option>
                                        <option value={24}>24h</option>
                                    </Select>
                                </FormControl>
                            </div>
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
