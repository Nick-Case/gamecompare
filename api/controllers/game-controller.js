const game = require('../models/game');

const DEFAULT_LIMIT = 20;
const DEFAULT_PAGE = 1;

module.exports = {

    getAll: function(req) {

    return new Promise((resolve, reject) => {

        game.findAll({
            include : [{all : true}],
            limit : req.query.limit,
            offeset : req.skip
        })
        .then(resolve)
        .catch(error => {
            reject(error);
        });
    });
    },

    getById : function(id) {
    return new Promise((resolve, reject) => {
        game.findOne({
            where: {
                id
            }
        })
        .then(resolve)
        .catch(error => {
            reject(error)
        });
    });

    },

    create: function(props) {
        return game.create(props);
    }
}
