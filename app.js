const express = require('express')
const { connectToDb, getDb } = require('./db')


const app = express()

let db

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

app.use('/api', require('./routes/api'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
  });

