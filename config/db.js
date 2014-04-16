module.exports = {

// the database url to connect
    // url : 'mongodb://127.0.0.1:27017/hifidelity'
    url :   process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/hifidelity'
}