import { Button } from '@material-ui/core';
import './Game.css';
import Grid from './Grid.js';
import App from './App.js';
import { Container } from '@material-ui/core';
import React, { Component } from "react";

function Game() {

    // function test () {
    //     const grid = new Grid();
    //     const startingPoint = {x : 9, y : 20};
    //     const distance = 9;
    //     document.querySelector(`.x${startingPoint.x}y${startingPoint.y}`).classList.add("player");

    //     const worker = new Worker("./worker.js");
    //     const startTime = performance.now();
    //     worker.addEventListener("message", (e) => {
    //         const accessible = e.data;
    //         for(coords of accessible){
    //             document.querySelector(`.x${coords.x}y${coords.y}`).classList.add("walkable");
    //         }
    //         console.log(`Finished in ${performance.now() - startTime} ms.`);
    //     });
    //     worker.postMessage({this,startingPoint,distance});

    //     return
    // }

    return (
      <div className="Full">
        <div className="Ctn">
        <div className="Game">
            <div className="Game-TopBar">
                <div className="GameName">
                    <Button className="Name">Nom de la partie</Button>
                </div>
                <div className="RightPanel">
                    <Button className="ShowPlayers">Joueurs</Button>
                    <Button href="/" className="GoBack">Retour</Button>
                </div>
            </div>
            <div className="Game-Playground">
                <Grid></Grid>
            </div>
           </div>
          </div>
        </div>
    );
}

export default Game;
