class DataPlayer {

  playerId = null;
  gameId = null;

  name = null;
  armor = null;
  weapon = null;
  health = null;
  position = null;
  nbMoveAvailable = null;
  subscription = null;
  isDead = null;

  constructor(gameId, playerId, data) {
    this.gameId = gameId;
    this.playerId = playerId;

    this.name = data.name != null ? data.name : "Joueur" + this.playerId;
    this.armor = data.armor != null ? data.armor : { dmgAbsorption: 0 };
    this.weapon = data.weapon != null ? data.weapon : { dmg: 10 };
    this.health = data.health != null ? data.health : 100;
    this.position = data.position;
    this.isDead = data.isDead != null ? data.isDead : false;

    this.nbMoveAvailable = data.nbMoveAvailable != null ? data.nbMoveAvailable : 9;
    this.subscription = data.subscription != null ? data.subscription : {};
  }



}

export default DataPlayer;
