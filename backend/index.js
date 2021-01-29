const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const bodyParser = require('body-parser')
const webpush = require('web-push')

const DbConnection = require('./dba');

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

app.get('/', (req, res) => {
  console.log("PWA Mini BR Backend Work !");
  res.send('🌍 PWA Mini BR Backend Work !')
})

const getCollection = async () => {
  let db = await DbConnection.Get();
  let gamesCollection = db.collection('games')
  let playersCollection = db.collection('players')
  let lootsCollection = db.collection('loots')
  return { gamesCollection, playersCollection, lootsCollection }
}

app.get('/clearData', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  try {

    gamesCollection.deleteMany({}, function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });

    playersCollection.deleteMany({}, function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });

    lootsCollection.deleteMany({}, function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });
  } catch (e) {
    return console.error(e);;
  }

  res.status(200);
  res.json({
    message: "All collection cleared"
  })
});

// -------------------------------------
// --------------- GAMES ---------------
// -------------------------------------

// findAll games
app.get('/games', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  gamesCollection.find().toArray().then(results => {
    console.log(chalk.bgBlue.black('findAll games'))
    res.json({
      data: results
    })
  }).catch(error => console.error(error))
})

// findOne game
app.get('/games/:id', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  console.log("find game by ID");
  const gameId = req.params.id

  let query = { gameId: gameId };

  gamesCollection.findOne(query).then(result => {
    console.log(chalk.bgBlue.black('findOne game'))
    res.json({
      dataGame: result
    })
  }).catch(error => console.error(error))

})

// Create New partie
app.post('/games/add', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const dataGame = req.body.dataGame;
  const dataPlayer = req.body.player1;

  gamesCollection.insertOne(dataGame).then(result => {
    let newGame = result.ops[0];
    playersCollection.insertOne(dataPlayer).then(result => {
      res.json({
        dataGame: newGame,
        dataPlayer: result.ops[0]
      })
    }).catch(error => console.error(error));
  }).catch(error => console.error(error));
})

// games updateTurnPlayerId
app.put('/games/updateTurnPlayerId/:id', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const id = req.params.id;
  const data = req.body;
  let query = { gameId: id };
  var newValues = { $set: { turnPlayerId: data.turnPlayerId } };
  gamesCollection.updateOne(query, newValues).then(result => {
    console.log("update TurnPlayerId");
    res.sendStatus(200)
  }).catch(error => console.error(error));
})



// -------------------------------------
// -------------- PLAYERS --------------
// -------------------------------------

// findAll players
app.get('/players', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  playersCollection.find().toArray().then(results => {
    console.log(chalk.bgBlue.black('findAll players'))
    res.json({
      data: results
    })
  }).catch(error => console.error(error))
})

// findAll game players
app.get('/players/:gameId', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  console.log("find players by gameId");
  const gameId = req.params.gameId
  let query = { gameId: gameId };
  playersCollection.find(query).toArray().then(results => {
    console.log(chalk.bgBlue.black('findAll players'))
    res.json({
      data: results
    })
  }).catch(error => console.error(error))
})

// findOne players
app.get('/players/:game/:id', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const game = req.params.game
  const id = parseInt(req.params.id)
  const player = []

  let query = { gameId: game, playerId: id };

  playersCollection.find(query).toArray().then(results => {
    console.log(chalk.bgBlue.black('findOne player'))
    res.json({
      data: results
    })
  }).catch(error => console.error(error))

})

// insertOne player
app.post('/players/add', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const newPlayer = req.body;
  let query = { gameId: newPlayer.gameId };

  playersCollection.find(query).toArray().then(gamePlayers => {

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

        playersCollection.insertOne(newPlayer).then(result => {
          let query = { gameId: newPlayer.gameId };

          gamesCollection.findOne(query).then(result => {
            let gameWithNewPlayer = result.data.grid.data.players = [...result.data.grid.data.players, newPlayer];
            gamesCollection.updateOne(query, gameWithNewPlayer).then(result => {
              res.json({
                newPlayer: newPlayer
              })
            }).catch(error => console.error(error));
          }).catch(error => console.error(error))
        }).catch(error => console.error(error));
      }
    }
  }).catch(error => console.error(error))
})

const updatePlayer = async (gameId, playerId, newValues, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  let query = { gameId: gameId, playerId: parseInt(playerId) };
  console.log(query, newValues);
  playersCollection.updateOne(query, newValues).then(result => {
    console.log("result : ", result);
    if (result.health <= 0) {
      playersCollection.updateOne(query, { $set: { isDead: true } }).then(result => {
        res.json({
          data: result
        })
      }).catch(error => console.error(error));
    }

    res.json({
      data: result
    })
  }).catch(error => console.error(error));
}

// update player Health
app.put('/players/updateHealth/:game/:id', async (req, res) => {
  const game = req.params.game
  const id = parseInt(req.params.id)
  const data = req.body;
  var newValues = { $set: { health: data.health } };
  await updatePlayer(game, id, newValues, res);
})


// Pupdate player Equipment
app.put('/players/updateEquipment/:gameId/:playerId', async (req, res) => {
  const gameId = req.params.gameId
  const playerId = parseInt(req.params.playerId)
  const data = req.body

  var newValues = null;
  if (data.armor && data.weapon) {
    newValues = { $set: { armor: data.armor, weapon: data.weapon } };
  } else if (data.weapon) {
    newValues = { $set: { weapon: data.weapon } };
  } else if (data.armor) {
    newValues = { $set: { armor: data.armor } };
  }

  if (newValues != null) {
    await updatePlayer(gameId, playerId, newValues, res);
  }
})

// update player Position
app.put('/players/updatePosition/:gameId/:playerId', async (req, res) => {
  const gameId = req.params.gameId
  const playerId = parseInt(req.params.playerId)
  const data = req.body

  var newValues = { $set: { position: data.position, nbMoveAvailable: data.nbMoveAvailable } };
  await updatePlayer(gameId, playerId, newValues, res);
})

// -------------------------------------
// ----------- LOOTS ------------
// -------------------------------------

// findOne Loots
app.get('/loots/:game', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const game = req.params.game

  let query = { gameId: game };

  lootsCollection.findOne(query).then(result => {
    res.json(result)
  }).catch(error => console.error(error))

})

// insertOne loots
app.post('/loots/add', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const gameId = req.body.gameId;
  const lootedCell = req.body.lootedCell;
  let lootsExist = false;

  let query = { gameId: gameId };

  lootsCollection.findOne(query).then(result => {
    if (result && result.lootedCells) {
      var newValues = { $set: { lootedCells: [...result.lootedCells, lootedCell] } };
      lootsCollection.updateOne(query, newValues).then(result => {
        res.sendStatus(200)
      }).catch(error => console.error(error));
    } else {
      lootsCollection.insertOne({ gameId: gameId, lootedCells: [lootedCell] }).then(result => {
        res.sendStatus(200)
      }).catch(error => console.error(error));
    }

  }).catch(error => console.error(error))

})


// -------------------------------------
// ----------- SUBSCRIPTION ------------
// -------------------------------------


// Subcribe route
app.post('/subscribe', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  // Get pushSubscription Options
  const subscription = req.body.subscription
  const gameId = req.body.gameId
  const playerId = parseInt(req.body.playerId)


  let query = { gameId: gameId, playerId: playerId };
  var newValues = { $set: { subscription: subscription } };
  console.log(query, newValues);
  gamesCollection.updateOne(query, newValues).then(result => {
    res.status(201).json({})
    console.log(result);
    const payload = JSON.stringify({
      title: 'PWA Mini BR',
      body: 'Vous vous êtes abonné aux notifications',
      icon: 'https://img.icons8.com/dusk/64/000000/appointment-reminders--v1.pn'
    })

    webpush.sendNotification(subscription, payload).catch(err => console.log(err))
  }).catch(error => console.error(error));
})

app.post('/sendNotification', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const subscription = req.body.subscription
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon

  res.status(201).json({})

  const payload = JSON.stringify({
    title: notificationTitle,
    body: notificationBody,
    icon: notificationIcon
  })

  webpush.sendNotification(subscription, payload).catch(err => console.log(err))
})

app.post('/sendNotificationTo', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const gameId = req.body.gameId
  const playerId = parseInt(req.body.playerId)
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon

  let query = { gameId: gameId, playerId: playerId };

  playersCollection.findOne(query).then(result => {

    let subscription = result.subscription;
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


  }).catch(error => console.error(error))

})

app.post('/notifyAll', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const notificationTitle = req.body.payload.title
  const notificationBody = req.body.payload.body
  const notificationIcon = req.body.payload.icon


  playersCollection.find().toArray().then(players => {
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

    subscriptions.forEach((subscription, index) => {
      // Send object into sendNotification
      webpush.sendNotification(subscription, payload).catch(err => console.log(err))
      console.log('notify' + index);
    });

    res.body = {
      "Message": "SUCCESS !"
    }


  }).catch(error => console.error(error))

})

// findOne player subscription
app.get('/subscriber/:game/:id', async (req, res) => {
  let { gamesCollection, playersCollection, lootsCollection } = await getCollection();
  const game = req.params.game
  const id = parseInt(req.params.id)

  let query = { gameId: game, playerId: id };

  console.log(game, id);

  playersCollection.findOne(query).then(result => {
    console.log(result);
    res.json(result.subscription)

  }).catch(error => console.error(error))

})



// ------------------------------------
// -------------- SERVER --------------
// ------------------------------------

// Server listening on port 8000
app.listen(PORT, () => console.log(chalk.bgGreen.black('Server listening on port ' + PORT)))