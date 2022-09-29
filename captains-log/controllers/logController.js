const Log = require('../models/log')
const seed = require('../models/seed')


// ROUTE     GET /logs    (index)
const findAllLogs = (req, res) => {  
   
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { log: foundLog })
        }
    })
}

// ROUTE      GET /logs/new    (new)
const showNewView = (req, res) => {     
    res.render('New')
}

// ROUTE       DELETE /logs/:id      (destroy)
const deleteOneLog = (req, res) => {
    
        Log.findByIdAndDelete(req.params.id, (err, deletedLogs) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).redirect('/logs')
            }
        })
    }


// ROUTE     PUT /logs/:id       (update)
const updateOneLog = (req, res) => {

    if (req.body.shipIsBroken === "on" || req.body.shipIsBroken === true ) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs/${req.params.id}`)
        }
    })
}

// ROUTE     POST /logs     (create)
const createNewLog = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
   
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// ROUTE      GET /logs/:id/edit     (edit)
const showEditView = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { log: foundLog })
        }
    })
}



// ROUTE       GET /logs/seed      (seed)
const seedStarterData = (req, res) => {
    
    Log.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.logs)
          
            Log.create(seed.logs, (err, createdLog) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
        }
    })
}

// ROUTE     GET /logs/:id     (show)
const showOneLog = (req, res) => {

    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { log: foundLog })
        }
    })
}


module.exports = {
    findAllLogs,
    showNewView, 
    deleteOneLog,
    updateOneLog,
    createNewLog,
    showEditView,
    seedStarterData,
    showOneLog,
}