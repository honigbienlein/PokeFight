let jsonData = require('./pokedex.json')
const express = require('express') 
const app = express()
const cors = require('cors')
const port = process.env.PORT ?? 8000
const Results = require('./modals/results')


require("dotenv").config();
const mongoose = require('mongoose');
//mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@pokefight.devlezz.mongodb.net/test`);
mongoose.connect(process.env.URL, {
  user: process.env.USER,
  pass: process.env.PASSWORD,
})

app.use(cors())

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
/*     Results
      .create({ "winnerID": req.body.winnerID, "winnerName": req.body.winnerName })
      .then(function () {
        res.send('winner saved to database!')
      }) */
      console.table(req.body)

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})