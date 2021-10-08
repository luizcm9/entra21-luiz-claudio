const { DataTypes } = require("sequelize");
const { hashSync } = require("bcrypt");
const sequelize = require("../database");



const Usuario = sequelize.define("Usuario", {
nome: {
type: DataTypes.STRING,
allowNull: false
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
validate: {
isEmail: true
}
},
senha: {
type: DataTypes.STRING,
allowNull: false,
set(value) {
this.setDataValue("senha", hashSync(value, 10));
}
}
});



(async () => {
// Criando a tabela Usuarios
try {
await Usuario.sync({ force: true });
console.log("Tabela criada com sucesso!");
} catch (err) {
console.error("Ocorreu algum erro ao criar a tabela", err);
} finally {
sequelize.close();
}
})();