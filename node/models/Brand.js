import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Brand = db.define('brands', {
    name:{ type: DataTypes.STRING }
})

export default Brand