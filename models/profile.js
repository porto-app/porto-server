
const mongoose = require('../backend/db/connection')

const userSchema = new mongoose.Schema({
    eMail:{type: String, required: true},
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true},
    title: {type: String, required: true},
    location: {type: String},
    urlPic: {type: String},
    Project1Name:{type: String},
    Project1Description:{type:String},
    Project1URL:{type:String},
    Project1Img:{type:String},
    Project2Name:{type: String},
    Project2Description:{type:String},
    Project2URL:{type:String},
    Project2Img:{type:String},
    Project3Name:{type: String},
    Project3Description:{type:String},
    Project3URL:{type:String},
    Project3Img:{type:String},
    Project4Name:{type: String},
    Project4Description:{type:String},
    Project4URL:{type:String},
    Project4Img:{type:String},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    }

})

const Users = mongoose.model("Users", userSchema);

module.exports = Model;