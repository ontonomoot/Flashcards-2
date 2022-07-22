const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cards }) {
      Categories.hasMany(Cards, { foreignKey: 'id_categories' });
    }
  }
  Categories.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};
