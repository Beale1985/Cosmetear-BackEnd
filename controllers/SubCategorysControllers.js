const db = require('../models');

const SubCategoryModel = db.SubCategorys;

//Metodos para el CRUD

let subCategorysController = {
    getAllSubCategorys: function (req, res) {
        SubCategoryModel.findAll({order:[["name","ASC"]]})
        .then(subcategorys => {
            res.json(subcategorys)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getSubCategory: function (req, res){
        SubCategoryModel.findByPk(req.params.id)
        .then(subcategory => {
            res.json(subcategory)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    }
}

module.exports = subCategorysController