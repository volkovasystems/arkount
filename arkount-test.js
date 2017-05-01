const assert = require( "assert" );
const arkount = require( "./arkount.js" );

assert.equal( arkount( ), 0 );
assert.equal( arkount( [ ] ), 0 );

var array = [ ];
array[ 1000 ] = 10;
assert.equal( arkount( array ), 1 );

console.log( "ok" );
