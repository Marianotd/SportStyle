import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Sub_Category = db.define('sub_categories', {
    name:{ type: DataTypes.STRING }
})

export default Sub_Category