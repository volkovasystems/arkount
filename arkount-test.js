
const arkount = require( "./arkount.js" );

console.log( arkount( ) );
console.log( arkount( [ ] ) );

var array = [ ];
array[ 1000 ] = 10;
console.log( arkount( array ) );
