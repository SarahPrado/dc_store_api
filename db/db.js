import { DB_CONFIG } from "./config/config.js";
import { Sequelize } from "sequelize";

const connection = new Sequelize(DB_CONFIG.db, DB_CONFIG.user, DB_CONFIG.pass , {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    pool: {
        max: 5, // maximo de conexoes suportadas
        min: 0, // minimo de conexoes suportadas
        acquire: 30000, // tempo maximo, em ms(milisegundos) que o pool tenta conectar antes de gerar o erro
        idle: 10000 // tempo máximo, em ms(milisegundos) que o pool pode ser confirmada antes de ser estabelecida
    }
});

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {}

db.Sequelize = Sequelize
db.connection = connection

export default db