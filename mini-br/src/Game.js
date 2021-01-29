import React from "react";
import { Button } from '@material-ui/core';
import './Game.css';
import Grid from './Grid.js';
import DataCell from './DataObject/DataCell'
import Loader from 'react-loader-spinner';
import Constantes from "./Constantes"
import PlayerInfo from './Modal/PlayerInfo.js'

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
            turnPlayerId: 1,
            dataPlayers: [],
            dataGrid: {},
            dataGame: {},
            CurrentPlayer: null,
        }
        // dataGrid: new DataGrid(tmpGameId, { cells: this.CELLS, players: [props.location.player] }),
        //     dataGame: new DataGame(tmpGameId, tmpGameName, { grid: this.dataGrid }),
        // this.subscribePushNotification(this.state.gameId, this.state.dataGrid);
        this.PlayerInfos()

    }

    componentDidMount() {
        this.fetchGameData(this.state.gameId);
        this.PlayerInfos();
    }

    async fetchGameData(gameId) {
        //getGame
        this.state.fetchingData = true;
        let gameResponse = null;
        let data = null;
        let playerResponse = null;
        let players = null;
        let dataIsFetched = false
        let timeOut = false
        var startingTime = performance.now()
        while (!dataIsFetched && !timeOut) {
            gameResponse = await fetch(Constantes.backend_URL + "/games/" + gameId);
            data = await gameResponse.json();
            playerResponse = await fetch(Constantes.backend_URL + "/players/" + gameId);
            players = await playerResponse.json();

            if ((data != null && data != undefined)
                && (data.dataGame != null || data.dataGame != undefined)
                && (players != null || players != undefined)) {
                dataIsFetched = true;
            }
            var time = performance.now()

            if ((time - startingTime) > 3000) {
                timeOut = true;
            }
        }

        if ((data != null && data != undefined) && (data.dataGame != null && data.dataGame != undefined)) {
            let dataGame = data.dataGame;
            dataGame.data = { grid: { data: { cells: this.CELLS } } }
            this.setState({
                gameName: dataGame.gameName,
                gameId: dataGame.gameId,
                dataGrid: dataGame.data.grid,
                dataGame: dataGame,
                turnPlayerId: dataGame.turnPlayerId,
                dataPlayers: players.data,
                fetchingData: false
            })
            return {
                gameName: dataGame.gameName,
                gameId: dataGame.gameId,
                dataGrid: dataGame.data.grid,
                dataGame: dataGame,
                turnPlayerId: dataGame.turnPlayerId,
                dataPlayers: players.data,
                fetchingData: false
            };

        } else {
            alert("La partie que vous essayer de rejoindre n'existe pas !")
            // Reroute on "/"
            this.props.history.push('/');
        }

    }
    async PlayerInfos(){
        // const theStateState = await this.fetchGameData(this.state.);

        const unStateState = await this.fetchGameData(this.state.gameId);
        let tmpDataGame = unStateState.dataGame;
        let tmpDataGrid = unStateState.dataGrid;
        let CurrentPlayerT = tmpDataGrid.data.players[tmpDataGame.turnPlayerId-1];
        this.setState({CurrentPlayer:  Object.assign({}, CurrentPlayerT)});
       // console.log(this.state.CurrentPlayer);
    }


    async nextPlayer() {
        const unStateState = await this.fetchGameData(this.state.gameId);
        let tmpDataGame = unStateState.dataGame;
        let playerIsDead = true
        let nextPlayer = null;
        while (playerIsDead) {
            if (tmpDataGame.turnPlayerId == unStateState.dataPlayers.length) {
                tmpDataGame.turnPlayerId = 1;
            } else {
                tmpDataGame.turnPlayerId++;
            }
            nextPlayer = unStateState.dataPlayers[tmpDataGame.turnPlayerId - 1];
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
                        {/* <Button className="ShowPlayers">Joueurs</Button> */}
                        {this.state.CurrentPlayer !== null && <PlayerInfo player={this.state.CurrentPlayer}/> }
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
                        <Grid dataGrid={this.state.dataGrid} dataPlayers={this.state.dataPlayers} turnPlayerId={this.state.dataGame.turnPlayerId} nextPlayer={this.nextPlayer.bind(this)}></Grid>}
                </div>
            </div >
        );
    }
}

export default Game;
