import assert from 'assert';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../api/index';

// TODO
// - populate db in before() and beforeEach 
// - Test for update fails
// - 

// Menu with date that has already been set
const menu1 = {
  catererId: 1,
  date: '2019-01-01',
  meals: [{ id: 2, category: 'dinner' }, { id: 3, category: 'lunch' }]
};

// Menu with new date that hasn't been set
// if this is added, it has an id of 4
const menu2 = {
  catererId: 1,
  date: '2020-02-03',
  meals: [{ id: 2, category: 'breakfast' }, { id: 3, category: 'lunch' }]
};

// From DB
// Meal1 => 'Rice and Beans'
// Meal2 => 'Rice and Turkey'
// Meal3 => 'Eba and Oha Soup'

describe('Menu API Routes test', () => {
  // GET ALL MENUS
  //
  describe('GET all menus', () => {
    it('should get all menus', done => {
      request(app)
        .get('/api/v1/menu/')
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('array');
          done();
        });
    });
  });


  // POST A MENU
  //
  describe('POST a menu', () => {
    it('should add a new menu', done => {
      request(app)
        .post('/api/v1/menu/')
        .send(menu2)
        .end((err, res) => {
          console.log('stuff ==>', res.body);
          expect(res.status).to.be.equal(201);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('object');
          expect(res.body.data.caterer.id).to.be.equal(menu2.catererId);
          done();
        });
    });
  });

  // UPDATE A MENU
  //
  // describe('UPDATE a menu', () => {
  //   it('should update an existing menu  /menu/:id', done => {
  //     request(app)
  //       .post('/api/v1/menu/4/')
  //       .send({ ...menu2, meals: [{ id: 2, category: 'dinner' }, { id: 3, category: 'dinner' }]})
  //       .end((err, res) => {
  //         console.log('stuff ==>', res.body);
  //         expect(res.status).to.be.equal(201);
  //         expect(res.type).to.be.equal('application/json');
  //         expect(res.body.status).to.be.equal('success');
  //         expect(res.body.data).to.be.a('object');
  //         expect(res.body.data.caterer.id).to.be.equal(menu2.catererId);
  //         done();
  //       });
  //   });
  // });
});
