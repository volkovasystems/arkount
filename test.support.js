"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var assert = require("assert");
var arkount = require("./arkount.js");

assert.equal(arkount([1, 2, 3]), 3, "should return 3");

assert.equal(arkount([[1, 2, 3], [4, 5, 6]]), 2, "should return 2");

var array = [];
array[1000] = 10;
assert.equal(arkount(array), 1, "should return 1");

assert.equal(arkount([{ "hello": "world", "name": "simple" },
{ "option": { "merchant": "biyaheroes" } }]),
2, "should return 2");

var data = {};
data[(0, _symbol2.default)("hello")] = 12345;
assert.equal(arkount([data]), 1, "should return 1");

assert.equal(arkount(), 0, "should return 0");

assert.equal(arkount([]), 0, "should return 0");

console.log("ok");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImVxdWFsIiwiYXJyYXkiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IitNQUFBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxjQUFULENBQWhCOztBQUVBRCxPQUFPRyxLQUFQLENBQWNELFFBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBVCxDQUFkLEVBQXNDLENBQXRDLEVBQXlDLGlCQUF6Qzs7QUFFQUYsT0FBT0csS0FBUCxDQUFjRCxRQUFTLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBRixFQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWYsQ0FBVCxDQUFkLEVBQXVELENBQXZELEVBQTBELGlCQUExRDs7QUFFQSxJQUFJRSxRQUFRLEVBQVo7QUFDQUEsTUFBTyxJQUFQLElBQWdCLEVBQWhCO0FBQ0FKLE9BQU9HLEtBQVAsQ0FBY0QsUUFBU0UsS0FBVCxDQUFkLEVBQWdDLENBQWhDLEVBQW1DLGlCQUFuQzs7QUFFQUosT0FBT0csS0FBUCxDQUFjRCxRQUFTLENBQUUsRUFBRSxTQUFTLE9BQVgsRUFBb0IsUUFBUSxRQUE1QixFQUFGO0FBQ25CLEVBQUUsVUFBVSxFQUFFLFlBQVksWUFBZCxFQUFaLEVBRG1CLENBQVQsQ0FBZDtBQUVJLENBRkosRUFFTyxpQkFGUDs7QUFJQSxJQUFJRyxPQUFPLEVBQVg7QUFDQUEsS0FBTSxzQkFBUSxPQUFSLENBQU4sSUFBNEIsS0FBNUI7QUFDQUwsT0FBT0csS0FBUCxDQUFjRCxRQUFTLENBQUVHLElBQUYsQ0FBVCxDQUFkLEVBQW1DLENBQW5DLEVBQXNDLGlCQUF0Qzs7QUFFQUwsT0FBT0csS0FBUCxDQUFjRCxTQUFkLEVBQTBCLENBQTFCLEVBQTZCLGlCQUE3Qjs7QUFFQUYsT0FBT0csS0FBUCxDQUFjRCxRQUFTLEVBQVQsQ0FBZCxFQUE4QixDQUE5QixFQUFpQyxpQkFBakM7O0FBRUFJLFFBQVFDLEdBQVIsQ0FBYSxJQUFiIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiLi9hcmtvdW50LmpzXCIgKTtcclxuXHJcbmFzc2VydC5lcXVhbCggYXJrb3VudCggWyAxLCAyLCAzIF0gKSwgMywgXCJzaG91bGQgcmV0dXJuIDNcIiApO1xyXG5cclxuYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIFsgMSwgMiwgMyBdLCBbIDQsIDUsIDYgXSBdICksIDIsIFwic2hvdWxkIHJldHVybiAyXCIgKTtcclxuXHJcbmxldCBhcnJheSA9IFsgXTtcclxuYXJyYXlbIDEwMDAgXSA9IDEwO1xyXG5hc3NlcnQuZXF1YWwoIGFya291bnQoIGFycmF5ICksIDEsIFwic2hvdWxkIHJldHVybiAxXCIgKTtcclxuXHJcbmFzc2VydC5lcXVhbCggYXJrb3VudCggWyB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiLCBcIm5hbWVcIjogXCJzaW1wbGVcIiB9LFxyXG5cdFx0XHRcdHsgXCJvcHRpb25cIjogeyBcIm1lcmNoYW50XCI6IFwiYml5YWhlcm9lc1wiIH0gfSBdICksXHJcblx0XHRcdFx0MiwgXCJzaG91bGQgcmV0dXJuIDJcIiApO1xyXG5cclxubGV0IGRhdGEgPSB7IH07XHJcbmRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xyXG5hc3NlcnQuZXF1YWwoIGFya291bnQoIFsgZGF0YSBdICksIDEsIFwic2hvdWxkIHJldHVybiAxXCIgKTtcclxuXHJcbmFzc2VydC5lcXVhbCggYXJrb3VudCggKSwgMCwgXCJzaG91bGQgcmV0dXJuIDBcIiApO1xyXG5cclxuYXNzZXJ0LmVxdWFsKCBhcmtvdW50KCBbIF0gKSwgMCwgXCJzaG91bGQgcmV0dXJuIDBcIiApO1xyXG5cclxuY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.support.js.map