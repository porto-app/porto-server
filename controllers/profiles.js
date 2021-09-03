const express = require('express');
const router = express.Router();

const Profile = require("../models/profile")

router.get("/", (req,res,next) => {
    Profile.find({})
    .then((profiles) => res.json(profiles))
    .catch(next);
})

router.get("/:id", (req, res, next) => {
    Profile.findById(req.params.id)
    .then((bookmark) => res.json(bookmark))
    .catch(next);
})

router.post('/', (req, res) => {
    Profile.create(req.body).then(profile => {
        Gif.find({}).then(profiles => {
            res.json(profiles)
        })
    })
})

router.put('/:id', (req, res) => {
    Profile.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(profile => Profile.find({})
    .then(profiles => {res.json(profiles)}
    )
    )
})

router.delete('/:id', (req, res) => {
    Profile.findOneAndDelete({_id: req.params.id}, req.body)
    .then(gif => Profile.find({})
    .then(profiles => {res.json(profiles)}
    )
    )
})

module.exports = router