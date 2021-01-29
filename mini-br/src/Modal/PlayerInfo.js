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
import './modal.css';


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

export default function PlayerInfo({player}) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const player = (params) =>  {
    //     params.preventDefault();
    //     if (this.state.dataCell.isPlayer) {
    //         console.clear();
    //         let player = this.state.dataCell.data.player;
    //         console.log("============================================================");
    //         console.log("Name :              ", player.name);
    //         console.log("Health :            ", player.health);
    //         console.log("Position :          ", player.position);
    //         console.log("Mouvement restant : ", player.nbMoveAvailable);
    //         console.log("Armor :             ", player.armor);
    //         console.log("Weapon :            ", player.weapon);
    //         console.log("============================================================");

    //     }
    // }

    // console.log(player)

    return (
        <div >
              <div className="jouer" onClick={handleOpen}>
                {player.data.name}
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
                              <h2>Player Info</h2>
                              <p><b>Name:</b> {player.data.name}</p>           
                              <p><b>Health:</b> {player.data.health}</p>        
                              <p><b>Weapn:</b> {player.data.weapon.dmg}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
