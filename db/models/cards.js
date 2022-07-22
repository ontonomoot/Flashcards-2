const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Categories }) {
      Cards.belongsTo(Categories, { foreignKey: 'id_categories' });
    }
  }
  Cards.init({
    questions: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answers: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_categories: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};
