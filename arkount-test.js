const assert = require( "assert" );
const arkount = require( "./arkount.js" );

assert.equal( arkount( ), 0 );
assert.equal( arkount( [ ] ), 0 );

assert.equal( arkount( { } ), 0, "should have value 0" );
assert.equal( arkount( Array ), 0, "should have value 0" );
assert.equal( arkount( Object ), 0, "should have value 0" );

var array = [ ];
array[ 1000 ] = 10;
assert.equal( arkount( array ), 1 );

assert.equal( arkount( [ { "hello": "world", "name": "simple" }, { "option": { "merchant": "biyaheroes" } } ] ), 2, "should have value 2" );

console.log( "ok" );
