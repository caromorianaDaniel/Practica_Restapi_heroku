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
exports.eliminarProp = exports.modificarProp = exports.crearProp = exports.buscarProp = exports.listarProps = void 0;
const propiedades_1 = require("../model/propiedades");
const database_1 = require("../database/database");
const listarProps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propiedades_1.Propiedades.find({});
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.listarProps = listarProps;
const buscarProp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propiedades_1.Propiedades.findOne({ _identificador: identificador });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.buscarProp = buscarProp;
const crearProp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identificador, tipoObjeto, numero, calles, codpost, metrosc, preciom, precioBase, propietario, edificable, agua, luz, lejania, antiguedad, numHab, numBa, garage, horno, microondas, lavavajillas, frigorifico, cocina } = req.body;
    yield database_1.db.conectarBD();
    const dSchema = {
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
        _lejania: Number(lejania),
        _antiguedad: new Date(antiguedad),
        _numHab: Number(numHab),
        _numBa: Number(numBa),
        _garage: Boolean(garage),
        _horno: Boolean(horno),
        _microondas: Boolean(microondas),
        _lavavajillas: Boolean(lavavajillas),
        _frigorifico: Boolean(frigorifico),
        _cocina: Array(cocina)
    };
    const oSchema = new propiedades_1.Propiedades(dSchema);
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
exports.crearProp = crearProp;
const modificarProp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identificador, metrosc, preciom } = req.body;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _preciom: preciom })
        .then((mensaje) => {
        console.log('Modificado Correctamente: ' + mensaje);
        res.json(mensaje);
    })
        .catch((mensaje) => {
        console.log('Este es el req.body ' + req.body);
        console.log('Error: ' + mensaje);
        res.send('Error: ' + mensaje);
    });
    yield database_1.db.desconectarBD();
});
exports.modificarProp = modificarProp;
const eliminarProp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propiedades_1.Propiedades.findOneAndDelete({ _identificador: identificador });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.eliminarProp = eliminarProp;
