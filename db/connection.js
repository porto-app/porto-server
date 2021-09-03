const mongoose = require("mongoose");

const mongoURI =
process.env.NODE_ENV === "production" ?
process.env.DB_URL :
"mongodb://localhost/profiles"

mongoose
.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateindex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((instance) =>
console.log(`connected to db ${instance.connections[0].name}`)
)
.catch((error) => console.log("There is an error", error))

module.exports = mongoose;
