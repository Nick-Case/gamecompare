const express = require('express');
const games = require('../controllers/game-controller');

const router = express.Router();

function respondGetAll(res) {

    games.getAll()
    .then(g => {
        res.json(g)
    })
    .catch(() => {
        res.status(500).json({error : "Couldnt get games"})
    });

}

function respondCreate(req, res) {
    games.create(req.body)
    .then(game => {
        res.status(201).json(game);
    })
    .catch(error => {
        res.status(500).json({error: "Error"})
    });
}

router.get('/', (req, res) => {

    respondGetAll(res);

});

router.post('/', (req, res) => {

    respondCreate(req, res);
});

module.exports = router;