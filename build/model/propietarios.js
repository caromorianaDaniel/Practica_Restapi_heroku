"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propietarios = void 0;
const mongoose_1 = require("mongoose");
const propietarioSchema = new mongoose_1.Schema({
    _DNI: {
        type: String,
        unique: true,
        required: true,
    },
    _nombre: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30,
    },
    _apellidos: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
    },
    _nacimento: {
        type: Date,
        required: true,
    },
    _propiedades: Array,
});
exports.Propietarios = (0, mongoose_1.model)('propietarios', propietarioSchema);
