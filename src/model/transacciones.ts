import {Schema, model} from 'mongoose'

export type tTransaccion = {
    _tipoTrans:string | null,
    _identificador:string  | null,
    _fecha: Date | null,
    _plazos: number | null,
    _precio:number | null,
    _pago:number | null,
}

const transaccionSchema = new Schema({
    _tipoTrans: {
        type: String,
        required: true,
        enum: ["Venta","Alquiler"],
    },
    _identificador:{
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
})

export const Transacciones = model('transacciones', transaccionSchema)