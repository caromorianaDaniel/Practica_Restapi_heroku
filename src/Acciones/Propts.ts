import {Request, Response, Router } from 'express'
import { Propietarios, tPropietario} from '../model/propietarios'
import { db } from '../database/database'

export const listarPropts = async (req: Request, res: Response) => {
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propietarios.find({})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}

export const buscarPropt = async (req: Request, res: Response) => {
    const { DNI } = req.params
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propietarios.findOne({_DNI: DNI})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })

    db.desconectarBD()
}

export const crearPropt = async (req: Request, res: Response) => {
    const { DNI,nombre,apellidos,nacimento,propiedades } = req.body
    await db.conectarBD()
    const dSchema: tPropietario = {
        _DNI: DNI,
        _nombre: nombre,
        _apellidos: apellidos,
        _nacimento: new Date(nacimento),
        _propiedades: new Array(propiedades),
    }
    const oSchema = new Propietarios(dSchema)
    await oSchema.save()
    .then( (mensaje:any) => {
        console.log('Salvado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Este es el dSchema '+ dSchema)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const eliminarPropt = async (req: Request, res: Response) => {
    const { DNI } = req.params
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propietarios.findOneAndDelete({_DNI: DNI})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })

    db.desconectarBD()
}