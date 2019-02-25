import assert from 'assert';
import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';
import should from 'chai/register-should';

import app from '../api/index';

chai.use(chaiHttp);

const menu = {
  id: 1,
  day: '15/12/19',
  meals: {
    breakfast: [
      {
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      },
      {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }
    ],
    lunch: [
      {
        id: 1,
        name: 'Fried Rice',
        desc: 'Medium',
        price: 450
      },
      {
        id: 2,
        name: 'Jollof Rice',
        desc: 'Large',
        price: 550
      }
    ],
    dinner: [
      {
        id: 3,
        name: 'Okro',
        desc: 'Medium',
        price: 450
      },
      {
        id: 4,
        name: 'Plantain and Beans',
        desc: 'Small',
        price: 150
      }
    ]
  },
  vendor_id: 1
};

describe('Menu API Routes test', () => {
  // GET ALL MENUS
  //
  describe('GET all menus', () => {
    it('should get all menus', done => {
      chai
        .request(app)
        .get('/api/v1/menu/')
        .end((err, res) => {
          console.log(res.body.body);
          expect(res.status).to.be.equal(200);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('array');
          done();
        });
    });
  });

  // GET A MENU
  //
  describe('GET /menu/:id', () => {
    it('should get a particular menu by the given id', done => {
      chai
        .request(app)
        .get('/api/v1/menu/1')
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data.id).to.be.equal(menu.id);
          expect(res.body.data.vendor_id).to.be.equal(menu.vendor_id);
          expect(res.body.data.meals.breakfast[0]['id']).to.be.equal(menu.meals.breakfast[0]['id']);
          expect(res.body.data.meals.breakfast.length).to.be.equal(menu.meals.breakfast.length);
          done();
        });
    });
  });

  // POST A MENU
  //
  describe('POST a meal', () => {
    it('should add a new meal', done => {
      chai
        .request(app)
        .post('/api/v1/menu/')
        .send(menu)
        .end((err, res) => {
          expect(res.status).to.be.equal(201);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('object');
          expect(res.body.data.id).to.be.a('number');
          console.log(res.body.data);
          expect(res.body.data.vendor_id).to.be.equal(menu.vendor_id);
          expect(res.body.data.meals.breakfast[0]['id']).to.be.equal(menu.meals.breakfast[0]['id']);
          expect(res.body.data.meals.breakfast.length).to.be.equal(menu.meals.breakfast.length);
          done();
        });
    });
  });
});
