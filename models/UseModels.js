module.exports = (sequelize, datatypes) => {
    let alias = "Uses";
    let cols = {
      id:{type:datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
      name:{ type: datatypes.STRING },
    };

    let config = {
        tableName: "uses", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
        timestamps: false
    }
  
    const Use = sequelize.define(alias, cols, config);
  
    Use.associate =  function(models){
      Use.hasMany(models.Products,{
        foreignKey:"id"
    })
    };
  
    return Use;
  }