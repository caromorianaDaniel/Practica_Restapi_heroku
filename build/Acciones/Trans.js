"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTran = exports.crearTran = exports.buscarTran = exports.listarTrans = void 0;
const transacciones_1 = require("../model/transacciones");
const database_1 = require("../database/database");
const listarTrans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield transacciones_1.Transacciones.find({});
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.listarTrans = listarTrans;
const buscarTran = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { DNIpropt, DNIproptN, numero, calle, codpost } = req.body;
    let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield transacciones_1.Transacciones.findOne({ _identificador: identificador });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.buscarTran = buscarTran;
const crearTran = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipoTrans, DNIpropt, DNIproptN, numero, calle, codpost, fecha, plazos, precio } = req.body;
    let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`;
    let pago = Number(precio) / Number(plazos);
    yield database_1.db.conectarBD();
    const dSchema = {
        _tipoTrans: tipoTrans,
        _identificador: identificador,
        _fecha: new Date(fecha),
        _plazos: Number(plazos),
        _precio: Number(precio),
        _pago: pago,
    };
    const oSchema = new transacciones_1.Transacciones(dSchema);
    yield oSchema.save()
        .then((mensaje) => {
        console.log('Salvado Correctamente: ' + mensaje);
        res.json(mensaje);
    })
        .catch((mensaje) => {
        console.log('Este es el req.body ' + req.body);
        console.log('Este es el dSchema ' + dSchema);
        console.log('Error: ' + mensaje);
        res.send('Error: ' + mensaje);
    });
    yield database_1.db.desconectarBD();
});
exports.crearTran = crearTran;
const eliminarTran = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { DNIpropt, DNIproptN, numero, calle, codpost } = req.body;
    let idpropd = `C/ ${calle} Nº ${numero}, ${codpost}`;
    let identificador = `V: ${DNIpropt}, C: ${DNIproptN}, Prop: ${idpropd}.`;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield transacciones_1.Transacciones.findOneAndDelete({ _identificador: identificador });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.eliminarTran = eliminarTran;
