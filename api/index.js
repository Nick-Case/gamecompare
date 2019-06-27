const express = require("express");
const database = require("./models/database");
const game = require("./models/game");

const gameRoutes = require("./routes/game-routes");
const shopRoutes = require("./routes/shop-routes");
const gameListingRoutes = require("./routes/game-listing-routes");

//Port to listen on
const PORT = 80;



database.sync().then(() => {
    //API App
    const app = express();
    app.use(express.json());
    app.use('/game', gameRoutes);
    app.use("/shop", shopRoutes);
    app.use("/listing", gameListingRoutes);

    app.listen(PORT);
})
.catch(error => {
    console.error(error);
});