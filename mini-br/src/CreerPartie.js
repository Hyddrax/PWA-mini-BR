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
    borderRadius: 15,
    border: 'none'
  },
}));

export default function CreerPartie() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [nbj, setNbj] = React.useState('');
  const [nbt, setNbt] = React.useState('');
  const [nomp, setNomp] = React.useState('');
  const [passwordp, setPasswordp] = React.useState('');

  const handleChangeNbj = (event) => {
    setNbj(event.target.value);
  };

  const handleChangeNbt = (event) => {
    setNbt(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <div className="ButtonClick" >
         <Button className="btn" onClick={handleOpen} variant="outlined">Créer une partie</Button>
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
               <div className="InputNB">
                 <div><p className="InputNBT">Nombres de jouers:</p></div>
                 <div className="InputNBJRight" >
                  {/* <input className="InputNBJ" type="text" placeholder="24h" /> */}
                   <FormControl variant="outlined" className={classes.formControl}>
                    {nbj === '' && <InputLabel id="demo-simple-select-label1">4</InputLabel> }
                    <Select
                      labelId="demo-simple-select-label1"
                      id="demo-simple-select1"
                      value={nbj}
                      onChange={handleChangeNbj}
                     >
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                 </div>
               </div>
               <div className="InputNB">
                 <div><p className="InputNBT">Temps par tour:</p></div>
                 <div className="InputNBJRight" >
                  {/* <input className="InputNBJ" type="text" placeholder="24h" /> */}
                  <FormControl variant="outlined" className={classes.formControl}>
                    {nbt === '' && <InputLabel id="demo-simple-select-label">24h</InputLabel> }
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={nbt}
                      onChange={handleChangeNbt}
                    >
                      <MenuItem value={24}>24h</MenuItem>
                    </Select>
                  </FormControl>
                 </div>
               </div>
             </div>
           </form>
           <div className="ButtonClick" >
             <Button className="btn" variant="outlined">Créer une partie</Button>
           </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
