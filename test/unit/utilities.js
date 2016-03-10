var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function() {
    expect(todo).to.be.a('object');

    it('should have all the necessary methods', function() {
      assert.property(todo.util, 'trimTodoName');
      todo.util.should.have.property('isValidTodoName');
      expect(todo.util).to.have.property('getUniqueId');
    });
  });
});

describe('the todo.util methods', function() {
  describe('the trimTodoName function', function() {
    todo.util.trimTodoName(' hello').should.equal('hello');
    todo.util.trimTodoName(' hello').should.not.equal(' hello');
    todo.util.trimTodoName(' hello').should.have.length(5);
  });

  describe('the isValidTodoName function', function() {
    expect(todo.util.isValidTodoName('#')).to.equal(false);
    expect(todo.util.isValidTodoName('SamSmith')).to.equal(true);
  });

  describe('the getUniqueId function', function() {
    assert.typeOf(todo.util.getUniqueId(), 'number');
  });
});
