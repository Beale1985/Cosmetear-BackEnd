module.exports = (sequelize, datatypes) => {
  let alias = "Brands";
  let cols = {
    id:{type:datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    name:{ type: datatypes.STRING },
    instagram:{ type: datatypes.STRING },
    webpage:{ type: datatypes.STRING },
    logo_image:{ type: datatypes.STRING },
    origin:{ type: datatypes.STRING },
    cruelty_free: { type: datatypes.STRING },
    cruelty_free_certificate: { type: datatypes.STRING },
    vegan: { type: datatypes.STRING },
    observations: { type: datatypes.STRING }
  };
  let config = {
      tableName: "brands", //no hace falta aclararlo porque sequelize infiere que se llama igual que el archivo pero en plural Producto.js
      timestamps: false
  }

  const Brand = sequelize.define(alias, cols, config);

  Brand.associate =  function(models){
    Brand.hasMany(models.Products,{
      foreignKey:"id"
  })
  };

  return Brand;
}