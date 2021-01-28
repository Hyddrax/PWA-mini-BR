class DataPlayer {

  playerId = null;
  gameId = null;
  data = null;

  name = null;
  armor = null;
  weapon = null;
  health = null;
  position = null;
  nbMoveAvailable = null;
  subscription = null;

  constructor(gameId, playerId, data) {
    this.gameId = gameId;
    this.playerId = playerId;
    this.data = data;

    this.name = data.name != null ? data.name : "Joueur" + this.playerId;
    this.armor = data.armor != null ? data.armor : { dmgAbsorption: 0 };
    this.weapon = data.weapon != null ? data.weapon : { dmg: 10 };
    this.health = data.health != null ? data.health : 100;
    this.position = data.position;
    this.nbMoveAvailable = data.nbMoveAvailable != null ? data.nbMoveAvailable : 9;
    this.subscription = data.subscription;
    this.initData();
  }

  initData() {
    this.data = { name: this.name, armor: this.armor, weapon: this.weapon, health: this.health, position: this.position };
  }


}

export default DataPlayer;
