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



//: @client:
var arkount = require("./arkount.support.js");
//: @end-client






//: @client: 
describe("arkount", function () {

	describe("`arkount( [ 1, 2, 3 ] )`", function () {
		it("should return 3", function () {

			assert.equal(arkount([1, 2, 3]), 3);

		});
	});

	describe("`arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )`", function () {
		it("should return 2", function () {

			assert.equal(arkount([[1, 2, 3], [4, 5, 6]]), 2);

		});
	});

	describe("arkount( array )", function () {
		it("should return 1", function () {

			var array = [];
			array[1000] = 10;
			assert.equal(arkount(array), 1);


		});
	});

	describe("arkount( [ { hello: world, name: simple }", function () {
		it("should return 2", function () {

			assert.equal(arkount([{ "hello": "world", "name": "simple" },
			{ "option": { "merchant": "biyaheroes" } }]),
			2);

		});
	});

	describe("arkount( [ data ] )", function () {
		it("should return 1", function () {

			var data = {};
			data[(0, _symbol2.default)("hello")] = 12345;
			assert.equal(arkount([data]), 1);

		});
	});

	describe("arkount( )", function () {
		it("should return 0", function () {

			assert.equal(arkount(), 0);

		});
	});

	describe("arkount( [ ] )", function () {
		it("should return 0", function () {

			assert.equal(arkount([]), 0);

		});
	});


});


//: @end-client











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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImFycmF5IiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7OztBQU9BO0FBQ0FFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSwwQkFBVixFQUFzQyxZQUFPO0FBQzVDQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTdCSixVQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVCxDQUFkLEVBQXNDLENBQXRDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDJDQUFWLEVBQXVELFlBQU87QUFDOURDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUYsRUFBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFmLENBQVQsQ0FBZCxFQUF1RCxDQUF2RDs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3JDQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTVCLE9BQUlFLFFBQVEsRUFBWjtBQUNBQSxTQUFPLElBQVAsSUFBZ0IsRUFBaEI7QUFDQU4sVUFBT0ssS0FBUCxDQUFjSCxRQUFTSSxLQUFULENBQWQsRUFBZ0MsQ0FBaEM7OztBQUdBLEdBUEY7QUFRQyxFQVREOztBQVdBSCxVQUFVLDJDQUFWLEVBQXVELFlBQU87QUFDOURDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFFLEVBQUUsU0FBUyxPQUFYLEVBQW9CLFFBQVEsUUFBNUIsRUFBRjtBQUN0QixLQUFFLFVBQVUsRUFBRSxZQUFZLFlBQWQsRUFBWixFQURzQixDQUFULENBQWQ7QUFFQyxJQUZEOztBQUlBLEdBTkY7QUFPQyxFQVJEOztBQVVBQyxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDeENDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUIsT0FBSUcsT0FBTyxFQUFYO0FBQ0FBLFFBQU0sc0JBQVEsT0FBUixDQUFOLElBQTRCLEtBQTVCO0FBQ0FQLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFFSyxJQUFGLENBQVQsQ0FBZCxFQUFtQyxDQUFuQzs7QUFFQSxHQU5GO0FBT0MsRUFSRDs7QUFVQUosVUFBVSxZQUFWLEVBQXdCLFlBQU87QUFDL0JDLEtBQUksaUJBQUosRUFBd0IsWUFBTzs7QUFFN0JKLFVBQU9LLEtBQVAsQ0FBY0gsU0FBZCxFQUEwQixDQUExQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTVCSixVQUFPSyxLQUFQLENBQWNILFFBQVMsRUFBVCxDQUFkLEVBQThCLENBQTlCOztBQUVBLEdBSkY7QUFLQyxFQU5EOzs7QUFTQSxDQWxFRDs7O0FBcUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJhcmtvdW50XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImFya291bnQvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Fya291bnQuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJhcmtvdW50XCI6IFwiYXJrb3VudFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCIuL2Fya291bnQuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcbmRlc2NyaWJlKCBcImFya291bnRcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gM1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIDEsIDIsIDMgXSApLCAzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgWyAxLCAyLCAzIF0sIFsgNCwgNSwgNiBdIF0gKWBcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIDJcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyBbIDEsIDIsIDMgXSwgWyA0LCA1LCA2IF0gXSApLCAyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYXJrb3VudCggYXJyYXkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGFycmF5ID0gWyBdO1xyXG5cdFx0XHRhcnJheVsgMTAwMCBdID0gMTA7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggYXJyYXkgKSwgMSApO1xyXG5cclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJhcmtvdW50KCBbIHsgaGVsbG86IHdvcmxkLCBuYW1lOiBzaW1wbGUgfVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gMlwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIsIFwibmFtZVwiOiBcInNpbXBsZVwiIH0sXHJcblx0XHRcdFx0eyBcIm9wdGlvblwiOiB7IFwibWVyY2hhbnRcIjogXCJiaXlhaGVyb2VzXCIgfSB9IF0gKSxcclxuXHRcdFx0XHQyKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJhcmtvdW50KCBbIGRhdGEgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiAxXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcclxuXHRcdFx0ZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyBkYXRhIF0gKSwgMSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImFya291bnQoIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIDBcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoICksIDApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImFya291bnQoIFsgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiAwXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgXSApLCAwICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG59ICk7XHJcblxyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG4vLyBjb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCIuL2Fya291bnQuanNcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIDEsIDIsIDMgXSApLCAzLCBcInNob3VsZCByZXR1cm4gM1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgWyAxLCAyLCAzIF0sIFsgNCwgNSwgNiBdIF0gKSwgMiwgXCJzaG91bGQgcmV0dXJuIDJcIiApO1xyXG5cclxuLy8gbGV0IGFycmF5ID0gWyBdO1xyXG4vLyBhcnJheVsgMTAwMCBdID0gMTA7XHJcbi8vIGFzc2VydC5lcXVhbCggYXJrb3VudCggYXJyYXkgKSwgMSwgXCJzaG91bGQgcmV0dXJuIDFcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIsIFwibmFtZVwiOiBcInNpbXBsZVwiIH0sXHJcbi8vIFx0XHRcdFx0eyBcIm9wdGlvblwiOiB7IFwibWVyY2hhbnRcIjogXCJiaXlhaGVyb2VzXCIgfSB9IF0gKSxcclxuLy8gXHRcdFx0XHQyLCBcInNob3VsZCByZXR1cm4gMlwiICk7XHJcblxyXG4vLyBsZXQgZGF0YSA9IHsgfTtcclxuLy8gZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XHJcbi8vIGFzc2VydC5lcXVhbCggYXJrb3VudCggWyBkYXRhIF0gKSwgMSwgXCJzaG91bGQgcmV0dXJuIDFcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCApLCAwLCBcInNob3VsZCByZXR1cm4gMFwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgXSApLCAwLCBcInNob3VsZCByZXR1cm4gMFwiICk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
