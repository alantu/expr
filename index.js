
/**
 * Module exports
 */

module.exports = evaluate;
module.exports.Ctx = Ctx;
module.exports.Expr = Expr;


/**
 * @param (String) expr - the expression to be evaluated
 * @param (Object) ctx - the context object
 */

function evaluate(expr, ctx) {
  ctx = ctx || {};
  return _eval(expr, clean(ctx));
}

function _eval(expr, ctx) {
  return new Function("with(this) { return " + expr + "}").call(ctx);
}

function clean(ctx) {
  for (p in this) {
    ctx[p] = undefined;
  }

  return ctx;
}



/**
 * @class Ctx
 * @param (Object) ctx - the context object
 */

function Ctx(ctx) {
  this.ctx = clean(ctx);
}

/**
 * @param (String) expr - the expression to be evaluated
 */

Ctx.prototype.match = function(expr) {
  return _eval(expr, this.ctx);
}



/**
 * @class Expr
 * @param (String) expr - the expression to be evaluated
 */

function Expr(expr) {
  this.expr = expr;
}

/**
 * @param (Object) ctx - the context object
 */

Expr.prototype.test = function(ctx) {
  return evaluate(this.expr, ctx);
}