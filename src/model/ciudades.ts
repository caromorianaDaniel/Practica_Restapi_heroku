import {Schema, model} from 'mongoose'

export type tCiudad = {
    _nombre: string,
    _preciom: number,
    _codpost: number
}
const ciudadSchema = new Schema({
    _nombre: String,
    _preciom: Number,
    _codpost: Number
})

export const Ciudades = model('ciudades', ciudadSchema)
