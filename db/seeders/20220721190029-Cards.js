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
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Что сделал Лунтик перед тем как попасть на землю?',
      answers: 'родился',
      score: 2000,
      id_categories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Измерительный прибор для контроля поверхностей относительно горизонтальной или вертикальной плоскости?',
      answers: 'уровень',
      score: 1000,
      id_categories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Назовите имя первой супруги Ельцина.',
      answers: 'Наина',
      score: 10,
      id_categories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Как называются зимние месяцы?',
      answers: 'декабрь,январь,февраль',
      score: 1000,
      id_categories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Может жить в доме, а может и в будке на улице. Кто она?',
      answers: 'собака',
      score: 20,
      id_categories: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Что на самом деле представляет из себя легендарный зеленый код из «Матрицы»?',
      answers: 'рецепт суши',
      score: 2,
      id_categories: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Где снимали трилогию «Властелин колец»?',
      answers: 'в Новой Зеландии',
      score: 200,
      id_categories: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Какого цвета полосатый свитер Фредди Крюгера?',
      answers: 'красно-зеленого',
      score: 210,
      id_categories: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Как называется планета, на которой состоялась дуэль Оби-Вана Кеноби и Энакина Скайуокера в «Звездных войнах. Эпизод III — Месть ситхов»?',
      answers: 'Мустафар',
      score: 5,
      id_categories: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Где снимали «Дневник памяти»?',
      answers: 'в Чарльстоне, штат Южная Каролина',
      score: 2500,
      id_categories: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Как вызвать джина из лампы?',
      answers: 'потереть',
      score: 1000,
      id_categories: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Как звали мальчика из дерева?',
      answers: 'Буратино',
      score: 1000,
      id_categories: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Как зовут пушистого необычного персонажа с большими ушами?',
      answers: 'Чебурашка',
      score: 1000,
      id_categories: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Этого мальчика воспитывали животные.',
      answers: 'Маугли',
      score: 1000,
      id_categories: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      questions: 'Они всегда придут на помощь!',
      answers: 'Чип и Дейл',
      score: 1000,
      id_categories: 3,
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
