const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const bodyParser = require('body-parser')
const webpush = require('web-push')
const mongoose = require('mongoose');
const Game = require('./models/game')
const Player = require('./models/player')

const app = express()
app.use(cors())
const PORT = 8000

console.log(process.env.NODE_ENV)

// Config web-push
const publicVapidKey = 'BOgjL4TQxxngezXpmDytqwDc01U-JdI6JikShCWQSW6X92S5Pe5Hq_wGidEK-SsPpIi4dhsB2S-0i7N8fSBcfGE'
const privateVapidKey = 'drffnLNhK9wWL6nuzM4rYSCQ88dAjsaVW_tTJzfFPdI'

webpush.setVapidDetails(
  'mailto: baptiste.lechat@ynov.com',
  publicVapidKey,
  privateVapidKey
)

const db = "mongodb+srv://pwa-mini-br-admin:_123456@cluster0.lb8gb.mongodb.net/pwa-mini-br-database?retryWrites=true&w=majority";


mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected...')
})
.catch(err => console.log(err))

// fake data
const games = []
const mongoGames = Game.find().then(games => {
  games.forEach(el => {
    games.push(el);
  });
})
console.log(games);



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

for(let i = 0; i <= 4; i++){
  const data = {
      "gameId": 'game1',
      "playerId": ''+(i+1),
      "subscription": null,
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

let tmpPlayerId = 1

// Subcribe route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription Options
  const subscription = req.body.subscription
  const gameId = req.body.gameId
  // const playerId = req.body.playerId
  const playerId = ''+tmpPlayerId
  tmpPlayerId++

  console.log(req.body);

  for (let i = 0; i < players.length; i++) {
    console.log(players[i].gameId === gameId, players[i].playerId === playerId);
    if (players[i].gameId === gameId && players[i].playerId === playerId) {
      console.log('add subcription');
      players[i].subscription = subscription
    }
    console.log(players[i]);
  }

  // Send 201 - Ressource create
  res.status(201).json({})

  //Create payload
  const payload = JSON.stringify({
    title: 'PWA Mini BR',
    body: 'Vous vous êtes abonné aux notifications',
    icon: 'https://img.icons8.com/dusk/64/000000/appointment-reminders--v1.pn'
  })


  // Send object into sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.log(err))
})

app.post('/sendNotification', (req, res) => {
  const subscription = req.body.subscription
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon

  // Send 201 - Ressource create
  res.status(201).json({})

  //Create payload
  const payload = JSON.stringify({
    title: notificationTitle,
    body: notificationBody,
    icon: notificationIcon
  })

  // Send object into sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.log(err))
})

app.post('/notifyAll', (req, res) => {
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon

  let subscriptions = []

  for (let i = 0; i < players.length; i++) {
    if (players[i].subscription != null) {
      subscriptions.push(players[i].subscription)
    }
  }  

  // Send 201 - Ressource create
  res.status(201).json({})

  //Create payload
  const payload = JSON.stringify({
    title: notificationTitle,
    body: notificationBody,
    icon: notificationIcon
  })

  console.log(subscriptions)

  subscriptions.forEach((subscription, index) => {
    // Send object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.log(err))
    console.log('notify'+index);
  });

  res.body = {
    "Message": "SUCCESS !"
  }

})

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