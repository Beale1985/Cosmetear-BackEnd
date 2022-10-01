const express = require('express');
const userRoutes = require("./routes/routes.js");
const cors = require("cors");
const md5 = require("md5");
const db = require('./models');
const app = express();

const UserModel = db.Users;

app.use(cors())
app.use(express.json())
app.use("/", userRoutes)

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
})

// Allow Cross-origin Resource Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});

app.post("/login", async function (req,res){
    try {
        const user = await UserModel.findAll({
            where:{
                email:req.body.email,
            }
        })       
        if(user) {
            if (user[0].password == md5(req.body.password)){
                res.status(200).send( {message: "OK"})
            } else { 
            res.status(200).send({message: "Contraseña Incorrecta"})
            }
        }
    } catch (error) {
        res.status(400).send ({message: "Usuario no encontrado"})
    }
})

app.listen(8000, ()=>{
    console.log("Servidor funcionando en puerto 8000")
})

