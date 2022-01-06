"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propiedades = void 0;
const mongoose_1 = require("mongoose");
const propiedadSchema = new mongoose_1.Schema({
    _identificador: {
        type: String,
        unique: true,
        required: true,
    },
    _tipoObjeto: {
        type: String,
        required: true,
        enum: ["Solar", "Vivienda"],
    },
    _numero: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 3,
    },
    _calles: Array,
    _codpost: {
        type: Number,
        required: true,
        minLength: 5,
        maxLength: 5,
    },
    _metrosc: {
        type: Number,
        required: true,
    },
    _preciom: {
        type: Number,
        required: true,
    },
    _precioBase: Number,
    _propietario: {
        type: String,
        required: true,
    },
    _edificable: {
        type: Boolean,
        //required: true,
    },
    _agua: {
        type: Boolean,
        //required: true,
    },
    _luz: {
        type: Boolean,
        //required: true,
    },
    _lejania: {
        type: Number,
        //required: true,
    },
    _antiguedad: {
        type: Date,
        //required: true,
    },
    _numHab: {
        type: Number,
        //required: true,
    },
    _numBa: {
        type: Number,
        //required: true,
    },
    _garage: {
        type: Number,
        //required: true,
    },
    _cocina: Array
});
/*export type tComercio = {
    _tipoObjeto: string | null,
    _identificador: string | null
    _numero: string | null
    _calles: Array<string> | null
    _codpost: number | null
    _metrosc: number | null
    _preciom: number | null
    _precioBase: number | null
    _propietario: string | null
    _antiguedad: Date | null
    _tipo: string | null
    _licencias: Array<Object> | null

}*/
exports.Propiedades = (0, mongoose_1.model)('propiedades', propiedadSchema);
