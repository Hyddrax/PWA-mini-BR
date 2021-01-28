const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  gameId: {
    type: String,
    required: true
  },
  playerId: {
    type: String,
    required: true
  },
  subscription: {
    type: String,
    required: true
  },
});
module.exports = Item = mongoose.model('player', PlayerSchema);