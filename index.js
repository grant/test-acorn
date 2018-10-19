const acorn = require('acorn');

var p = acorn.parse(`

function foo(hi) {
  console.log('hi' + hi);
}

var e = 43;
console.log('hi');

`);
var s = JSON.stringify(p);
var parsed = JSON.parse(s);
console.dir(parsed);