const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Goals = require('./models/Goals');
const Items = require('./models/Items');
// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/budget-tracker', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection successful");
});

const rollbar = new Rollbar({
    accessToken: 'f43f165d0f794bc7a6d1719dd6f71596',
    captureUncaught: true,
    captureUnhandledRejections: true
});
  
// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

let server = app.listen(3010, () => {
    console.log("todo endpoints running on port 3010");
});

app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/getAllGoals', (req, res) => {
    Goals.find({}, (err, goals) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }

        if (goals !== null) {
            res.send(goals);
        }
    });
});

app.get('/api/getAllItems', (req, res) => {
    Items.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.send(err);
        }

        if (items !== null) {
            res.status(200);
            res.send(items);
        }
    });
});

app.post('/api/createGoal/', (req, res) => {
    let goalData = req.body.goalData;

    Goals.create({ 
        completeByDate: goalData.completeByDate,
        isComplete: goalData.isComplete,
        title: goalData.title
    }, (err, newGoal) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        res.status(200);
        res.send(newGoal);
    });
});

app.post('/api/createItem/', (req, res) => {
    let itemData = req.body.itemData;
    itemData = updateValue(req)

    Items.create({ 
        category: itemData.category,
        cost: itemData.cost,
        date: Date.now(),
        title: itemData.title
    }, (err, newItem) => {
        if (err) {
            console.error(err);
            res.send('something went wrong');
        }

        res.status(200);
        res.send(newItem);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const updateValue = (req) => {
    let itemData = req.body.itemData;
    let initialCategory = itemData.category;
    itemData.category = itemData.title;
    itemData.title = initialCategory;
    return itemData;
}

module.exports = server;
