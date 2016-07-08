var test = require('tape');
var logFormat = require('../index');

test('Basic test', function basicTest(t) {
  t.equal(
    logFormat('Hey, check this out:', {key: 'value', number: 1}, 'wow amaze', [8, 9, 10]),
    'Hey, check this out: {"key":"value","number":1} wow amaze [8,9,10]\n'
  );
  t.end();
});
