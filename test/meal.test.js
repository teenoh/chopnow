import assert from 'assert';
import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';
import should from 'chai/register-should';

import app from '../api/index';


chai.use(chaiHttp);

describe('Meal API Routes test', () => {
    
    // GET ALL MEALS 
    // 
    describe('GET all meals', () => {
        it('should get all meals', (done) => {
            chai.request(app)
                .get('/api/v1/meals/')
                .end((err, res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.type).to.be.equal('application/json')
                    expect(res.body.status).to.be.equal('success')
                    expect(res.body.data).to.be.a('array')
                    done();
                })
        });
    });


    // GET A MEAL 
    // 
    describe('GET /meals/:id', () => {
        it('should get a particular meal by the given id', (done) => {
            const meal = {
                id: 1,
                name: 'Fried Rice',
                desc: 'Medium',
                price: 450
            }
            chai.request(app)
                .get('/api/v1/meals/1')
                .end((err, res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.type).to.be.equal('application/json')
                    expect(res.body.status).to.be.equal('success')
                    expect(res.body.data.id).to.be.equal(meal.id)
                    expect(res.body.data.name).to.be.equal(meal.name)
                    expect(res.body.data.desc).to.be.equal(meal.desc)
                    expect(res.body.data.price).to.be.equal(meal.price)
                    done();
                })
        });
    });


    // POST A MEAL TEST
    // 
    describe('POST a meal', () => {
        it('should add a new meal', (done) => {
            const newMeal = {
                name: 'Moi Moi and Pap',
                desc: 'Medium',
                price: 450
            }
            chai.request(app)
                .post('/api/v1/meals/')
                .send(newMeal)
                .end((err, res) => {
                    expect(res.status).to.be.equal(201)
                    expect(res.type).to.be.equal('application/json')
                    expect(res.body.status).to.be.equal('success')
                    expect(res.body.data).to.be.a('object')
                    expect(res.body.data.name).to.be.equal(newMeal.name)
                    expect(res.body.data.desc).to.be.equal(newMeal.desc)
                    expect(res.body.data.price).to.be.equal(newMeal.price)
                    done();
                })
        });
    });
});


// UPDATE A MEAL
describe('UPDATE /api/v1/meals/:id', () => {
    it('it should update the meal with the id sent', (done) => {
        const updatedMeal = {
            name: "Fries",
            price: 600
        }
        chai.request(app)
            .put('/api/v1/meals/1')
            .send(updatedMeal)
            .end((err, res) => {
                console.log(res.body)
                res.should.have.status(200);
                expect(res.body.data.name).to.be.equal(updatedMeal.name)
                expect(res.body.data.price).to.be.equal(updatedMeal.price)
                expect(res.body.status).to.be.equal('success')
                done();
            });
    });
})


// DELETE A MEAL
describe('DELETE /api/v1/meals/:id', () => {
    it('it should delete the meal with the id sent', (done) => {
        chai.request(app)
            .delete('/api/v1/meals/1')
            .end((err, res) => {
                console.log(res.body)
                res.should.have.status(204);
                // check this line
                // expect(res.body.status).to.be.equal('success')
                done();
            });
    });
})