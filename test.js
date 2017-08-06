"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "arkount",
			"path": "arkount/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/arkount.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"arkount": "arkount"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const arkount = require( "./arkount.js" );
//: @end-server





//: @server:
describe( "arkount", ( ) => {

	describe( "`arkount( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to 3", ( ) => {

			assert.equal( arkount( [ 1, 2, 3 ] ), 3 );

		} );
	} );


	describe( "`arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )`", ( ) => {
		it( "should be equal to 2", ( ) => {

			assert.equal( arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ), 2 );

		} );
	} );


	describe( "`arkount( [ undefined, undefined, 10 ] )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			assert.equal( arkount( [ undefined, undefined, 10 ] ), 1 );

		} );
	} );


	describe( "`arkount( [ { 'hello': 'world' }, { 'name': 'simple' } ] )`", ( ) => {
		it( "should be equal to 2", ( ) => {

			assert.equal( arkount( [ {
				 "hello": "world", "name": "simple" },
				{ "option": { "merchant": "biyaheroes" } }
			] ), 2 );

		} );
	} );


	describe( "`arkount( [ { [ Symbol( 'hello' ) ]: 12345 } ] )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			let data = { };
			data[ Symbol( "hello" ) ] = 12345;
			assert.equal( arkount( [ data ] ), 1 );

		} );
	} );


	describe( "`arkount( )`", ( ) => {
		it( "should be equal to 0" , ( ) => {

			assert.equal( arkount( ), 0 );

		} );
	} );


	describe( "`arkount( [ ] )`", ( ) => {
		it( "should be equal to 0", ( ) => {

			assert.equal( arkount( [ ] ), 0 );

		} );
	} );

} );


//: @end-server






