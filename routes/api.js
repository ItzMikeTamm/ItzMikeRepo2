const express = require('express');
const router = express.Router();

router.get('/routes', function(req, res) {
    res.send({type:'GET'});
});

router.post('/routes', function(req, res) {
    res.send({type:'POST'});
});

router.put('/routes', function(req, res) {
    res.send({type:'PUT'});
});

router.delete('/routes', function(req, res) {
    res.send({type:'DELETE'});
});

module.exports = router;
