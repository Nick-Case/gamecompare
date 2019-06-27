const express = require("express");
const gameListings = require("../controllers/game-listing-controller");

const router = express.Router();

function respondSearch(req, res) {
    gameListings.search(req.query)
    .then(_ => {
        res.json(_);
    })
    .catch(() => {
        res.status(500).json({error : "Couldn't get game listings"});
    });
}

function respondCreate(req, res) {
    gameListings.create(req.body)
    .then(_ => {
        res.status(201).json(_);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
}

router.get("/", (req, res) => {
    respondSearch(req, res);
});

router.post("/", (req, res) => {

    respondCreate(req, res);
});

module.exports = router;