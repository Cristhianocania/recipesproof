const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dn20213', { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});
module.exports = mongoose; 