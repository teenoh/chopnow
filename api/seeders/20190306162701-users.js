'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          role: 'caterer',
          businessName: 'johndoe',
          address: '10 Ilasamaja Road',
          email: 'johnDoe@test.com',
          password: 'banana',
          mobileNo: '08108812672',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'James',
          lastName: 'Stone',
          role: 'caterer',
          businessName: 'Delicious treat',
          address: '10 Ilupeju Road',
          email: 'james@dt.com',
          password: 'warri',
          mobileNo: '08108812672',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Starboy',
          lastName: 'Wizzy',
          role: 'caterer',
          businessName: 'Starboy Treats',
          address: '10 Yaba Road',
          email: 'ilana@gmail.com',
          password: 'banana',
          mobileNo: '08108812672',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
