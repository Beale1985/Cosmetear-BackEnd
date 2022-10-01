const db = require('../models');

const CategoryModel = db.Categorys;

//Metodos para el CRUD

let categoryController = {
    getAllCategorys: function (req, res) {
        CategoryModel.findAll({order:[["name","ASC"]]})
        .then(category => {
            res.json(category)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getCategory: function (req, res){
        CategoryModel.findByPk(req.params.id)
        .then(category => {
            res.json(category)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    createCategory: function (req, res){
        CategoryModel.create(req.body)
        .then (msg => {
            res.json({message:msg + "Registro Creado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    updateCategory: function (req, res) {
        CategoryModel.update(req.body, {
            where: {id: req.params.id}
        })
        .then (msg => {
            res.json({message:msg + "Registro Actualizado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    deleteCategory: function (req, res) {
        CategoryModel.destroy({
            where: { id: req.params.id }
        })
        .then (msg => {
            res.json({message:msg + "Registro Eliminado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    }
}

module.exports = categoryController