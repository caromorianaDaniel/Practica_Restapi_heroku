import {Request, Response} from 'express'
import { Transacciones, tTransaccion } from '../model/transacciones'
import { db } from '../database/database'

export const listarTrans = async (req: Request, res: Response) => {
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Transacciones.find({})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}

export const buscarTran = async (req: Request, res: Response) => {
    const {identificador} = req.params
    //let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    //let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Transacciones.findOne({_identificador: identificador})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })
    db.desconectarBD()
}

export const crearTran = async (req: Request, res: Response) => {
    const { tipoTrans,DNIpropt,DNIproptN,numero,calle,codpost,fecha,plazos,precio } = req.body
    let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`
    let pago = Number(precio) / Number(plazos);
    await db.conectarBD()
    const dSchema: tTransaccion = {
        _tipoTrans: tipoTrans,
        _identificador: identificador,
        _fecha: new Date(fecha),
        _plazos: Number(plazos),
        _precio: Number(precio),
        _pago: pago,
    }
    const oSchema = new Transacciones(dSchema)
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

export const eliminarTran = async (req: Request, res: Response) => {
    const { DNIpropt,DNIproptN,numero,calle,codpost } = req.body
    let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`
    await db.conectarBD()
    .then( async (mensaje) => {
        console.log(mensaje)
        const query  = await Transacciones.findOneAndDelete({_identificador: identificador})
        res.json(query)
    })
    .catch((mensaje) => {
        res.send(mensaje)
    })

    db.desconectarBD()
}
