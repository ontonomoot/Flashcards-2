module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [{
      title: 'Разгрузиться',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Categories', [{
      title: 'По фильмам(можно не пытаться)',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Categories', [{
      title: 'Детские',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
