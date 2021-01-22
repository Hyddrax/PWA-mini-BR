import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, capitalize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
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

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [nom, setNom] = React.useState('');
    const [password, setPassword] = React.useState('');

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

    return (
        <div>
            <span style={{  cursor: 'pointer' }} type="button" onClick={handleOpen}>
                Joindre une partie
            </span>
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
                            <Link to="/Game" style={{ textDecoration: 'none', color: 'black' }}>
                              <div className="btn" variant="outlined" onClick={notifJoinGame}>Rejoindre la partie</div>
                            </Link>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
