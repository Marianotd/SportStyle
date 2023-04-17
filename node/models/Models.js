import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Product = db.define('products', {
    name:{ type: DataTypes.STRING },
    description:{ type: DataTypes.STRING },
    price:{ type: DataTypes.INTEGER },
    stock:{ type: DataTypes.INTEGER },
    id_brand:{ type: DataTypes.INTEGER },
    id_category:{ type: DataTypes.INTEGER },
    id_subcategory:{ type: DataTypes.INTEGER },
    gender:{ type: DataTypes.STRING },
    id_image:{ type: DataTypes.INTEGER },
    is_novelty:{ type: DataTypes.TINYINT },
    active:{ type: DataTypes.TINYINT }
})

const Brand = db.define('brands', {
    name:{ type: DataTypes.STRING }
})

const Category = db.define('categories', {
    name:{ type: DataTypes.STRING }
})

const SubCategory = db.define('subcategories', {
    name:{ type: DataTypes.STRING },
    id_category:{ type: DataTypes.INTEGER }
})

const Image = db.define('images', {
    name:{ type: DataTypes.STRING },
    type:{ type: DataTypes.STRING },
    data:{ type: DataTypes.BLOB }
})

Category.hasMany(SubCategory, {foreignKey: "id_category"})
SubCategory.belongsTo(Category, {foreignKey: 'id'})

Category.hasMany(Product, {foreignKey: 'id'})
Product.belongsTo(Category, {foreignKey: 'id_category'})

SubCategory.hasMany(Product, {foreignKey: 'id'})
Product.belongsTo(SubCategory, {foreignKey: 'id_subcategory'})

Brand.hasMany(Product, {foreignKey: 'id'})
Product.belongsTo(Brand, {foreignKey: 'id_brand'})

Image.hasMany(Product, {foreignKey: 'id'})
Product.belongsTo(Image, {foreignKey: 'id_image'})

export {Product, Brand, Category, SubCategory, Image}