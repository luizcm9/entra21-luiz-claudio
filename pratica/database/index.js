require("dotevn").config();
const { Sequelize } = require("sequelize")

const dbConfig = require("../config/database");;


const sequelize = new Sequelize(dbConfig);

// (async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('conecsao bem sucedida');
//         } catch (error) {
//             console.log('conexao falhou', error);
//         } finally {
//             sequelize.close();
//         }
// })();