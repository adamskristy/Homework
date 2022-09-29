// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of logs
const Log = require('../models/log')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllLogs,
    showNewView, 
    deleteOneLog,
    updateOneLog,
    createNewLog,
    showEditView,
    seedStarterData,
    showOneLog,
} = require('../controllers/logController')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllLogs)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneLog)

// Setup "update" route
router.put('/:id', updateOneLog)

// Setup "create" route
router.post('/', createNewLog)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "show" route  
router.get('/:id', showOneLog)

// Setup "seed" route
router.get('/seed', seedStarterData)


module.exports = router
