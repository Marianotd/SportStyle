import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', 'password', {
    host:'localhost',
    port: 3335,
    dialect:'mysql'
});

export default db