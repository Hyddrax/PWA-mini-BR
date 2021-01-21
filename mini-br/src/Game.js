import './Game.css';
import Grid from './Grid.js';
import App from './App.js';
import { Container } from '@material-ui/core';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { Component } from "react";

function Game() {

    return (
        <div className="Ctn">
        <Container maxWidth='lg'>
        <div className="Game">
            <div className="Game-TopBar">
                <div className="GameName">
                    <div className="Name">Nom de la partie</div>
                </div>
                <div className="RightPanel">
                    <div className="ShowPlayers">Joueurs</div>
                    <div className="GoBack">Retour</div>
                </div>
            </div>
            <div className="Game-Playground">
            <TransformWrapper
            defaultScale={1}
            defaultPositionX={0}
            defaultPositionY={0}
            >
         {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
           <React.Fragment>
             <div className="tools">
               <button onClick={zoomIn}>+</button>
               <button onClick={zoomOut}>-</button>
               <button onClick={resetTransform}>x</button>
             </div>
             <TransformComponent>
               <Grid></Grid>
             </TransformComponent>
           </React.Fragment>
         )}
       </TransformWrapper>
            </div>
        </div>
        </Container>
        </div>
    );
}

export default Game;
