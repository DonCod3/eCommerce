const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products',
  foreignKey: 'tag_id',
})

// Exporting all models to be used in the application 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
