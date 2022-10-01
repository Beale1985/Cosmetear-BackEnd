module.exports = (sequelize, datatypes) => {
    let alias = "Users";
    let cols = {
        iduser:{type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        name:{ type: datatypes.STRING },
        lastName:{ type: datatypes.STRING },
        fechaDeNacimiento:{ type: datatypes.DATE },
        email:{ type: datatypes.STRING },
        password:{ type: datatypes.STRING },
        admin: { type: datatypes.BOOLEAN }   
    };
    let config = {
        tableName: "users", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    
    return User;
}

// import { DataTypes } from "sequelize"
// import db from "../models/index.js"

// const UserModel = db.define("user", {
//     iduser:{type:DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true},
//     name:{ type: DataTypes.STRING },
//     lastName:{ type: DataTypes.STRING },
//     fechaDeNacimiento:{ type: DataTypes.DATE },
//     email:{ type: DataTypes.STRING },
//     password:{ type: DataTypes.STRING },
//     admin: { type: DataTypes.BOOLEAN }
// })

// export default UserModel