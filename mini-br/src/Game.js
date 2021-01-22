import React from "react";
import { Button } from '@material-ui/core';
import './Game.css';
import Grid from './Grid.js';
import DataGame from './DataObject/DataGame'
import DataGrid from './DataObject/DataGrid'
import DataCell from './DataObject/DataCell'
import DataPlayer from './DataObject/DataPlayer'
import Loader from 'react-loader-spinner';
class Game extends React.Component {

    CELLS = [
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLoot: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootArmor: true }), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({}), new DataCell({ isLootWeapon: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
        [new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true }), new DataCell({ isObstacle: true })],
    ];

    constructor(props) {
        super(props);
        console.log("Constructor");
        let tmpGameId = props.match.params.gameId;
        this.state = {
            fetchingData: true,
            gameName: "Partie Name",
            gameId: tmpGameId,
            dataGrid: {},
            dataGame: {},
        }
        // dataGrid: new DataGrid(tmpGameId, { cells: this.CELLS, players: [props.location.player] }),
        //     dataGame: new DataGame(tmpGameId, tmpGameName, { grid: this.dataGrid }),
        // this.subscribePushNotification(this.state.gameId, this.state.dataGrid);
    }

    componentDidMount() {
        this.fetchGameData(this.state.gameId);
    }

    async fetchGameData(gameId) {
        //getGame
        console.log("FETCH DATA");
        this.state.fetchingData = true;
        const response = await fetch("http://localhost:8000/games/" + gameId);
        const data = await response.json();
        console.log(data.dataGame);
        if ((data != null && data != undefined) && (data.dataGame != null && data.dataGame != undefined)) {
            let dataGame = data.dataGame;
            console.log(dataGame);
            dataGame.data.grid.data.cells = this.CELLS;
            this.setState({
                gameName: dataGame.gameName,
                gameId: dataGame.gameId,
                dataGrid: dataGame.data.grid,
                dataGame: dataGame,
                fetchingData: false
            })
            console.log(this.state);
        } else {
            alert("La partie que vous essayer de rejoindre n'existe pas !")
            // Reroute on "/"
            this.props.history.push('/');
        }



    }


    // subscribePushNotification = async (gameId, playerId) => {

    //     const publicVapidKey = 'BOgjL4TQxxngezXpmDytqwDc01U-JdI6JikShCWQSW6X92S5Pe5Hq_wGidEK-SsPpIi4dhsB2S-0i7N8fSBcfGE'

    //     const urlBase64ToUint8Array = (base64String) => {
    //         const padding = '='.repeat((4 - base64String.length % 4) % 4);
    //         const base64 = (base64String + padding)
    //             .replace(/\-/g, '+')
    //             .replace(/_/g, '/');

    //         const rawData = window.atob(base64);
    //         const outputArray = new Uint8Array(rawData.length);

    //         for (let i = 0; i < rawData.length; ++i) {
    //             outputArray[i] = rawData.charCodeAt(i);
    //         }
    //         return outputArray;
    //     };

    //     const register = await navigator.serviceWorker.ready;
    //     try {
    //         const subscription = await register.pushManager.subscribe({
    //             userVisibleOnly: true,
    //             applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    //         });
    //         await fetch("http://localhost:8000/subscribe", {
    //             method: "POST",
    //             body: JSON.stringify({ "subscription": subscription, "gameId": gameId, "playerId": playerId }),
    //             headers: {
    //                 'content-type': "application/json"
    //             }
    //         });
    //         console.log('Push send !');
    //     }
    //     catch (e) {
    //         console.log("Subscribe rejected");
    //     }
    // }

    nextPlayer() {
        console.log("NextPlayer");
        let tmpDataGame = Object.assign({}, this.state.dataGame);
        if (tmpDataGame.turnPlayerId == this.state.dataGrid.data.players.length) {
            tmpDataGame.turnPlayerId = 1;
        } else {
            tmpDataGame.turnPlayerId++;
        }

        this.setState({
            dataGame: tmpDataGame
        });
    }

    render() {
        return (
            <div className="Game">
                <div className="Game-TopBar">
                    <div className="GameName">
                        <div className="Name">{this.state.gameName != null ? this.state.gameName : "Nom de la partie"}</div>
                    </div>
                    <div className="RightPanel">
                        <Button className="ShowPlayers">Joueurs</Button>
                        <Button href="/" className="GoBack">Retour</Button>
                    </div>
                </div>
                <div className="Game-Playground">
                    {this.state.fetchingData ? <div
                        style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Loader type="ThreeDots" color="#FFFFFF" height="100" width="100" />
                    </div> :
                        <Grid dataGrid={this.state.dataGrid} turnPlayerId={this.state.dataGame.turnPlayerId} nextPlayer={this.nextPlayer.bind(this)}></Grid>}
                </div>
            </div >
        );
    }
}

export default Game;
