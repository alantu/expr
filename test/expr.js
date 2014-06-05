var expr = require('../');

describe('expr', function(){
  it('should test expression against objects', function(done) {
    var str = "this.age > 30 && this.gender === 'female'";

    var exp = new expr.Expr(str);

    exp.test({ age: 15, gender: 'male' }).should.be.not.ok;

    exp.test({ age: 32, gender: 'female' }).should.be.ok;

    done();
  });
});

describe('ctx', function(){
  it('should match context against expressions', function(done) {
    var ctx = new expr.Ctx({ age: 15, gender: 'male' });

    ctx.match("this.age > 30 && this.gender === 'female'").should.be.not.ok;

    ctx.match("this.age > 10 && this.gender === 'male'").should.be.ok;

    done();
  });
});