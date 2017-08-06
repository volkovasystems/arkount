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
*/var _symbol=require("babel-runtime/core-js/symbol");var _symbol2=_interopRequireDefault(_symbol);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var assert=require("should");



//: @client:
var arkount=require("./arkount.support.js");
//: @end-client






//: @client:
describe("arkount",function(){

describe("`arkount( [ 1, 2, 3 ] )`",function(){
it("should be equal to 3",function(){

assert.equal(arkount([1,2,3]),3);

});
});


describe("`arkount( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )`",function(){
it("should be equal to 2",function(){

assert.equal(arkount([[1,2,3],[4,5,6]]),2);

});
});


describe("`arkount( [ undefined, undefined, 10 ] )`",function(){
it("should be equal to 1",function(){

assert.equal(arkount([undefined,undefined,10]),1);

});
});


describe("`arkount( [ { 'hello': 'world' }, { 'name': 'simple' } ] )`",function(){
it("should be equal to 2",function(){

assert.equal(arkount([
{"hello":"world","name":"simple"},
{"option":{"merchant":"biyaheroes"}}]),
2);

});
});


describe("`arkount( [ { [ Symbol( 'hello' ) ]: 12345 } ] )`",function(){
it("should be equal to 1",function(){

var data={};
data[(0,_symbol2.default)("hello")]=12345;
assert.equal(arkount([data]),1);

});
});


describe("`arkount( )`",function(){
it("should be equal to 0",function(){

assert.equal(arkount(),0);

});
});


describe("`arkount( [ ] )`",function(){
it("should be equal to 0",function(){

assert.equal(arkount([]),0);

});
});

});



//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLEdBQU1BLFFBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxHQUFNQyxTQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBRSxTQUFVLFNBQVYsQ0FBcUIsVUFBTzs7QUFFM0JBLFNBQVUsMEJBQVYsQ0FBc0MsVUFBTztBQUM1Q0MsR0FBSSxzQkFBSixDQUE0QixVQUFPOztBQUVsQ0osT0FBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUUsQ0FBRixDQUFLLENBQUwsQ0FBUSxDQUFSLENBQVQsQ0FBZCxDQUFzQyxDQUF0Qzs7QUFFQSxDQUpEO0FBS0EsQ0FORDs7O0FBU0FDLFNBQVUsMkNBQVYsQ0FBdUQsVUFBTztBQUM3REMsR0FBSSxzQkFBSixDQUE0QixVQUFPOztBQUVsQ0osT0FBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUUsQ0FBRSxDQUFGLENBQUssQ0FBTCxDQUFRLENBQVIsQ0FBRixDQUFlLENBQUUsQ0FBRixDQUFLLENBQUwsQ0FBUSxDQUFSLENBQWYsQ0FBVCxDQUFkLENBQXVELENBQXZEOztBQUVBLENBSkQ7QUFLQSxDQU5EOzs7QUFTQUMsU0FBVSwyQ0FBVixDQUF1RCxVQUFPO0FBQzdEQyxHQUFJLHNCQUFKLENBQTRCLFVBQU87O0FBRWxDSixPQUFPSyxLQUFQLENBQWNILFFBQVMsQ0FBRUksU0FBRixDQUFhQSxTQUFiLENBQXdCLEVBQXhCLENBQVQsQ0FBZCxDQUF1RCxDQUF2RDs7QUFFQSxDQUpEO0FBS0EsQ0FORDs7O0FBU0FILFNBQVUsNkRBQVYsQ0FBeUUsVUFBTztBQUMvRUMsR0FBSSxzQkFBSixDQUE0QixVQUFPOztBQUVsQ0osT0FBT0ssS0FBUCxDQUFjSCxRQUFTO0FBQ3RCLENBQUUsUUFBUyxPQUFYLENBQW9CLE9BQVEsUUFBNUIsQ0FEc0I7QUFFdEIsQ0FBRSxTQUFVLENBQUUsV0FBWSxZQUFkLENBQVosQ0FGc0IsQ0FBVCxDQUFkO0FBR0ssQ0FITDs7QUFLQSxDQVBEO0FBUUEsQ0FURDs7O0FBWUFDLFNBQVUsbURBQVYsQ0FBK0QsVUFBTztBQUNyRUMsR0FBSSxzQkFBSixDQUE0QixVQUFPOztBQUVsQyxHQUFJRyxNQUFPLEVBQVg7QUFDQUEsS0FBTSxxQkFBUSxPQUFSLENBQU4sRUFBNEIsS0FBNUI7QUFDQVAsT0FBT0ssS0FBUCxDQUFjSCxRQUFTLENBQUVLLElBQUYsQ0FBVCxDQUFkLENBQW1DLENBQW5DOztBQUVBLENBTkQ7QUFPQSxDQVJEOzs7QUFXQUosU0FBVSxjQUFWLENBQTBCLFVBQU87QUFDaENDLEdBQUksc0JBQUosQ0FBNkIsVUFBTzs7QUFFbkNKLE9BQU9LLEtBQVAsQ0FBY0gsU0FBZCxDQUEwQixDQUExQjs7QUFFQSxDQUpEO0FBS0EsQ0FORDs7O0FBU0FDLFNBQVUsa0JBQVYsQ0FBOEIsVUFBTztBQUNwQ0MsR0FBSSxzQkFBSixDQUE0QixVQUFPOztBQUVsQ0osT0FBT0ssS0FBUCxDQUFjSCxRQUFTLEVBQVQsQ0FBZCxDQUE4QixDQUE5Qjs7QUFFQSxDQUpEO0FBS0EsQ0FORDs7QUFRQSxDQXJFRDs7OztBQXlFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImFya291bnRcIixcblx0XHRcdFwicGF0aFwiOiBcImFya291bnQvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Fya291bnQuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImFya291bnRcIjogXCJhcmtvdW50XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCIuL2Fya291bnQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwiYXJrb3VudFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAzXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyAxLCAyLCAzIF0gKSwgMyApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyBbIDEsIDIsIDMgXSwgWyA0LCA1LCA2IF0gXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAyXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggWyBbIDEsIDIsIDMgXSwgWyA0LCA1LCA2IF0gXSApLCAyICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBhcmtvdW50KCBbIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAxMCBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDFcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAxMCBdICksIDEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgeyAnaGVsbG8nOiAnd29ybGQnIH0sIHsgJ25hbWUnOiAnc2ltcGxlJyB9IF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMlwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFtcblx0XHRcdFx0eyBcImhlbGxvXCI6IFwid29ybGRcIiwgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSxcblx0XHRcdFx0eyBcIm9wdGlvblwiOiB7IFwibWVyY2hhbnRcIjogXCJiaXlhaGVyb2VzXCIgfSB9XG5cdFx0XHRdICksIDIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIFsgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IDEyMzQ1IH0gXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0ZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFya291bnQoIFsgZGF0YSBdICksIDEgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGFya291bnQoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDBcIiAsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggYXJrb3VudCggKSwgMCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgYXJrb3VudCggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDBcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIF0gKSwgMCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuXG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
