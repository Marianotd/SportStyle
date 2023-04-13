import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Product = db.define('products', {
    name:{ type: DataTypes.STRING },
    description:{ type: DataTypes.STRING },
    price:{ type: DataTypes.INTEGER },
    brand:{ type: DataTypes.STRING },
    stock:{ type: DataTypes.INTEGER, defaultValue: 1 },
    category:{ type: DataTypes.STRING },
    sub_category:{ type: DataTypes.STRING },
    gender:{ type: DataTypes.STRING },
    is_novelty:{ type: DataTypes.STRING },
    color:{ type: DataTypes.STRING },
    img_name:{ type: DataTypes.STRING },
    img_data:{ type: DataTypes.BLOB },
    img_type:{ type: DataTypes.STRING },
    active:{ type: DataTypes.STRING }
})

export default Product