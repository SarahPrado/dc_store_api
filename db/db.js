import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

//postgres://admin:IRiUzr0Sk26spdn5e7TosBathd34lsLU@dpg-clkind4jtl8s73e5td40-a.ohio-postgres.render.com/dc_fwzz
const URL_RENDER = `${DB_CONFIG.DIALECT}://${DB_CONFIG.USER}:${DB_CONFIG.PASS}@${DB_CONFIG.HOST}/${DB_CONFIG.DB}`
console.log(`[URL_RENDER]: ${URL_RENDER}`);

export const connection = new Sequelize(URL_RENDER,
{
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Configuração para evitar o erro "SSL/TLS required"
        },
    keepAlive: true
    },
    ssl: true,
});

try{
    await connection.authenticate();
    console.log('Connection has been established successfully');
    }catch(error){
    console.error('Unable to connect to the database:',error)
}
