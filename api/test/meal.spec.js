import assert from 'assert';
import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';
import should from 'chai/register-should';

import app from '../index';

const sayHello = () => 'Hello';

chai.use(chaiHttp);

describe('Meal API Routes test', () => {
  describe('GET all meals', () => {
    it('should get all meals', (done) => {
      chai.request(app)
          .get('/api/v1/meals/')
          .end((err, res) => {
            expect(res.status).to.be.equal(200)
            expect(res.type).to.be.equal('application/json')
            done();
          })
    });
  });
});

describe('Basic Mocha test', () => {
  it('should return number of characters in a string', () => {
    assert.equal('Hello'.length, 5);
  });

  it('should return the first character of the string', () => {
    assert.equal('Hello'.charAt(0), 'H');
  });

  describe('sayHello function', () => {
    it("should say 'Hello'", () => {
      const str = sayHello();
      expect(str).to.equal('Hello');
    });
  });
});
