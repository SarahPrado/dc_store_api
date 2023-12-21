import 'dotenv/config'
// console.log(process.env);

export const DB_CONFIG = {
    HOST: process.env.HOST,
    PORT: 5432,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB:'dc_fwzz', 
    DIALECT: 'postgres'
}