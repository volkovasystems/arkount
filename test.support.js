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

var assert = require("should");



//: @client:
var arkount = require("./arkount.support.js");
//: @end-client






//: @client:
describe("arkount", function () {

	describe("`arkount( [ 1, 2, 3 ] )`", function () {
		it("should be equal to 3", function () {

			assert.equal(arkount([1, 2, 3]), 3);

		});
	});


	describe("`arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )`", function () {
		it("should be equal to 2", function () {

			assert.equal(arkount([[1, 2, 3], [4, 5, 6]]), 2);

		});
	});


	describe("`arkount( array )`", function () {
		it("should be equal to 1", function () {

			var array = [];
			array[1000] = 10;
			assert.equal(arkount(array), 1);


		});
	});


	describe("`arkount( [ { 'hello': 'world' }, { 'name': 'simple' } ] )`", function () {
		it("should be equal to 2", function () {

			assert.equal(arkount([{ "hello": "world", "name": "simple" },
			{ "option": { "merchant": "biyaheroes" } }]),
			2);

		});
	});


	describe("`arkount( { [ Symbol( 'hello' ) ]: 12345 } )`", function () {
		it("should be equal to 1", function () {

			var data = {};
			data[(0, _symbol2.default)("hello")] = 12345;
			assert.equal(arkount([data]), 1);

		});
	});


	describe("`arkount( )`", function () {
		it("should be equal to 0", function () {

			assert.equal(arkount(), 0);

		});
	});


	describe("`arkount( [ ] )`", function () {
		it("should be equal to 0", function () {

			assert.equal(arkount([]), 0);

		});
	});
});



//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImFycmF5IiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7OztBQU9BO0FBQ0FFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSwwQkFBVixFQUFzQyxZQUFPO0FBQzVDQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVCxDQUFkLEVBQXNDLENBQXRDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwyQ0FBVixFQUF1RCxZQUFPO0FBQzdEQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFGLEVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBZixDQUFULENBQWQsRUFBdUQsQ0FBdkQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLG9CQUFWLEVBQWdDLFlBQU87QUFDdENDLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFbEMsT0FBSUUsUUFBUSxFQUFaO0FBQ0FBLFNBQU8sSUFBUCxJQUFnQixFQUFoQjtBQUNBTixVQUFPSyxLQUFQLENBQWNILFFBQVNJLEtBQVQsQ0FBZCxFQUFnQyxDQUFoQzs7O0FBR0EsR0FQRDtBQVFBLEVBVEQ7OztBQVlBSCxVQUFVLDZEQUFWLEVBQXlFLFlBQU87QUFDL0VDLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFbENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFFLEVBQUUsU0FBUyxPQUFYLEVBQW9CLFFBQVEsUUFBNUIsRUFBRjtBQUN0QixLQUFFLFVBQVUsRUFBRSxZQUFZLFlBQWQsRUFBWixFQURzQixDQUFULENBQWQ7QUFFQyxJQUZEOztBQUlBLEdBTkQ7QUFPQSxFQVJEOzs7QUFXQUMsVUFBVSwrQ0FBVixFQUEyRCxZQUFPO0FBQ2pFQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDLE9BQUlHLE9BQU8sRUFBWDtBQUNBQSxRQUFNLHNCQUFRLE9BQVIsQ0FBTixJQUE0QixLQUE1QjtBQUNBUCxVQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRUssSUFBRixDQUFULENBQWQsRUFBbUMsQ0FBbkM7O0FBRUEsR0FORDtBQU9BLEVBUkQ7OztBQVdBSixVQUFVLGNBQVYsRUFBMEIsWUFBTztBQUNoQ0MsS0FBSSxzQkFBSixFQUE2QixZQUFPOztBQUVuQ0osVUFBT0ssS0FBUCxDQUFjSCxTQUFkLEVBQTBCLENBQTFCOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxDQUFkLEVBQThCLENBQTlCOztBQUVBLEdBSkQ7QUFLQSxFQU5EO0FBT0EsQ0F0RUQ7Ozs7QUEwRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImFya291bnRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiYXJrb3VudC90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYXJrb3VudC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImFya291bnRcIjogXCJhcmtvdW50XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGFya291bnQgPSByZXF1aXJlKCBcIi4vYXJrb3VudC5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5kZXNjcmliZSggXCJhcmtvdW50XCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDNcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyAxLCAyLCAzIF0gKSwgMyApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyBbIDEsIDIsIDMgXSwgWyA0LCA1LCA2IF0gXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDJcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyBbIDEsIDIsIDMgXSwgWyA0LCA1LCA2IF0gXSApLCAyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBhcnJheSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDFcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCBhcnJheSA9IFsgXTtcclxuXHRcdFx0YXJyYXlbIDEwMDAgXSA9IDEwO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIGFycmF5ICksIDEgKTtcclxuXHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCB7ICduYW1lJzogJ3NpbXBsZScgfSBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMlwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIsIFwibmFtZVwiOiBcInNpbXBsZVwiIH0sXHJcblx0XHRcdFx0eyBcIm9wdGlvblwiOiB7IFwibWVyY2hhbnRcIjogXCJiaXlhaGVyb2VzXCIgfSB9IF0gKSxcclxuXHRcdFx0XHQyKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAxMjM0NSB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSB7IH07XHJcblx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgZGF0YSBdICksIDEgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMFwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggKSwgMCk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIF0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAwXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgXSApLCAwICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxufSApO1xyXG5cclxuXHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuIl19
//# sourceMappingURL=test.support.js.map
