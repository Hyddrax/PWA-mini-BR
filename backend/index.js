const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const bodyParser = require('body-parser')
const webpush = require('web-push')

const app = express()
app.use(cors())
const PORT = 8000

// Config web-push
const publicVapidKey = 'BOgjL4TQxxngezXpmDytqwDc01U-JdI6JikShCWQSW6X92S5Pe5Hq_wGidEK-SsPpIi4dhsB2S-0i7N8fSBcfGE'
const privateVapidKey = 'drffnLNhK9wWL6nuzM4rYSCQ88dAjsaVW_tTJzfFPdI'
webpush.setVapidDetails(
  'mailto: baptiste.lechat@ynov.com',
  publicVapidKey,
  privateVapidKey
)

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

// for (let i = 0; i <= 5; i++) {
//   const data = {
//     "gameId": (Math.floor(Math.random() * (9999999 - 1111111)) + 1111111).toString(),
//     "nomPartie": `Game ${i}`,
//     "password": (Math.floor(Math.random() * (9999 - 1111)) + 1111).toString(),
//     "turnPlayerId": (Math.floor(Math.random() * (5 - 1)) + 1).toString(),
//     "data": {}
//   }
//   games.push(data)
// }

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
  const gameId = req.params.id
  let dataGame = []
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId == gameId) {
      dataGame.push(games[i])
      console.log(chalk.bgBlue.black(`GET game on index : ${gameId}`))
    }
  }
  res.json({
    dataGame: dataGame[0]
  })
})

// POST /games/add -> Create New partie
app.post('/games/add', (req, res) => {
  const dataGame = req.body;
  const dataPlayer = dataGame.data.grid.data.players;
  console.log(dataPlayer);

  games.push(dataGame)
  dataPlayer.forEach(player => {
    players.push(player)
  });

  res.json({
    dataGame: dataGame,
    dataPlayer: dataPlayer
  })
  console.log(chalk.bgBlue.black(`POST new Game : ${games[games.length - 1].gameName}`))
  console.log(chalk.bgBlue.black(`POST new Player : ${players[players.length - 1].name}`))
})

// PUT /games/update/:id
app.put('/games/update/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  for (let i = 0; i < games.length; i++) {
    if (games[i].gameId == id) {
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
    if (games[i].gameId == id) {
      games.splice(i, 1)
    }
  }
  res.sendStatus(200)
})

app.put('/games/updateTurnPlayerId/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  for (let i = 0; i < games.length; i++) {
    console.log(games[i].gameId, id);
    if (games[i].gameId == id) {
      games[i].turnPlayerId = data.turnPlayerId;
      console.log(chalk.bgWhite.black("updateTurnPlayerId : " + games[i]))
    }
  }
  res.sendStatus(200)
})

// -------------------------------------
// -------------- PLAYERS --------------
// -------------------------------------

// fakes PLAYERS data
const players = []

// for (let i = 0; i <= 4; i++) {
//   const data = {
//     "gameId": 'game1',
//     "playerId": '' + (i + 1),
//     "subscription": null,
//   }
//   players.push(data)
// }

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
    if (players[i].gameId == game && players[i].playerId == id) {
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
  const newPlayer = req.body;

  let gamePlayers = [];

  players.forEach(player => {
    if (player.gameId == newPlayer.gameId) {
      gamePlayers.push(player);
    }
  });

  if (gamePlayers.length == 5) {
    res.json({
      message: "The game is already full"
    })
  } else {
    let ids = [1, 2, 3, 4, 5];
    let alreadyUsedIds = [];
    gamePlayers.forEach(player => {
      if (ids.includes(player.playerId)) {
        alreadyUsedIds.push(player.playerId);
      }
    });

    let notUsedIds = ids.filter(item => !alreadyUsedIds.includes(item));
    if (notUsedIds.length == 0) {
      res.json({
        message: "Tout les id sont déjà utilisé"
      })
    } else {
      newPlayer.playerId = notUsedIds[0];

      let positionList = [{ x: 3, y: 2 }, { x: 38, y: 17 }, { x: 38, y: 2 }, { x: 3, y: 17 }, { x: 21, y: 9 }]

      newPlayer.position = positionList[newPlayer.playerId - 1];

      players.push(newPlayer)

      let dataGame = []
      for (let i = 0; i < games.length; i++) {
        if (games[i].gameId == newPlayer.gameId) {
          dataGame.push(games[i])
          console.log(chalk.bgBlue.black(`GET game on index : ${newPlayer.gameId}`))
        }
      }

      dataGame[0].data.grid.data.players = [...dataGame[0].data.grid.data.players, newPlayer];

      res.json({
        newPlayer: newPlayer
      })
      console.log(chalk.bgBlue.black(`POST new players : ${players[players.length - 1].playerId} / index : ${players.length - 1}`))
    }
  }



})

// PUT /players/update/:game/:id
app.put('/players/update/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id
  const data = req.body
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == game && players[i].playerId == id) {
      players[i] = Object.assign(players[i], data)
      console.log(chalk.bgBlue.black(`PUT Player : ${players[id].playerId} / index : ${id}`))
    }
  }
  res.json({
    data: data
  })
})

// PUT /players/updateHealth/:game/:id
app.put('/players/updateHealth/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id
  const data = req.body;

  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == game && players[i].playerId == id) {
      players[i].health = data.health;
      if (data.health <= 0) {
        players[i].isDead = true;
      }
      console.log(chalk.bgBlue.black(`PUT Player : ${players[i].playerId} / index : ${id}`))
    }
  }
  res.json({
    data: data
  })
})


// PUT /players/updateEquipment/:gameId/:playerId
app.put('/players/updateEquipment/:gameId/:playerId', (req, res) => {
  const gameId = req.params.gameId
  const playerId = req.params.playerId
  const data = req.body
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == gameId && players[i].playerId == playerId) {
      if (data.armor) {
        players[i].armor = data.armor;
      }
      if (data.weapon) {
        players[i].weapon = data.weapon;
      }

      console.log(chalk.bgBlue.black(`PUT Player : ${players[i].playerId} / index : ${playerId}`))
    }
  }
  res.json({
    data: data
  })
})

// PUT /players/updatePosition/:gameId/:playerId
app.put('/players/updatePosition/:gameId/:playerId', (req, res) => {
  const gameId = req.params.gameId
  const playerId = req.params.playerId
  const data = req.body
  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == gameId && players[i].playerId == playerId) {
      players[i].position = data.position;
      players[i].nbMoveAvailable = data.nbMoveAvailable;
      console.log(chalk.bgBlue.black(`PUT Player : ${players[i].playerId} / index : ${playerId}`))
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
    if (players[i].gameId == game && players[i].playerId == id) {
      // console.log(chalk.bgBlue.black(`DELETE Player : ${players[id].playerId} / index : ${id}`))
      players.splice(i, 1)
    }
  }
  res.sendStatus(200)
})

// -------------------------------------
// ----------- LOOTS ------------
// -------------------------------------

// fakes LOOTS data
const loots = []

// {gameId : "AZEaze", lootedCells:[{x:1, y:2, isLooted:false}]}

// GET /loots::game/:id
app.get('/loots/:game', (req, res) => {
  const game = req.params.game
  let gameLoots = {};
  for (let i = 0; i < loots.length; i++) {
    if (loots[i].gameId == game) {
      gameLoots = loots[i];
    }
  }
  res.json(gameLoots)
})

app.post('/loots/add', (req, res) => {
  const gameId = req.body.gameId;
  const lootedCell = req.body.lootedCell;
  let lootsExist = false;
  for (let i = 0; i < loots.length; i++) {
    if (loots[i].gameId == gameId) {
      loots[i].lootedCells.push(lootedCell);
      lootsExist = true;
    }
    console.log(chalk.bgBlue.black(`POST loot on index`))
  }

  if (!lootsExist) {
    loots.push({ gameId: gameId, lootedCells: [lootedCell] })
  }

  res.sendStatus(200)

})



// -------------------------------------
// ----------- SUBSCRIPTION ------------
// -------------------------------------


// Subcribe route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription Options
  console.log("subscribe");
  const subscription = req.body.subscription
  const gameId = req.body.gameId
  const playerId = req.body.playerId

  console.log(subscription);
  console.log(gameId, playerId);

  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == gameId && players[i].playerId == playerId) {
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

app.post('/sendNotificationTo', (req, res) => {
  const gameId = req.body.gameId
  const playerId = req.body.playerId
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon

  let subscription = null;

  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == gameId && players[i].playerId == playerId) {
      subscription = players[i].subscription;
    }
  }


  // Send 201 - Ressource create
  res.status(201).json({})
  if (subscription != null) {
    //Create payload
    const payload = JSON.stringify({
      title: notificationTitle,
      body: notificationBody,
      icon: notificationIcon
    })

    // Send object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.log(err))
  }
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
    console.log('notify' + index);
  });

  res.body = {
    "Message": "SUCCESS !"
  }

})

// GET /subscribers/:game/:id
app.get('/subscriber/:game/:id', (req, res) => {
  const game = req.params.game
  const id = req.params.id

  let subscription = {}

  for (let i = 0; i < players.length; i++) {
    if (players[i].gameId == game && players[i].playerId == id) {
      subscription = players[i].subscription;
    }

  }
  res.json({
    subscription
  })
  console.log(chalk.bgBlue.black('GET Subscriber and Nonsubscriber'))
})

// ------------------------------------
// -------------- SERVER --------------
// ------------------------------------

// Server listening on port 8000
app.listen(PORT, () => console.log(chalk.bgGreen.black('Server listening on port ' + PORT)))