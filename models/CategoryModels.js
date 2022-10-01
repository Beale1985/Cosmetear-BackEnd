module.exports = (sequelize, datatypes) => {
    let alias = "Categorys";
    let cols = {
      id:{type:datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
      name:{ type: datatypes.STRING },
    };

    let config = {
        tableName: "categorys", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }
  
    const Category = sequelize.define(alias, cols, config);
  
    Category.associate =  function(models){
      Category.hasMany(models.Products,{
        foreignKey:"id"
    })
    };
  
    return Category;
  }