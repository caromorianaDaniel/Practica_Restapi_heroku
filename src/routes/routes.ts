import {Request, Response, Router } from 'express'
import { listarPropds, buscarPropd, crearPropd, eliminarPropd } from '../Acciones/Propds'
import {modPropd_pre,modPropd_agua,modPropd_luz,modPropd_edi,modPropd_ant,modPropd_nHa,
    modPropd_nBa,modPropd_gar,modPropd_cocina} from '../Acciones/PropdsMods'
import { listarPropts, buscarPropt, crearPropt, eliminarPropt } from '../Acciones/Propts'
import { listarTrans, buscarTran, crearTran, eliminarTran } from '../Acciones/Trans'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }

    misRutas(){
        //Ver todos.
        this._router.get('/propiedades', listarPropds)
        this._router.get('/propietarios', listarPropts)
        this._router.get('/transacciones', listarTrans)
        this._router.get('/ciudades', listarCiu)
        //Filtrar.
        this._router.get('/propiedades/buscar/:calle/:numero/:codpost', buscarPropd)
        this._router.get('/propietarios/buscar/:DNI', buscarPropt)
        this._router.get('/transacciones/buscar/:identificador', buscarTran)
        //Crear.
        this._router.post('/propiedades/crear', crearPropd)
        this._router.post('/propietarios/crear', crearPropt)
        this._router.post('/transacciones/crear', crearTran)
        //Modificar propiedades.
        this._router.put('/propiedades/modificar/precio', modPropd_pre)
        this._router.put('/propiedades/modificar/agua', modPropd_agua)
        this._router.put('/propiedades/modificar/luz', modPropd_luz)
        this._router.put('/propiedades/modificar/edificable', modPropd_edi)
        this._router.put('/propiedades/modificar/antiguedad', modPropd_ant)
        this._router.put('/propiedades/modificar/numHab', modPropd_nHa)
        this._router.put('/propiedades/modificar/numBaños', modPropd_nBa)
        this._router.put('/propiedades/modificar/garage', modPropd_gar)
        this._router.put('/propiedades/modificar/cocina', modPropd_cocina)
        //Eliminar
        this._router.delete('/propiedades/eliminar', eliminarPropd)
        this._router.delete('/propietarios/eliminar/:DNI', eliminarPropt)
        this._router.delete('/transacciones/eliminar', eliminarTran)
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
