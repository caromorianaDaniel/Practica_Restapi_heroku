import {Schema, model} from 'mongoose'

export type tPropiedad = {
    _identificador: string
    _tipoObjeto: string
    _numero: string
    _calles: Array<string>
    _codpost: number
    _metrosc: number
    _preciom: number
    _precioBase: number
    _propietario: string
    _edificable: boolean
    _agua: boolean
    _luz: boolean
    _lejania: number
    _antiguedad: Date
    _numHab: number
    _numBa: number
    _garage: boolean
    _horno: boolean
    _microondas: boolean
    _lavavajillas: boolean
    _frigorifico: boolean
    _cocina: Array<boolean>

}
const propiedadSchema = new Schema({
    _identificador:{
        type: String,
        unique: true,
        required: true,
    },
    _tipo: {
        type: String,
        required: true,
        enum: ["Solar","Vivienda"],
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
})

export type tSolar = {
    _tipo: string | null,
    _identificador: string | null
    _numero: string | null
    _calles: Array<string> | null
    _codpost: number | null
    _metrosc: number | null
    _preciom: number | null
    _precioBase: number | null
    _propietario: string | null
    _edificable: boolean | null
    _agua: boolean | null
    _luz: boolean | null
    _lejania: number | null
}

export type tVivienda = {
    _tipo: string | null,
    _identificador: string | null
    _numero: string | null
    _calles: Array<string> | null
    _codpost: number | null
    _metrosc: number | null
    _preciom: number | null
    _precioBase: number | null
    _propietario: string | null
    _antiguedad: Date | null
    _numHab: number | null
    _numBa: number | null
    _garage: boolean | null
    _cocina: Array<boolean> | null
}

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

export const Propiedades = model('propiedades', propiedadSchema)