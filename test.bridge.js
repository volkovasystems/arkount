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
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("assert");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("raze", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;


	describe("`arkount( [ 1, 2, 3 ] )`", function () {
		it("should return 3", function () {

			assert.equal(result.value, 3);

		});
	});

	describe("`arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )`", function () {
		it("should return 2", function () {

			assert.equal(result.value, 2);

		});
	});

	describe("arkount( array )", function () {
		it("should return 1", function () {

			var array = [];
			array[1000] = 10;
			assert.equal(result.value, 1);


		});
	});

	describe("arkount( [ { hello: world, name: simple }", function () {
		it("should return 2", function () {

			assert.equal(result.value,
			2);

		});
	});

	describe("arkount( [ data ] )", function () {
		it("should return 1", function () {

			var data = {};
			data[(0, _symbol2.default)("hello")] = 12345;
			assert.equal(result.value, 1);

		});
	});

	describe("arkount( )", function () {
		it("should return 0", function () {

			assert.equal(result.value, 0);

		});
	});

	describe("arkount( [ ] )", function () {
		it("should return 0", function () {

			assert.equal(result.value, 0);

		});
	});

});


//: @end-bridge








// const assert = require( "assert" );
// const arkount = require( "./arkount.js" );

// assert.equal( arkount( [ 1, 2, 3 ] ), 3, "should return 3" );

// assert.equal( arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ), 2, "should return 2" );

// let array = [ ];
// array[ 1000 ] = 10;
// assert.equal( arkount( array ), 1, "should return 1" );

// assert.equal( arkount( [ { "hello": "world", "name": "simple" },
// 				{ "option": { "merchant": "biyaheroes" } } ] ),
// 				2, "should return 2" );

// let data = { };
// data[ Symbol( "hello" ) ] = 12345;
// assert.equal( arkount( [ data ] ), 1, "should return 1" );

// assert.equal( arkount( ), 0, "should return 0" );

// assert.equal( arkount( [ ] ), 0, "should return 0" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJyZXN1bHQiLCJ2YWx1ZSIsImFycmF5IiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87OztBQUd4QixLQUFJQyxZQUFZQyxTQUFoQjtBQUNBLEtBQUlDLGFBQWFKLEtBQUtLLE9BQUwsQ0FBY0gsU0FBZCxFQUF5QixhQUF6QixDQUFqQjtBQUNBLEtBQUlJLHdCQUF1QkYsVUFBM0I7OztBQUdBSCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNNLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFN0JULFVBQU9VLEtBQVAsQ0FBY0MsT0FBT0MsS0FBckIsRUFBNEIsQ0FBNUI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFULFVBQVUsMkNBQVYsRUFBdUQsWUFBTztBQUM5RE0sS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU1QlQsVUFBT1UsS0FBUCxDQUFjQyxPQUFPQyxLQUFyQixFQUE0QixDQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQVQsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3JDTSxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTVCLE9BQUlJLFFBQVEsRUFBWjtBQUNBQSxTQUFPLElBQVAsSUFBZ0IsRUFBaEI7QUFDQWIsVUFBT1UsS0FBUCxDQUFjQyxPQUFPQyxLQUFyQixFQUE0QixDQUE1Qjs7O0FBR0EsR0FQRjtBQVFDLEVBVEQ7O0FBV0FULFVBQVUsMkNBQVYsRUFBdUQsWUFBTztBQUM5RE0sS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU1QlQsVUFBT1UsS0FBUCxDQUFjQyxPQUFPQyxLQUFyQjtBQUNDLElBREQ7O0FBR0EsR0FMRjtBQU1DLEVBUEQ7O0FBU0FULFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN4Q00sS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU1QixPQUFJSyxPQUFPLEVBQVg7QUFDQUEsUUFBTSxzQkFBUSxPQUFSLENBQU4sSUFBNEIsS0FBNUI7QUFDQWQsVUFBT1UsS0FBUCxDQUFjQyxPQUFPQyxLQUFyQixFQUE0QixDQUE1Qjs7QUFFQSxHQU5GO0FBT0MsRUFSRDs7QUFVQVQsVUFBVSxZQUFWLEVBQXdCLFlBQU87QUFDL0JNLEtBQUksaUJBQUosRUFBd0IsWUFBTzs7QUFFN0JULFVBQU9VLEtBQVAsQ0FBY0MsT0FBT0MsS0FBckIsRUFBNEIsQ0FBNUI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFULFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNuQ00sS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU1QlQsVUFBT1UsS0FBUCxDQUFjQyxPQUFPQyxLQUFyQixFQUE0QixDQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQSxDQXRFRDs7O0FBeUVBOzs7Ozs7Ozs7QUFTQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImFya291bnRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiYXJrb3VudC90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYXJrb3VudC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImFya291bnRcIjogXCJhcmtvdW50XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJyYXplXCIsICggKSA9PiB7XHJcblxyXG5cdFxyXG5cdGxldCBkaXJlY3RvcnkgPSBfX2Rpcm5hbWU7XHJcblx0bGV0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoIGRpcmVjdG9yeSwgXCJicmlkZ2UuaHRtbFwiICk7XHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcclxuXHJcblx0XHJcblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIDNcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCAzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgWyAxLCAyLCAzIF0sIFsgNCwgNSwgNiBdIF0gKWBcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIDJcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCAyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYXJrb3VudCggYXJyYXkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGFycmF5ID0gWyBdO1xyXG5cdFx0XHRhcnJheVsgMTAwMCBdID0gMTA7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCAxICk7XHJcblxyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImFya291bnQoIFsgeyBoZWxsbzogd29ybGQsIG5hbWU6IHNpbXBsZSB9XCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiAyXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSxcclxuXHRcdFx0XHQyKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJhcmtvdW50KCBbIGRhdGEgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiAxXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcclxuXHRcdFx0ZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCAxICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYXJrb3VudCggKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMFwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCAwKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJhcmtvdW50KCBbIF0gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIDAgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuLy8gY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiLi9hcmtvdW50LmpzXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggYXJrb3VudCggWyAxLCAyLCAzIF0gKSwgMywgXCJzaG91bGQgcmV0dXJuIDNcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIFsgMSwgMiwgMyBdLCBbIDQsIDUsIDYgXSBdICksIDIsIFwic2hvdWxkIHJldHVybiAyXCIgKTtcclxuXHJcbi8vIGxldCBhcnJheSA9IFsgXTtcclxuLy8gYXJyYXlbIDEwMDAgXSA9IDEwO1xyXG4vLyBhc3NlcnQuZXF1YWwoIGFya291bnQoIGFycmF5ICksIDEsIFwic2hvdWxkIHJldHVybiAxXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggYXJrb3VudCggWyB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiLCBcIm5hbWVcIjogXCJzaW1wbGVcIiB9LFxyXG4vLyBcdFx0XHRcdHsgXCJvcHRpb25cIjogeyBcIm1lcmNoYW50XCI6IFwiYml5YWhlcm9lc1wiIH0gfSBdICksXHJcbi8vIFx0XHRcdFx0MiwgXCJzaG91bGQgcmV0dXJuIDJcIiApO1xyXG5cclxuLy8gbGV0IGRhdGEgPSB7IH07XHJcbi8vIGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xyXG4vLyBhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgZGF0YSBdICksIDEsIFwic2hvdWxkIHJldHVybiAxXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggYXJrb3VudCggKSwgMCwgXCJzaG91bGQgcmV0dXJuIDBcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIF0gKSwgMCwgXCJzaG91bGQgcmV0dXJuIDBcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
