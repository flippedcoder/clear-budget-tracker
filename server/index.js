const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const Goals = require('./models/Goals')
const Items = require('./models/Items')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/budget-tracker', {
  useNewUrlParser: true,
})

const connection = mongoose.connection

connection.once('open', function () {
  console.log('MongoDB database connection successful')
})

app.use(cors())
app.use(express.static(path.join(__dirname, '/build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/getAllGoals', (_req, res) => {
  Goals.find({}, (err, goals) => {
    if (err) {
      console.error(err)
      res.status(503)
      res.send(err)
    }

    if (goals !== null) {
      res.status(200)
      res.send(goals)
    }
  })
})

app.get('/api/getAllItems', (_req, res) => {
  Items.find({}, (err, items) => {
    if (err) {
      console.error(err)
      res.status(503)
      res.send(err)
    }

    if (items !== null) {
      res.status(200)
      res.send(items)
    }
  })
})

app.post('/api/createGoal/', (req, res) => {
  const goalData = req.body.goalData

  Goals.create(
    {
      completeByDate: goalData.completeByDate,
      isComplete: goalData.isComplete,
      title: goalData.title,
    },
    (err, newGoal) => {
      if (err) {
        console.error(err)
        res.status(503)
        res.send(err)
      }

      res.status(200)
      res.send(newGoal)
    }
  )
})

app.patch('/api/updateGoalStatus/', (req, res) => {
  const goalData = req.body.goalData

  Goals.findOneAndUpdate(
    { _id: goalData._id },
    {
      isComplete: goalData.isComplete,
    },
    (err, updatedGoal) => {
      if (err) {
        console.error(err)
        res.status(503)
        res.send(err)
      }

      res.status(200)
      res.send(updatedGoal)
    }
  )
})

app.post('/api/createItem/', (req, res) => {
  const itemData = req.body.itemData

  Items.create(
    {
      category: itemData.category,
      cost: itemData.cost,
      date: Date.now(),
      title: itemData.title,
    },
    (err, newItem) => {
      if (err) {
        console.error(err)
        res.send('something went wrong')
      }

      res.status(200)
      res.send(newItem)
    }
  )
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

const server = app.listen(3010, () => {
  console.log('todo endpoints running on port 3010')
})

module.exports = server
