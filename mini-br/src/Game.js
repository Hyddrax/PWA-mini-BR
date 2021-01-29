import React from "react";
import { Button } from '@material-ui/core';
import './Game.css';
import Grid from './Grid.js';
import DataCell from './DataObject/DataCell'
import Loader from 'react-loader-spinner';
import Constantes from "./Constantes"

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
        this.state.fetchingData = true;
        const response = await fetch(Constantes.backend_URL + "/games/" + gameId);
        const data = await response.json();
        if ((data != null && data != undefined) && (data.dataGame != null && data.dataGame != undefined)) {
            let dataGame = data.dataGame;
            dataGame.data.grid.data.cells = this.CELLS;
            this.setState({
                gameName: dataGame.gameName,
                gameId: dataGame.gameId,
                dataGrid: dataGame.data.grid,
                dataGame: dataGame,
                fetchingData: false
            })
            return {
                gameName: dataGame.gameName,
                gameId: dataGame.gameId,
                dataGrid: dataGame.data.grid,
                dataGame: dataGame,
                fetchingData: false
            };

        } else {
            alert("La partie que vous essayer de rejoindre n'existe pas !")
            // Reroute on "/"
            this.props.history.push('/');
        }



    }


    async nextPlayer() {
        const unStateState = await this.fetchGameData(this.state.gameId);
        let tmpDataGame = unStateState.dataGame;
        let tmpDataGrid = unStateState.dataGrid;
        let playerIsDead = true
        let nextPlayer = null;
        while (playerIsDead) {
            if (tmpDataGame.turnPlayerId == unStateState.dataGrid.data.players.length) {
                tmpDataGame.turnPlayerId = 1;
            } else {
                tmpDataGame.turnPlayerId++;
            }
            nextPlayer = tmpDataGrid.data.players[tmpDataGame.turnPlayerId - 1];
            if (nextPlayer != null && nextPlayer.health > 0) {
                playerIsDead = false;
            }
        }

        await fetch(Constantes.backend_URL + "/games/updateTurnPlayerId/" + tmpDataGame.gameId, {
            method: "PUT",
            body: JSON.stringify({ turnPlayerId: tmpDataGame.turnPlayerId }),
            headers: {
                'content-type': "application/json"
            }
        });

        await fetch(Constantes.backend_URL + "/sendNotificationTo", {
            method: "POST",
            body: JSON.stringify({ gameId: nextPlayer.gameId, playerId: nextPlayer.playerId, payload: { title: "It's Your Turn !", body: "You can play your turn whenever you want.", icon: "" } }),
            headers: {
                'content-type': "application/json"
            }
        });
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
