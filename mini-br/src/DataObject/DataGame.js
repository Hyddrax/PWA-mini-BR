class DataGame {

  gameId = null;
  gameName = null;
  turnPlayerId = null;
  data = null;

  constructor(gameId, gameName, data) {
    this.gameId = gameId;
    this.gameName = gameName;
    this.turnPlayerId = 1;
    this.data = data;
  }


}

export default DataGame;
