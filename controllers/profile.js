const express = require('express');
const router = express.Router();

const User = require("../models/profile")

router.get("/", (req,res,next) => {
    User.find({})
    .then((profiles) => res.json(profiles))
    .catch(next);
})

// router.get('/', (req, res) => {

//     User.find({})
//     .then(users => {
//         const Aug = profiles.map(item => {
//             return {...item.doc, titleEncoded:item.title.split('').join('+') }
//         })
//         res.render('layout/home', {layout})
//     })
//     .catch(console.error)
// })

router.get("/:id", (req, res, next) => {
    User.findById(req.params.id)
    .then((bookmark) => res.json(bookmark))
    .catch(next);
})

router.post('/', (req, res) => {
    User.create(req.body).then(profile => {
        User.find({}).then(profiles => {
            res.json(profiles)
        })
    })
})

router.put('/:id', (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(profile => User.find({})
    .then(profiles => {res.json(profiles)}
    )
    )
})

router.delete('/:id', (req, res) => {
    User.findOneAndDelete({_id: req.params.id}, req.body)
    .then(gif => User.find({})
    .then(profiles => {res.json(profiles)}
    )
    )
})

module.exports = router