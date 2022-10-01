const db = require('../models');

const UseModel = db.Uses;

//Metodos para el CRUD

let usesController = {
    getAllUses: function (req, res) {
        UseModel.findAll({order:[["name","ASC"]]})
        .then(use => {
            res.json(use)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getUse: function (req, res){
        UseModel.findByPk(req.params.id)
        .then(use => {
            res.json(use)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    }
}

module.exports = usesController