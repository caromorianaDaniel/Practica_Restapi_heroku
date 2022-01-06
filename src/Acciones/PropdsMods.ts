import {Request, Response, Router } from 'express'
import { Propiedades, tPropiedad, tSolar, tVivienda } from '../model/propiedades'
import { db } from '../database/database'

export const modPropd_pre = async (req:Request, res:Response) => {
    const { numero,calle,codpost,preciom} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_preciom: preciom }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_agua = async (req:Request, res:Response) => {
    const { numero,calle,codpost,agua} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_agua: agua }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_luz = async (req:Request, res:Response) => {
    const { numero,calle,codpost,luz} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_luz: luz }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_edi = async (req:Request, res:Response) => {
    const { numero,calle,codpost,edificable} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_edificable: edificable }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_ant = async (req:Request, res:Response) => {
    const { numero,calle,codpost,antiguedad} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_edificable: antiguedad }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_nHa = async (req:Request, res:Response) => {
    const { numero,calle,codpost,numHab} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_numHab: numHab }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_nBa = async (req:Request, res:Response) => {
    const { numero,calle,codpost,numBa} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_numBa: numBa }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_gar = async (req:Request, res:Response) => {
    const { numero,calle,codpost,garage} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_garage: garage }
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}

export const modPropd_cocina = async (req:Request, res:Response) => {
    const { numero,calle,codpost,horno,microondas,lavavajillas,frigorifico} = req.body
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    await db.conectarBD()
    const query = await Propiedades.findOneAndUpdate(
        {_identificador: identificador},{_cocina:[
            horno,microondas,lavavajillas,frigorifico
        ]}
    )
    .then( (mensaje:any) => {
        console.log('Modificado Correctamente: '+ mensaje)
        res.json(mensaje)
    })
    .catch( (mensaje:any) => {
        console.log('Este es el req.body '+ req.body)
        console.log('Error: '+ mensaje)
        res.send('Error: '+ mensaje)
    }) 
    await db.desconectarBD()
}