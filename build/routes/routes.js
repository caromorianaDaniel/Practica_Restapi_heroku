"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const Propds_1 = require("../Acciones/Propds");
const PropdsMods_1 = require("../Acciones/PropdsMods");
const Propts_1 = require("../Acciones/Propts");
const Trans_1 = require("../Acciones/Trans");
class DatoRoutes {
    constructor() {
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        //Ver todos.
        this._router.get('/propiedades', Propds_1.listarPropds);
        this._router.get('/propietarios', Propts_1.listarPropts);
        this._router.get('/transacciones', Trans_1.listarTrans);
        this._router.get('/ciudades', Propds_1.listarCiu);
        //Filtrar.
        this._router.get('/propiedades/buscar/:calle/:numero/:codpost', Propds_1.buscarPropd);
        this._router.get('/propietarios/buscar/:DNI', Propts_1.buscarPropt);
        this._router.get('/transacciones/buscar/:identificador', Trans_1.buscarTran);
        //Crear.
        this._router.post('/propiedades/crear', Propds_1.crearPropd);
        this._router.post('/propietarios/crear', Propts_1.crearPropt);
        this._router.post('/transacciones/crear', Trans_1.crearTran);
        //Modificar propiedades.
        this._router.put('/propiedades/modificar/precio', PropdsMods_1.modPropd_pre);
        this._router.put('/propiedades/modificar/agua', PropdsMods_1.modPropd_agua);
        this._router.put('/propiedades/modificar/luz', PropdsMods_1.modPropd_luz);
        this._router.put('/propiedades/modificar/edificable', PropdsMods_1.modPropd_edi);
        this._router.put('/propiedades/modificar/antiguedad', PropdsMods_1.modPropd_ant);
        this._router.put('/propiedades/modificar/numHab', PropdsMods_1.modPropd_nHa);
        this._router.put('/propiedades/modificar/numBaños', PropdsMods_1.modPropd_nBa);
        this._router.put('/propiedades/modificar/garage', PropdsMods_1.modPropd_gar);
        this._router.put('/propiedades/modificar/cocina', PropdsMods_1.modPropd_cocina);
        //Eliminar
        this._router.delete('/propiedades/eliminar/', Propds_1.eliminarPropd);
        this._router.delete('/propietarios/eliminar/:DNI', Propts_1.eliminarPropt);
        this._router.delete('/transacciones/eliminar', Trans_1.eliminarTran);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
