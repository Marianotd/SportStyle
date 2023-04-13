import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Image = db.define('images', {
    name:{ type: DataTypes.STRING },
    type:{ type: DataTypes.STRING },
    data:{ type: DataTypes.BLOB }
})

export default Image