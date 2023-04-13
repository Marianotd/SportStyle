import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Gender = db.define('genders', {
    name:{ type: DataTypes.STRING }
})

export default Gender