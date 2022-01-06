"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transacciones = void 0;
const mongoose_1 = require("mongoose");
const transaccionSchema = new mongoose_1.Schema({
    _tipoTrans: {
        type: String,
        required: true,
        enum: ["Venta", "Alquiler"],
    },
    _identificador: {
        type: String,
        unique: true,
    },
    _fecha: {
        type: Date,
        required: true,
    },
    _plazos: {
        type: Number,
        required: true,
    },
    _precio: {
        type: Number,
        required: true,
    },
    _pago: Number,
});
exports.Transacciones = (0, mongoose_1.model)('transacciones', transaccionSchema);
