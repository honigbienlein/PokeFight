// hier das Schema, spieler, gewinner, datum
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  winnerID:  Number,
  winnerName: String,
  enemyID: Number,
  enemyName: String,
  date: { type: Date, default: Date.notoLocaleStringw },
});

// const GameResult = mongoose.model('GameResult', gameSchema);

// das in app.js mongose connect geht auch ansers. siehe vorlesung

// schema dann in ein file im modals ordner zb results.js exportieren etc, importieren, in vorlesung record

// try/ catch in app.js einbauen
module.exports=mongoose.model('Results', gameSchema);