module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Cards');
  },
};
