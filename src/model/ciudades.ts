import {Schema, model} from 'mongoose'

export type tCiudad = {
    _nombre: string,
    _preciom: number,
    _codpost: number
}
const ciudadSchema = new Schema({
    _nombre: string,
    _preciom: number,
    _codpost: number
})

export const Ciudades = model('ciudades', ciudadSchema)
