"use strict";
// function greeter(person : string): string {
//     return 'Hello , ' + person;
// }
exports.__esModule = true;
var childSquare_1 = require("./childSquare");
var rectangle_1 = require("./rectangle");
// const user = 'hend';
// console.log(user);
//#region one
var r = new rectangle_1.Rectangle(2, 3);
console.log(r.CalcCircumference());
rectangle_1.Rectangle.WhoAmI();
var s = new childSquare_1.square(2);
s.CalcCircumference();
s.hight;
s.width;
childSquare_1.square.WhoAmI();
//#endregion
