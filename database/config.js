module.exports = {
    "development": {
      "username": "root",
      "password": "Euvu2428",
      "database": "cosmeticapp_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }


// import sequelize from "sequelize";

// const db = new sequelize("cosmeticapp_db", "root", "Euvu2428", {
//     host:"localhost",
//     dialect:"mysql"
// })

// export default db