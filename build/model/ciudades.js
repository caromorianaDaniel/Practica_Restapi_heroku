"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciudades = void 0;
const mongoose_1 = require("mongoose");
const ciudadSchema = new mongoose_1.Schema({
    _nombre: String,
    _preciom: Number,
    _codpost: Number
});
exports.Ciudades = (0, mongoose_1.model)('ciudades', ciudadSchema);
