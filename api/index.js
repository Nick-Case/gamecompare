const express = require("express");
const database = require("./models/database");

const gameRoutes = require("./routes/game-routes");
const shopRoutes = require("./routes/shop-routes");
const gameListingRoutes = require("./routes/game-listing-routes");
const gameListingPriceRoutes = require("./routes/game-listing-price-routes");

//Port to listen on
const PORT = 80;



database.sync({force : false}).then(() => {
    //API App
    const app = express();
    app.use(express.json());
    app.use('/game', gameRoutes);
    app.use("/shop", shopRoutes);
    app.use("/listing", gameListingRoutes);
    app.use("/price", gameListingPriceRoutes);

    app.listen(PORT);
})
.catch(error => {
    console.error(error);
});