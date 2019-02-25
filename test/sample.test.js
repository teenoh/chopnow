import assert from 'assert';
import { expect } from 'chai';
import should from 'chai/register-should';

const sayHello = () => 'Hello';

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
