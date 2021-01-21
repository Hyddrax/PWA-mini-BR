const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
const PORT = 8000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const stringToHash = (string) => { 
                  
  var hash = 0; 
    
  if (string.length == 0) return hash; 
    
  for (i = 0; i < string.length; i++) { 
      char = string.charCodeAt(i); 
      hash = ((hash << 5) - hash) + char; 
      hash = hash & hash; 
  } 

  return hash; 
} 

// -------------------------------------
// --------------- GAMES ---------------
// -------------------------------------

// fakes GAMES data
const games = []

for(let i = 0; i <= 5; i++){
  const data = {
      "gameId": (Math.floor(Math.random() * (9999999-1111111)) + 1111111).toString(),
      "nomPartie": `Game ${i}`,
      "password": (Math.floor(Math.random() * (9999-1111)) + 1111).toString(),
      "turnPlayerId": (Math.floor(Math.random() * (5-1)) + 1).toString(),
      "data": {}
    }
  games.push(data)
}

app.get('/', (req, res) => {
  res.send('🌍 PWA Mini BR Backend Work !')
})

// GET /games
app.get('/games', (req, res) => {
  res.json({
    data: games
  })
  console.log(chalk.bgBlue.black('GET All games'))
})

// GET /games:id
app.get('/games/:id', (req, res) => {
  const id = req.params.id
  const game = []
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId === id) {
      game.push(games[i])
      console.log(chalk.bgBlue.black(`GET game on index : ${id}`))
    }
  } 
  res.json({
    data: game
  })
})

// POST /games/add
app.post('/games/add', (req, res) => {
  const data = req.body
  games.push(data)
  res.json({
    data: data
  })
  console.log(chalk.bgBlue.black(`POST new Game : ${games[games.length-1].nomPartie}`))
})

// PUT /games/update/:id
app.put('/games/update/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId === id) {
      games[i] = Object.assign(games[i], data)
      console.log(chalk.bgBlue.black(`PUT Game : ${games[id].nomPartie} / gameId : ${id}`))
    }
  } 
  res.json({
    data: data
  })
})

// DELETE /games/remove/:id
app.delete('/games/remove/:id', (req, res) => {
  const id = req.params.id
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId === id) {
      games.splice(i, 1)
    }
  }
  res.sendStatus(200)
})

// -------------------------------------
// -------------- PLAYERS --------------
// -------------------------------------

// fakes PLAYERS data
const players = []
const gm = ['000000', '111111'];
const bool = [{'sub':true}, {}];

for(let i = 0; i <= 15; i++){
  const data = {
      "gameId": gm[Math.floor(Math.random() * gm.length)],
      "playerId": (Math.floor(Math.random() * (5-1)) + 1).toString(),
      "subscription": bool[Math.floor(Math.random() * bool.length)],
    }
  players.push(data)
}

// GET /players
app.get('/players', (req, res) => {
  res.json({
    data: players
  })
  console.log(chalk.bgBlue.black('GET All players'))
})

// GET /players::game/:id
app.get('/players/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id
  const player = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId === game && players[i].playerId === id) {
      player.push(players[i])
      console.log(chalk.bgBlue.black(`GET player on index : ${id}`))
    }
  }
  res.json({
    data: player
  })
})

// POST /players/add
app.post('/players/add', (req, res) => {
  const data = req.body
  players.push(data)
  res.json({
    data: data
  })
  console.log(chalk.bgBlue.black(`POST new players : ${players[players.length-1].playerId} / index : ${players.length-1}`))
})

// PUT /games/update/:game/:id
app.put('/players/update/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id
  const data = req.body
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId === game && players[i].playerId === id) {
      players[i] = Object.assign(players[i], data)
      console.log(chalk.bgBlue.black(`PUT Player : ${players[id].playerId} / index : ${id}`))
    }
  }
  res.json({
    data: data
  })
})

// DELETE /players/remove/:game/:id
app.delete('/players/remove/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId === game && players[i].playerId === id) {
      // console.log(chalk.bgBlue.black(`DELETE Player : ${players[id].playerId} / index : ${id}`))
      players.splice(i, 1)
    }
  }
  res.sendStatus(200)
})

// -------------------------------------
// ----------- SUBSCRIPTION ------------
// -------------------------------------

// GET /subscribers/:game/:id
app.get('/subscribers/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id

  const player = []

  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId === game && players[i].playerId === id) {
      player.push(players[i])
    }

  }  
  res.json({
    data: {
      player
    }
  })
  console.log(chalk.bgBlue.black('GET Subscriber and Nonsubscriber'))
})

// ------------------------------------
// -------------- SERVER --------------
// ------------------------------------

// Server listening on port 8000
app.listen(PORT, () => console.log(chalk.bgGreen.black('Server listening on port ' + PORT)))