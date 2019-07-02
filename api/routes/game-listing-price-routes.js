const express = require("express");
const gameListingPrices = require("../controllers/game-listing-price-controller");

const router = express.Router();

function respondSearch(req, res) {
    gameListingPrices.search(req.query)
    .then(_ => {
        res.json(_);
    })
    .catch(() => {
        res.status(500).json({ error : "Couldn't get game listing prices"});
    });
}

function respondCreate(req, res) {
    gameListingPrices.create(req.body)
    .then(_ => {
        res.status(201).json(_);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
        console.error(err);
    });
}

router.get("/", (req, res) => {
    respondSearch(req, res);
});

router.post("/", (req, res) => {
    respondCreate(req, res);
});

module.exports = router;
