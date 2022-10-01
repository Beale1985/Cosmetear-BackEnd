const db = require('../models');
const { Sequelize, Op } =require("sequelize");

const BrandModel = db.Brands;

//Metodos para el CRUD

let brandsController = {
    getAllBrands: function (req, res) {
        BrandModel.findAll({order:[["name","ASC"]]})
        .then(brands => {
            res.json(brands)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getAllLogoBrands: function (req, res) {
        BrandModel.findAll({
            order: Sequelize.literal('rand()'),
            attributes:["id", "logo_image"],
            where: {
                logo_image: {
                    [Op.not]: null
                }
            }
        })
        .then(brands => {
            res.json(brands)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getAllCrueltyFreeCertificated: function (req, res) {
        BrandModel.findAll({
            order: Sequelize.literal('rand()'),
            limit: 3,
            attributes:["id", "cruelty_free_certificate", "logo_image", "name"],
            where: {
                cruelty_free_certificate: {
                    [Op.notLike]: "No"
                }
            }
        })
        .then(brands => {
            res.json(brands)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getBrand: function (req, res){
        BrandModel.findByPk(req.params.id)
        .then(brand => {
            res.json(brand)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    createBrand: function (req, res){
        BrandModel.create(req.body)
        .then (msg => {
            res.json({message:msg + "Registro Creado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    updateBrand: function (req, res) {
        BrandModel.update(req.body, {
            where: {id:req.params.id}
        })
        .then (msg => {
            res.json({message:msg + "Registro Actualizado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    deleteBrand: function (req, res) {
        BrandModel.destroy({
            where: { idbrand: req.params.id }
        })
        .then (msg => {
            res.json({message:msg + "Registro Eliminado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    }
}

module.exports = brandsController