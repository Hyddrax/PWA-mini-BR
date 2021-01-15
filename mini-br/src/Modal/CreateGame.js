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

    return (
        <div>
            <span style={{  cursor: 'pointer' }} type="button" onClick={handleOpen}>
                Créer une partie
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
                            <div className={classes.formItem}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="grouped-native-select">Nombres de jouers</InputLabel>
                                    <Select native defaultValue=""
                                        id="grouped-native-select"
                                        value={nbj}
                                        onChange={handleChangeNbj}
                                    >
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </Select>
                                </FormControl>
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
                            <Link to="/Game" style={{ textDecoration: 'none', color: 'black' }}>
                              <div className="btn" variant="outlined">Créer la partie</div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
