const db = require('../models');

const ProductModel = db.Products;
const BrandModel = db.Brands;
const CategoryModel = db.Categorys;
const UseModel = db.Uses;
const SubCategoryModel = db.SubCategorys;

//Metodos para el CRUD

let productsController = {
    getAllProducts: function (req, res) {
        ProductModel.findAll({
            include: [
                {
                    model: BrandModel,
                    as:"Brand",
                    attributes: ["logo_image","name"]
                },
                {
                    model: CategoryModel,
                    as:"Category",
                    attributes: ["name"]
                },
                {
                    model: UseModel,
                    as:"Use",
                    attributes: ["name"]
                },
                {
                    model: SubCategoryModel,
                    as:"SubCategory",
                    attributes: ["name"]
                }
            ]
        },{order:[["name","ASC"]]})
        .then(products => {
            res.json(products)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    getProduct: function (req, res){
        ProductModel.findByPk(req.params.id,{
            include: [
                {
                    model: BrandModel,
                    as:"Brand",
                    attributes: ["logo_image","name"]
                },
                {
                    model: CategoryModel,
                    as:"Category",
                    attributes: ["name"]
                },
                {
                    model: UseModel,
                    as:"Use",
                    attributes: ["name"]
                },
                {
                    model: SubCategoryModel,
                    as:"SubCategory",
                    attributes: ["name"]
                }
            ]
        })
        .then(product => {
            res.json(product)
        }).catch (error => {
            res.json ( {message:error.message} )
        })
    },

    createProduct: function (req, res){
        ProductModel.create(req.body)
        .then (msg => {
            res.json({message:msg + "Registro Creado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    updateProduct: function (req, res) {
        ProductModel.update(req.body, {
            where: {id:req.params.id}
        })
        .then (msg => {
            res.json({message:msg + "Registro Actualizado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    },

    deleteProduct: function (req, res) {
        ProductModel.destroy({
            where: { id: req.params.id }
        })
        .then (msg => {
            res.json({message:msg + "Registro Eliminado Correctamente"} )
        }) .catch (error => {
            res.json ( {message:error.message} )
        })
    }
}

module.exports = productsController

// import ProductModel from "../models/ProductModels.js";
// import BrandModel from "../models/BrandModels.js";
// import db from "../database/config.js" 

// //Metodos para el CRUD
// // const Brands = BrandModel
// // console.log(Brands)
// // console.log(typeof Brands)

// export const getAllProducts = async (req, res) => {
//     try {
//         const products = await ProductModel.findAll({order:[["name","ASC"]]})
//         res.json(products)
//     } catch (error) {
//         res.json ( {message:error.message} )
//     }
// }

// //modificar a findById
// export const getProduct = async (req, res) => {
//         try {
//             const product = await ProductModel.findByPk(req.params.id)
//             res.json(product)
//         } catch (error) {
//             res.json ( {message:error.message} )
//         }
//     }

// // export const getProduct = async (req, res) => {
// //     try {
// //         const product = await ProductModel.findAll({
// //             where: {idproduct:req.params.id}
// //         })
// //         res.json(product[0])
        
// //     } catch (error) {
// //         res.json ( {message:error.message} )
// //     }
// // }

// export const createProduct = async (req, res) => {
//     try {
//         await ProductModel.create(req.body)
//         res.json({
//             "message":"Registro Creado Correctamente"
//         })
//     } catch (error) {
//         res.json ( {message:error.message} )
//     }
// }

// export const updateProduct = async (req, res) => {
//     try {
//         await ProductModel.update(req.body, {
//             where: {idproduct: req.params.id}
//         })
//         res.json({
//             "message":"Registro Actualizado Correctamente"
//         })
//     } catch (error) {
//         res.json ( {message:error.message} )
//     }
// }

// export const deleteProduct = async (req, res) => {
//     try {
//         await ProductModel.destroy({
//             where: { idproduct: req.params.id }
//         })
//         res.json({
//             "message":"Registro Eliminado Correctamente"
//         })
//     } catch (error) {
//         res.json ( {message:error.message} )
//     }
// }