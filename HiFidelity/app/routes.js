var Hifidelity = require('./models/hifidelity');

module.exports = function(app) {
    // get all movies
    app.get('/api/movies', function(req, res) {
        Hifidelity.find(function(err, movies) {
            if (err)
                res.send(err);

            res.json(movies);
        });
    });

    // add another movie entry
    app.post('/api/movies', function(req, res) {
        Hifidelity.create({
            title   :   req.body.title,
            year    :   req.body.year,
            seen    :   false
        }, function(err, movies) {
            if (err)
                res.send(err);

            // return all movies after entry is added
            Hifidelity.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        // load the single view file (angular will handle the page changes on the front-end)
        res.sendfile('./public/index.html'); 
    });
};