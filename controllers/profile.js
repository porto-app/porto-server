const express = require('express')
const router = express.Router()

const Profile = require('../models/profile-model')

// Get All

router.get('/',(req, res) => {
    Profile.find({})
    .then(profiles => {
        const profilesAug = profiles.map(item => {
            return{...item.doc, titleEncoded:item.title.split('').join('+')}
        })
        res.render('profiles/index', {profiles})
    })
    .catch(console.error)
})

router.get('/new', (req, res) => {
    res.render('profiles/new')
})

router.post('/', (req, res) => {
    Profile.create(req.body)
    .then((profile) => {
        res.redirect('/profiles');
    })
    .catch(console.error);
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Profile.findById(id)
    .then (profile => {
        res.render('profiles/edit', profile)
    })
    .catch(console.error)
})

router.put('/:id', (req,res) => {
    const id = req.params.id
    Profile.findOneAndUpdate(
        { _id: id },
        {

        email:                          req.body.email,
        firstName:                      req.body.firstName,
        middleName:                     req.body.middleName,
        lastName:                       req.body.lastName,
        title:                          req.body.title,
        location:                       req.body.location,
        urlPic:                         req.body.urlPic,

        Project1Name:                   req.body.project1Name,
        Project1Description:            req.body.Project1Description,
        Project1URL:                    req.body.Project1URL,
        Project1Img:                    req.body.Project1Img,

        Project2Name:                   req.body.project2Name,
        Project2Description:            req.body.Project2Description,
        Project2URL:                    req.body.Project2URL,
        Project2Img:                    req.body.Project2Img,

        Project3Name:                   req.body.project3Name,
        Project3Description:            req.body.Project3Description,
        Project3URL:                    req.body.Project3URL,
        Project3Img:                    req.body.Project3Img,

        Project4Name:                   req.body.project4Name,
        Project4Description:            req.body.Project4Description,
        Project4URL:                    req.body.Project4URL,
        Project4Img:                    req.body.Project4Img,

        },
        { new: true }
    )
    .then((profile) => {
        res.render('profiles/show', profile)
    })
});

router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
    .then(profile => res.json(profile)) // Was missing this line
    // .then(profile => {
    //     res.render('profiles/show', profile)
    // })
    .catch(fatalError =>{
        console.error(fatalError)
        res.send("There has been a fatal error!")
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Profile.findOneAndRemove({ _id: id })
    .then(() => {
        res.redirect('/profiles');
    })
    .catch(console.error)
})

//creates route
module.exports = router