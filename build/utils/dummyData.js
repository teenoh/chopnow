"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  meals: [{
    id: 1,
    name: 'Fried Rice',
    desc: 'Medium',
    price: 450
  }, {
    id: 2,
    name: 'Jollof Rice',
    desc: 'Large',
    price: 550
  }, {
    id: 3,
    name: 'Okro',
    desc: 'Medium',
    price: 450
  }, {
    id: 4,
    name: 'Plantain and Beans',
    desc: 'Small',
    price: 150
  }],
  menus: [{
    id: 1,
    day: '15/12/19',
    meals: {
      breakfast: [{
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      }, {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }],
      lunch: [{
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      }, {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }],
      dinner: [{
        id: 3,
        name: 'Okro',
        desc: 'Medium',
        price: 450
      }, {
        id: 4,
        name: 'Plantain and Beans',
        desc: 'Small',
        price: 150
      }]
    },
    vendor_id: 1
  }, {
    id: 2,
    day: '15/12/19',
    meals: {
      breakfast: [{
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      }, {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }],
      lunch: [{
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      }, {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }],
      dinner: [{
        id: 3,
        name: 'Okro',
        desc: 'Medium',
        price: 450
      }, {
        id: 4,
        name: 'Plantain and Beans',
        desc: 'Small',
        price: 150
      }]
    },
    vendor_id: 4
  }],
  orders: [{
    id: 1,
    customer_id: 5,
    vendor_id: 8,
    meals: [{
      id: 3,
      name: 'Okro',
      desc: 'Medium',
      price: 450
    }, {
      id: 4,
      name: 'Plantain and Beans',
      desc: 'Small',
      price: 150
    }],
    created_at: '17/02/2019'
  }, {
    id: 2,
    customer_id: 3,
    vendor_id: 4,
    meals: [{
      id: 1,
      name: 'Fried Rice',
      desc: 'Medium',
      price: 450
    }, {
      id: 2,
      name: 'Jollof Rice',
      desc: 'Large',
      price: 550
    }, {
      id: 3,
      name: 'Okro',
      desc: 'Medium',
      price: 450
    }],
    created_at: '17/02/2019'
  }]
};
exports.default = _default;