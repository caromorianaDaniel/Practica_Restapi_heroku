import {Request, Response, Router } from 'express'
import { Propiedades, tPropiedad, tSolar, tVivienda } from '../model/propiedades'
import { db } from '../database/database'

export const listarPropds = async (req: Request, res: Response) => {
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propiedades.find({})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}

export const buscarPropd = async (req: Request, res: Response) => {
    const { numero,calle,codpost } = req.params
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propiedades.findOne({_identificador: identificador})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}

export const crearPropd = async (req: Request, res: Response) => {
    const {
        tipoObjeto,numero,calles,codpost,metrosc,preciom,propietario,
        edificable,agua,luz,lejania,
        antiguedad,numHab,numBa,garage,cocina
    } = req.body
    let identificador = `C/ ${calles[0]} Nº ${numero}, ${codpost}`;
    let precioBase = Number(metrosc) * Number(preciom);
    await db.conectarBD()
    if(tipoObjeto == "Solar"){
        const dSchema: tSolar = {
            _identificador: identificador,
            _tipoObjeto: tipoObjeto,
            _numero: numero,
            _calles: Array(calles),
            _codpost: Number(codpost),
            _metrosc: Number(metrosc),
            _preciom: Number(preciom),
            _precioBase: Number(precioBase),
            _propietario: propietario,
            _edificable: Boolean(edificable),
            _agua: Boolean(agua),
            _luz: Boolean(luz),
            _lejania: Number(lejania)
        }
        const oSchema = new Propiedades(dSchema)
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
    } else if(tipoObjeto == "Vivienda"){
        const dSchema: tVivienda = {
            _identificador: identificador,
            _tipoObjeto: tipoObjeto,
            _numero: numero,
            _calles: Array(calles),
            _codpost: Number(codpost),
            _metrosc: Number(metrosc),
            _preciom: Number(preciom),
            _precioBase: Number(precioBase),
            _propietario: propietario,
            _antiguedad: new Date(antiguedad),
            _numHab: Number(numHab),
            _numBa: Number(numBa),
            _garage: Boolean(garage),
            _cocina: new Array(cocina)
        }
        const oSchema = new Propiedades(dSchema)
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
    await db.desconectarBD()
}

export const eliminarPropd = async (req: Request, res: Response) => {
    const { numero,calle,codpost } = req.parmas
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Propiedades.findOneAndDelete({_identificador: identificador})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}
