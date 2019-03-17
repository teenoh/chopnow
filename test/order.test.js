import assert from 'assert';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../api/index';

const order1 = {
  customer: 1,
  meals: [{ id: 2, quantity: 4 }, { id: 3, quantity: 5 }]
};

describe('Order API Routes test', () => {
  // GET ALL Orders
  //
  describe('GET all orders', () => {
    it('should get all orders', done => {
      request(app)
        .get('/api/v1/orders/')
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

  //   // GET an Order
  //   //
  //   describe('GET /orders/:id', () => {
  //     it('should get a particular order by the given id', done => {
  //       chai
  //         .request(app)
  //         .get('/api/v1/orders/1')
  //         .end((err, res) => {
  //           expect(res.status).to.be.equal(200);
  //           expect(res.type).to.be.equal('application/json');
  //           expect(res.body.status).to.be.equal('success');
  //           expect(res.body.data.id).to.be.equal(order.id);
  //           expect(res.body.data.vendor_id).to.be.equal(order.vendor_id);
  //           expect(res.body.data.customer_id).to.be.equal(order.customer_id);
  //           expect(res.body.data.meals[0]['id']).to.be.equal(order.meals[0]['id']);
  //           expect(res.body.data.created_at).to.be.equal(order.created_at);
  //           done();
  //         });
  //     });
  //   });

  // POST An Order
  //
  describe('POST an order', () => {
    it('should add a new order', done => {
      request(app)
        .post('/api/v1/orders/')
        .send(order1)
        .end((err, res) => {
          console.log(res.body.data);
          expect(res.status).to.be.equal(201);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('object');
          expect(res.body.data.customer.id).to.be.equal(order1.customer);
          expect(res.body.data.meals[0]['id']).to.be.equal(order1.meals[0]['id']);
          expect(res.body.data.meals[0]['OrderItem']['quantity']).to.be.equal(
            order1.meals[0]['quantity']
          );
          expect(res.body.data.meals[1]['id']).to.be.equal(order1.meals[1]['id']);
          expect(res.body.data.meals[1]['OrderItem']['quantity']).to.be.equal(
            order1.meals[1]['quantity']
          );
          done();
        });
    });
  });

  // PUT An Order
  //
  describe('Update an order', () => {
    it('should add a new order', done => {
      const updatedOrder = {
        ...order1,
        meals: [{ id: 2, quantity: 10 }, { id: 3, quantity: 10 }]
      };
      request(app)
        .put('/api/v1/orders/4')
        .send(updatedOrder)
        .end((err, res) => {
          console.log(err);
          expect(res.status).to.be.equal(200);
          expect(res.type).to.be.equal('application/json');
          expect(res.body.status).to.be.equal('success');
          expect(res.body.data).to.be.a('object');
          expect(res.body.data.customer.id).to.be.equal(updatedOrder.customer);
          expect(res.body.data.meals[0]['id']).to.be.equal(updatedOrder.meals[0]['id']);
          expect(res.body.data.meals[0]['OrderItem']['quantity']).to.be.equal(
            updatedOrder.meals[0]['quantity']
          );
          expect(res.body.data.meals[1]['id']).to.be.equal(updatedOrder.meals[1]['id']);
          expect(res.body.data.meals[1]['OrderItem']['quantity']).to.be.equal(
            updatedOrder.meals[1]['quantity']
          );
          done();
        });
    });
  });
});
