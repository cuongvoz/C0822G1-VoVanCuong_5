"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const shape_1 = require("./shape");
class Shape extends shape_1.Shape {
    constructor(x, y, _width, _height) {
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    area() {
        return this._width * this._height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=shape.js.map