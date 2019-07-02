const express = require("express");
const database = require("./models/database");
const paginate = require("express-paginate");

const gameRoutes = require("./routes/game-routes");
const shopRoutes = require("./routes/shop-routes");
const gameListingRoutes = require("./routes/game-listing-routes");
const gameListingPriceRoutes = require("./routes/game-listing-price-routes");

//Port to listen on
const PORT = 80;



database.sync({force : false}).then(() => {
    //API App
    const app = express();

    //Add JSON middleware
    app.use(express.json());

    //Add pagination middleware
    app.use(paginate.middleware(20, 100));

    //Add Routes
    app.use('/game', gameRoutes);
    app.use("/shop", shopRoutes);
    app.use("/listing", gameListingRoutes);
    app.use("/price", gameListingPriceRoutes);

    app.listen(PORT);
})
.catch(error => {
    console.error(error);
});