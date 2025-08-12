const Dotenv = require("dotenv")

Dotenv.config()

const config = {
    "dialect": process.env.DB_DIALECT ||"mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_DATABASE,
    "url": process.env.DB_CONNECTION_URL,
}

module.exports = {
    development: {...config, database: process.env.DB_DEVELOPMENT},
    test: { ...config, database: process.env.DB_TEST_NAME },
    production: { ...config, database: process.env.DB_PROD_NAME },
}