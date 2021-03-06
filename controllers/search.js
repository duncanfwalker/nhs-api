var express = require('express')
    , router = express.Router()
    , search = require('../middlewares/search');

router.get('/ccg/:postcode', function (req, res) {

    // search for the CCG for this postcode
    search.searchCCGByPostcode(req.params["postcode"], function (err, result) {

        if (result)
                res.json(result);

        else res.json(err);
    });


});

router.get('/trust/:postcode', function (req, res) {

    // search for the nearest NHS trust to this postcode
    search.searchTrustByPostcode(req.params["postcode"], function (err, result) {

        if (result)
            res.json(result);

        else res.json(err);
    });


});

router.get('/:postcode', function (req, res) {

    // search for this postcode
    search.searchPostcode(req.params["postcode"], function (err, result) {

        if (result)
            res.json(result);

        else res.json(err);
    });


});

module.exports = router;