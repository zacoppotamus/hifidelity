module.exports = {

    // the database url to connect to
    url :   process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/hifidelity'
}