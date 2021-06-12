const mongoose = require('mongoose');

try {
    mongoose
        .connect('mongodb+srv://csvUser:Sandy@2021@cluster0.osq96.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('DB Connceted'));

} catch (error) {
    console.log('could not connect', error);
}

const dbConn = mongoose.connection;


const uploadSchema = new mongoose.Schema([{
    "id": Number,
    "Country": String,
    "Capital": String,
    "Population": Number,
    "National Language": String,
    "President": String
}]);

const uploadModel = mongoose.model('uploadModel', uploadSchema);

module.exports = uploadModel;