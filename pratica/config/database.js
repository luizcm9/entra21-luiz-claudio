module.exports={
    dialect: ProcessingInstruction.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSOWORD,
    database: process.env.DB_DATABASE
};
