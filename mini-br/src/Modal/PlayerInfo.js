import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, capitalize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


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

export default function PlayerInfo() {
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


    return (
        <div >
            <div onClick={handleOpen}>
                <span style={{ cursor: 'pointer' }} type="button" >
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
                            <Typography id="disabled-slider" gutterBottom>
                                nom du joueur
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <spam>live</spam>
                                </Grid>
                                <Grid item xs>
                                    <Slider disabled defaultValue={100} aria-labelledby="disabled-slider" />
                                </Grid>
                                <Grid item>
                                    <spam>100</spam>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <spam>weapon</spam>
                                </Grid>
                                <Grid item xs>
                                    <Slider disabled defaultValue={15} aria-labelledby="disabled-slider" />
                                </Grid>
                                <Grid item>
                                    <spam>10</spam>
                                </Grid>
                            </Grid>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
}
