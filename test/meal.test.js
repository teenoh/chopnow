import assert from 'assert';
import chai, { expect } from 'chai';
import should from 'chai/register-should';
import request from 'supertest';

import app from '../api/index';


// import chaiHttp from 'chai-http';



// chai.use(chaiHttp);

describe('Meal API Routes test', () => {
  // GET ALL MEALS
  //
  describe('GET all meals', () => {
    it('should get all meals', done => {
      request(app)
        .get('/api/v1/meals/')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('array');

          if (err) return done(err);
          done();
        });
    });
  });

  // GET A MEAL
  //
  // describe('GET /meals/:id', () => {
  //   it('should get a particular meal by the given id', done => {
  //     const meal = { // gotten from meal seeder
  //       id: 1,
  //       name: 'Rice and Beans',
  //       price: 600,
  //       desc: 'Sweet Food'
  //     }
  //     request(app)
  //       .get('/api/v1/meals/1')
  //       .end((err, res) => {
  //         expect(res.status).to.be.equal(200);
  //         expect(res.type).to.be.equal('application/json');
  //         expect(res.body.status).to.be.equal('success');
  //         expect(res.body.data.id).to.be.equal(meal.id);
  //         expect(res.body.data.name).to.be.equal(meal.name);
  //         expect(res.body.data.desc).to.be.equal(meal.desc);
  //         expect(res.body.data.price).to.be.equal(meal.price);
  //         done();
  //       });
  //   });
  // });

  // POST A MEAL TEST
  //
  describe('POST a meal', () => {
    it('should add a new meal', done => {
      const newMeal = {
        name: 'Moi Moi and Pap',
        desc: 'Medium',
        price: 450,
      };
      request(app)
        .post('/api/v1/meals/')
        .set('Accept', 'application/json')
        .send(newMeal)
        .end((err, res) => {
          console.log('addMeal => ', res.body);
          expect(res.status).to.be.equal(201);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('object');
          expect(res.body.data.name).to.be.equal(newMeal.name);
          expect(res.body.data.desc).to.be.equal(newMeal.desc);
          expect(res.body.data.price).to.be.equal(newMeal.price);

          if (err) return done(err);
          done();
        });
    });
  });

  // UPDATE A MEAL
  describe('UPDATE /api/v1/meals/:id', () => {
    it('it should update the meal with the id sent', done => {
      const updatedMeal = {
        name: 'Fries',
        price: 600
      };
      request(app)
        .put('/api/v1/meals/4')
        .send(updatedMeal)
        .end((err, res) => {
          expect(res.status).to.be.equal(200)
          expect(res.body.data.name).to.be.equal(updatedMeal.name);
          expect(res.body.data.price).to.be.equal(updatedMeal.price);
          expect(res.body.status).to.be.equal('success');
          done();
        });
    });
  });

  // DELETE A MEAL
  describe('DELETE /api/v1/meals/:id', () => {
    it('it should delete the meal with the id sent', done => {
      request(app)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          expect(res.body.status).to.be.equal('success')
          expect(res.body.message).to.be.equal('Meal Deleted');
          done();
        });
    });
  });

});
