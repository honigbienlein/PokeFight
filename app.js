require("dotenv").config();
let jsonData = require('./pokedex.json')
const express = require('express') 
const app = express()
const cors = require('cors')
const port = process.env.PORT ?? 8000
const Results = require('./modals/results')

const mongoose = require('mongoose');
//mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@pokefight.devlezz.mongodb.net/test`);
mongoose.connect(process.env.URL2)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
app.get('/pokemon',  (req, res) => {
    res.send(jsonData)
  })
//Create a GET route on /pokemon/:id which gives only one pokemon from the JSON thanks to its id
app.get('/pokemon/:id', (req, res) => {
    const result = jsonData.find( pokemon => pokemon.id == req.params.id)
    res.send(result)
  })

  app.post("/game/save", (req, res) => 
    Results
      .create({ winnerID: req.body.winnerID, winnerName: req.body.winnerName, enemyID: req.body.enemyID, enemyName: req.body.enemyName, date: req.body.date })
      .then(function () {
        res.json('game result saved to database!')
      })
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json(err.message)
      }) 
      //console.table(req.body)

    // console.log(req)
    // const resultToDB = new Results(req.body);
    // resultToDB.save()
    //   .then(item => {
    //     res.send("winner saved to database");
    //   })
    //   .catch(err => {
    //     res.status(400).send("unable to save to database");
    //   });
  );

  app.get('/game/leaderboard', (req, res) => {
    Results
      .find({}, (err, data) => res.json(data))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})