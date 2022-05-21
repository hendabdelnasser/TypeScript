"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.square = void 0;
var rectangle_1 = require("./rectangle");
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(hight) {
        hight = hight;
        return _super.call(this, 2, 5) || this;
    }
    square.WhoAmI = function () {
        console.log("I am square");
    };
    return square;
}(rectangle_1.Rectangle));
exports.square = square;
