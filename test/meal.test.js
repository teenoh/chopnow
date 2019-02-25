import assert from 'assert';
import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';
import should from 'chai/register-should';

import app from '../api/index';


chai.use(chaiHttp);

describe('Meal API Routes test', () => {
    describe('GET all meals', () => {
        it('should get all meals', (done) => {
            chai.request(app)
                .get('/api/v1/meals/')
                .end((err, res) => {
                    console.log(res.body)
                    expect(res.status).to.be.equal(200)
                    expect(res.type).to.be.equal('application/json')
                    expect(res.body.status).to.be.equal('success')
                    expect(res.body.data).to.be.a('array')
                    done();
                })
        });
    });
});

