const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  gameId: {
    type: String,
    required: true
  },
  nomPartie: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  turnPlayerId: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
});
module.exports = Item = mongoose.model('game', GameSchema);