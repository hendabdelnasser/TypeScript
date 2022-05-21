"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, hight) {
        this.width = width;
        this.hight = hight;
    }
    Rectangle.prototype.CalcCircumference = function () {
        return (this.width + this.hight) * 2;
    };
    Rectangle.WhoAmI = function () {
        console.log('I am rectangle');
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
