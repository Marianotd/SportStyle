import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Category = db.define('categories', {
    name:{ type: DataTypes.STRING }
})

export default Category