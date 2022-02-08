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
exports.eliminarPropd = exports.crearPropd = exports.buscarPropd = exports.listarCiu = exports.listarPropds = void 0;
const propiedades_1 = require("../model/propiedades");
const ciudades_1 = require("../model/ciudades");
const database_1 = require("../database/database");
const listarPropds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.listarPropds = listarPropds;
const listarCiu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield ciudades_1.Ciudades.find({});
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.listarCiu = listarCiu;
const buscarPropd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost } = req.params;
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
exports.buscarPropd = buscarPropd;
const crearPropd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipoObjeto, numero, calles, codpost, metrosc, preciom, propietario, edificable, agua, luz, lejania, antiguedad, numHab, numBa, garage, cocina } = req.body;
    let identificador = `C/ ${calles[0]} Nº ${numero}, ${codpost}`;
    let precioBase = Number(metrosc) * Number(preciom);
    yield database_1.db.conectarBD();
    if (tipoObjeto == "Solar") {
        const dSchema = {
            _identificador: identificador,
            _tipoObjeto: tipoObjeto,
            _numero: numero,
            _calles: Array(calles),
            _codpost: Number(codpost),
            _metrosc: Number(metrosc),
            _preciom: Number(preciom),
            _precioBase: Number(preciom * metrosc),
            _propietario: propietario,
            _edificable: Boolean(edificable),
            _agua: Boolean(agua),
            _luz: Boolean(luz),
            _lejania: Number(lejania)
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
    }
    else if (tipoObjeto == "Vivienda") {
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
            _antiguedad: new Date(antiguedad),
            _numHab: Number(numHab),
            _numBa: Number(numBa),
            _garage: Boolean(garage),
            _cocina: new Array(cocina)
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
    }
    yield database_1.db.desconectarBD();
});
exports.crearPropd = crearPropd;
const eliminarPropd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost } = req.params;
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
exports.eliminarPropd = eliminarPropd;
