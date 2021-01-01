import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import './CreerPartie.css';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  rootinput: {
  flexDirection: 'column',
  margin: 10,
  alignItems: 'center'
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '150px',
    marginRight: '500px',
    marginLeft: '500px',
    outline: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#f5f3f3",
    textAlign: 'center',
    height: 42,
    borderRadius: 15
  },
}));

export default function JoindrePartie() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [nomp, setNomp] = React.useState('');
  const [passwordp, setPasswordp] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="ButtonClick" >
         <Button className="btn" onClick={handleOpen} variant="outlined">Rejoindre une partie</Button>
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
           <form className={classes.root} noValidate autoComplete="off">
             <div className={classes.rootinput}>
               <input className="Input" type="text" onChange={(e) => setNomp(e.target.value)} placeholder="Nom de la partie" />
               <input className="Input" type="text" onChange={(e) => setPasswordp(e.target.value)} placeholder="Password de la partie" />
             </div>
           </form>
           <div className="ButtonClick" >
             <Button className="btn" variant="outlined">Rejoindre une partie</Button>
           </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
