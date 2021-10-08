const {sequelize} = require("./db/migrations/models");

(async() =>{
    try{
        await sequelize.authenticate();
        console.log("conecção bem sucedida");
    } catch (error) {
        console.log("error", error);
    } finally {
        sequelize.close();
    }


})();