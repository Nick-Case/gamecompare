const express = require("express");
const shops = require("../controllers/shop-controller");

const router = express.Router();

function respondGetAll(res) {

    shops.getAll()
    .then(s => {
        res.json(s)
    })
    .catch(() => {
        res.status(500).json({error: "Couldn't get all shops"});
    });
}

function respondCreate(req, res) {
    shops.create(req.body)
    .then(shop => {
        res.status(201).json(shop);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : "Error"})
    });
}

router.get('/', (req, res) => {
    respondGetAll(res);
})

router.post('/', (req, res) => {
    respondCreate(req, res);
})

module.exports = router;
