expr
====

[![NPM version](https://badge.fury.io/js/node-expr.svg)](http://badge.fury.io/js/node-expr) [![Build Status](https://travis-ci.org/alantu/expr.svg?branch=master)](http://travis-ci.org/alantu/expr)

**expr** is a simple and secure Javascript expression evaluator.
Useful for evaluating dinamically generated expressions.


Usage
-----

Evaluating an expression against objects

```javascript

var str = "this.age > 30 && this.gender === 'female'";

var expr = new expr.Expr(str);

expr.test({ age: 15, gender: 'male' });
// => false

expr.test({ age: 32, gender: 'female' });
// => true

```

Evaluating an object against expressions

```javascript

var ctx = new expr.Ctx({ age: 15, gender: 'male' });

ctx.match("this.age > 30 && this.gender === 'female'");
// => false

ctx.match("this.age > 10 && this.gender === 'male'");
// => true

```