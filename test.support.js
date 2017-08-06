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


	describe("`arkount( [ undefined, undefined, 10 ] )`", function () {
		it("should be equal to 1", function () {

			assert.equal(arkount([undefined, undefined, 10]), 1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBRSxTQUFVLFNBQVYsRUFBcUIsWUFBTzs7QUFFM0JBLFVBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0MsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVQsQ0FBZCxFQUFzQyxDQUF0Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsMkNBQVYsRUFBdUQsWUFBTztBQUM3REMsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRixFQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWYsQ0FBVCxDQUFkLEVBQXVELENBQXZEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSwyQ0FBVixFQUF1RCxZQUFPO0FBQzdEQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRUksU0FBRixFQUFhQSxTQUFiLEVBQXdCLEVBQXhCLENBQVQsQ0FBZCxFQUF1RCxDQUF2RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FILFVBQVUsNkRBQVYsRUFBeUUsWUFBTztBQUMvRUMsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUUsRUFBRSxTQUFTLE9BQVgsRUFBb0IsUUFBUSxRQUE1QixFQUFGO0FBQ3RCLEtBQUUsVUFBVSxFQUFFLFlBQVksWUFBZCxFQUFaLEVBRHNCLENBQVQsQ0FBZDtBQUVDLElBRkQ7O0FBSUEsR0FORDtBQU9BLEVBUkQ7OztBQVdBQyxVQUFVLCtDQUFWLEVBQTJELFlBQU87QUFDakVDLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFbEMsT0FBSUcsT0FBTyxFQUFYO0FBQ0FBLFFBQU0sc0JBQVEsT0FBUixDQUFOLElBQTRCLEtBQTVCO0FBQ0FQLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxDQUFFSyxJQUFGLENBQVQsQ0FBZCxFQUFtQyxDQUFuQzs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7O0FBV0FKLFVBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2hDQyxLQUFJLHNCQUFKLEVBQTZCLFlBQU87O0FBRW5DSixVQUFPSyxLQUFQLENBQWNILFNBQWQsRUFBMEIsQ0FBMUI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENDLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFbENKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFULENBQWQsRUFBOEIsQ0FBOUI7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0FwRUQ7Ozs7QUF3RUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhcmtvdW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJhcmtvdW50L3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hcmtvdW50LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJhcmtvdW50XCI6IFwiYXJrb3VudFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiLi9hcmtvdW50LnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImFya291bnRcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gM1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgMSwgMiwgMyBdICksIDMgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgWyAxLCAyLCAzIF0sIFsgNCwgNSwgNiBdIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMlwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgWyAxLCAyLCAzIF0sIFsgNCwgNSwgNiBdIF0gKSwgMiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyB1bmRlZmluZWQsIHVuZGVmaW5lZCwgMTAgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyB1bmRlZmluZWQsIHVuZGVmaW5lZCwgMTAgXSApLCAxICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCB7ICduYW1lJzogJ3NpbXBsZScgfSBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDJcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIsIFwibmFtZVwiOiBcInNpbXBsZVwiIH0sXG5cdFx0XHRcdHsgXCJvcHRpb25cIjogeyBcIm1lcmNoYW50XCI6IFwiYml5YWhlcm9lc1wiIH0gfSBdICksXG5cdFx0XHRcdDIpO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IDEyMzQ1IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIGRhdGEgXSApLCAxICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAwXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoICksIDApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDBcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIF0gKSwgMCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuXG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
