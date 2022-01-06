import {Schema, model} from 'mongoose'

export type tPropietario = {
    _DNI: string |  null,
    _nombre: string |  null,
    _apellidos: string |  null,
    _nacimento: Date |  null,
    _propiedades: Array<string> | null,
}

const propietarioSchema = new Schema({
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
})

export const Propietarios = model('propietarios', propietarioSchema)