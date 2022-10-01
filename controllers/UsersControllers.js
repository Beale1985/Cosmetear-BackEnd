const db = require('../models');

const UserModel = db.Users;

//Metodos para el CRUD

let usersController ={
    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.findAll()
            res.json(users)
        } catch (error) {
            res.json ( {message:error.message} )
        }
    },
    
    getUser: async (req, res) => {
        try {
            const user = await UserModel.findByPk(req.params.id)
            res.json(user)
        } catch (error) {
            res.json ( {message:error.message} )
        }
    },
    
    createUser: async (req, res) => {
        try {
            await UserModel.create(req.body)
            res.json({
                "message":"Registro Creado Correctamente"
            })
        } catch (error) {
            res.json ( {message:error.message} )
        }
    },
    
    updateUser: async (req, res) => {
        try {
            await UserModel.update(req.body, {
                where: {iduser: req.params.id}
            })
            res.json({
                "message":"Registro Actualizado Correctamente"
            })
        } catch (error) {
            res.json ( {message:error.message} )
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            await UserModel.destroy({
                where: { iduser: req.params.id }
            })
            res.json({
                "message":"Registro Eliminado Correctamente"
            })
        } catch (error) {
            res.json ( {message:error.message} )
        }
    }
} 

module.exports = usersController