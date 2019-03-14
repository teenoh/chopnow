// import assert from 'assert';
// import chai, { expect } from 'chai';

// import chaiHttp from 'chai-http';
// import should from 'chai/register-should';

// import app from '../api/index';

// chai.use(chaiHttp);

// const order = {
//   id: 1,
//   customer_id: 5,
//   vendor_id: 8,
//   meals: [
//     {
//       id: 3,
//       name: 'Okro',
//       desc: 'Medium',
//       price: 450
//     },
//     {
//       id: 4,
//       name: 'Plantain and Beans',
//       desc: 'Small',
//       price: 150
//     }
//   ],
//   created_at: '17/02/2019'
// };

// describe('Order API Routes test', () => {
//   // GET ALL Orders
//   //
//   describe('GET all orders', () => {
//     it('should get all orders', done => {
//       chai
//         .request(app)
//         .get('/api/v1/orders/')
//         .end((err, res) => {
//           console.log(res.body.body);
//           expect(res.status).to.be.equal(200);
//           expect(res.type).to.be.equal('application/json');
//           expect(res.body.status).to.be.equal('success');
//           expect(res.body.data).to.be.a('array');
//           done();
//         });
//     });
//   });

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

//   // POST An Order
//   //
//   describe('POST an order', () => {
//     it('should add a new order', done => {
//       chai
//         .request(app)
//         .post('/api/v1/orders/')
//         .send(order)
//         .end((err, res) => {
//           console.log(err);
//           expect(res.status).to.be.equal(201);
//           expect(res.type).to.be.equal('application/json');
//           expect(res.body.status).to.be.equal('success');
//           expect(res.body.data).to.be.a('object');
//           expect(res.body.data.id).to.be.a('number');
//           expect(res.body.data.vendor_id).to.be.equal(order.vendor_id);
//           expect(res.body.data.customer_id).to.be.equal(order.customer_id);
//           expect(res.body.data.meals[0]['id']).to.be.equal(order.meals[0]['id']);
//           expect(res.body.data.created_at).to.be.equal(order.created_at);
//           done();
//         });
//     });
//   });

//   // PUT An Order
//   //
//   describe('Update an order', () => {
//     it('should add a new order', done => {
//       const updatedOrder = {
//         id: 1,
//         customer_id: 7
//       };
//       chai
//         .request(app)
//         .put('/api/v1/orders/1')
//         .send(updatedOrder)
//         .end((err, res) => {
//           console.log(err);
//           expect(res.status).to.be.equal(200);
//           expect(res.type).to.be.equal('application/json');
//           expect(res.body.status).to.be.equal('success');
//           expect(res.body.data).to.be.a('object');
//           expect(res.body.data.id).to.be.a('number');
//           expect(res.body.data.id).to.be.equal(updatedOrder.id);
//           expect(res.body.data.customer_id).to.be.equal(updatedOrder.customer_id);
//           done();
//         });
//     });
//   });
// });
