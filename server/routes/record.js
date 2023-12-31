const express = require('express')

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn')

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId

// This section will help you get a list of all the users.
recordRoutes.route('/record').get(function (req, res) {
  let db_connect = dbo.getDb()
  db_connect
    .collection('users')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

//add a route to get a single record by username
// Add this route to your server code
recordRoutes.route('/record/check-username/:username').get(async (req, res) => {
  const db_connect = dbo.getDb()
  const existingUser = await db_connect
    .collection('users')
    .findOne({ username: req.params.username })
  console.log('existingUser', existingUser)
  res.json({ exists: !!existingUser, record: existingUser })
})

// This section will help you get a single record by id
recordRoutes.route('/record/:id').get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection('users').findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

// This section will help you create a new record.
recordRoutes.route('/record/add').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    username: req.body.username,
    password: req.body.password
  }
  db_connect.collection('users').insertOne(myobj, function (err, res) {
    if (err) {
      console.log('Insert Error' + err)
      throw err
    }
    response.json(res)
  })
})

// This section will help you update a record by id.
recordRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  let newvalues = {
    $set: {
      username: req.body.username,
      password: req.body.password
    }
  }
  db_connect
    .collection('users')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err
      console.log('1 document updated')
      response.json(res)
    })
})

// This section will help you delete a record
recordRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection('users').deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log('1 document deleted')
    response.json(obj)
  })
})

module.exports = recordRoutes
