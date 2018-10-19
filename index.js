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
/**

The result will be something like this. See  type=FunctionDeclaration use body.id.name for the name.

{ type: 'Program',
  start: 0,
  end: 82,
  body:
   [ { type: 'FunctionDeclaration',
       start: 2,
       end: 48,
       id: [Object],
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Object] },
     { type: 'VariableDeclaration',
       start: 50,
       end: 61,
       declarations: [Array],
       kind: 'var' },
     { type: 'ExpressionStatement',
       start: 62,
       end: 80,
       expression: [Object] } ],
  sourceType: 'script' }

**/
