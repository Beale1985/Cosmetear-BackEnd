module.exports = (sequelize, datatypes) => {
    let alias = "SubCategorys";
    let cols = {
      id:{type:datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
      name:{ type: datatypes.STRING },
    };

    let config = {
        tableName: "sub_categorys", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }
  
    const SubCategory = sequelize.define(alias, cols, config);
  
    SubCategory.associate =  function(models){
      SubCategory.hasMany(models.Products,{
        foreignKey:"id"
    })
    };
  
    return SubCategory;
  }