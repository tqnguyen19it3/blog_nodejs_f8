const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://tqnguyen:5hfja87pbUt6LwxA@cluster0.elaom.mongodb.net/f8_education?retryWrites=true&w=majority');
        console.log('MongoDB connect success!');
    } catch (error) {
        console.log('FAILED: ' + error);
    }
}

module.exports = { connect };