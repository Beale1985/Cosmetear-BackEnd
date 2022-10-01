module.exports = (sequelize, datatypes) => {
    let alias = "Products";
    let cols = {
        id:{type:datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        idbrand:{ type:datatypes.INTEGER },
        name:{ type: datatypes.STRING },
        format:{ type: datatypes.STRING },
        description:{ type: datatypes.STRING },
        inci:{ type: datatypes.STRING },
        idcategory:{ type: datatypes.INTEGER },
        iduse:{ type: datatypes.INTEGER },
        idsub_category:{ type: datatypes.INTEGER },
        color:{ type: datatypes.STRING },
        type_of_skin:{ type: datatypes.STRING },
        sensible_skin:{ type: datatypes.STRING },
        fps:{ type: datatypes.STRING },
        hypoallergenic:{ type: datatypes.STRING },
        dermatologically_tested:{ type: datatypes.STRING },
        tacc:{ type: datatypes.STRING },
        parabens:{ type: datatypes.STRING },
        fragancy:{ type: datatypes.STRING },
        alchool:{ type: datatypes.STRING },
        kids: { type: datatypes.STRING }
    };
    let config = {
        tableName: "products", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate =  function(models){
        Product.belongsTo(models.Brands,{
            foreignKey:"idbrand"
        });
        Product.belongsTo(models.Categorys,{
            foreignKey:"idcategory"
        });
        Product.belongsTo(models.Uses,{
            foreignKey:"iduse"
        });
        Product.belongsTo(models.SubCategorys,{
            foreignKey:"idsub_category"
        });
        };
    
    return Product;
}

// import { DataTypes } from "sequelize";
// import db from "../database/config.js";
// import BrandModel from "./BrandModels.js";

// const ProductModel = db.define("Products", {
//     idproduct:{type:DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true},
//     idbrand:{ type:DataTypes.INTEGER },
//     origen:{ type:DataTypes.INTEGER },
//     name:{ type: DataTypes.STRING },
//     format:{ type: DataTypes.STRING },
//     description:{ type: DataTypes.STRING },
//     inci:{ type: DataTypes.STRING },
//     category:{ type: DataTypes.STRING },
//     extra_category:{ type: DataTypes.STRING },
//     use:{ type: DataTypes.STRING },
//     sub_category:{ type: DataTypes.STRING },
//     extra_sub_category: { type: DataTypes.STRING },
//     extra_sub_category_2:{ type: DataTypes.STRING },
//     color:{ type: DataTypes.STRING },
//     type_of_skin:{ type: DataTypes.STRING },
//     sensible_skin:{ type: DataTypes.STRING },
//     fps:{ type: DataTypes.STRING },
//     hipoalergico:{ type: DataTypes.STRING },
//     testeado_dermatologicamente:{ type: DataTypes.STRING },
//     tacc:{ type: DataTypes.STRING },
//     parabenos:{ type: DataTypes.STRING },
//     fragancy:{ type: DataTypes.STRING },
//     alchool:{ type: DataTypes.STRING },
//     cruelty_free: { type: DataTypes.STRING },
//     cruelty_free_certificate: { type: DataTypes.STRING },
//     vegano: { type: DataTypes.STRING },
//     kids: { type: DataTypes.STRING }
// })

// // ProductModel.BrandModel = ProductModel.belongsTo(BrandModel)

// ProductModel.associate =  function(models){
//     Products.belongsTo(models.Brands,{
//         foreignKey:"idbrand"
//     })
// };

// export default ProductModel