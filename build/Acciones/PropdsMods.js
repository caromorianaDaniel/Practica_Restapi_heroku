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
exports.modPropd_cocina = exports.modPropd_gar = exports.modPropd_nBa = exports.modPropd_nHa = exports.modPropd_ant = exports.modPropd_edi = exports.modPropd_luz = exports.modPropd_agua = exports.modPropd_pre = void 0;
const propiedades_1 = require("../model/propiedades");
const database_1 = require("../database/database");
const modPropd_pre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, preciom } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
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
exports.modPropd_pre = modPropd_pre;
const modPropd_agua = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, agua } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _agua: agua })
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
exports.modPropd_agua = modPropd_agua;
const modPropd_luz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, luz } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _luz: luz })
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
exports.modPropd_luz = modPropd_luz;
const modPropd_edi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, edificable } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _edificable: edificable })
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
exports.modPropd_edi = modPropd_edi;
const modPropd_ant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, antiguedad } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _edificable: antiguedad })
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
exports.modPropd_ant = modPropd_ant;
const modPropd_nHa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, numHab } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _numHab: numHab })
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
exports.modPropd_nHa = modPropd_nHa;
const modPropd_nBa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, numBa } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _numBa: numBa })
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
exports.modPropd_nBa = modPropd_nBa;
const modPropd_gar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, garage } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _garage: garage })
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
exports.modPropd_gar = modPropd_gar;
const modPropd_cocina = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, calle, codpost, horno, microondas, lavavajillas, frigorifico } = req.body;
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    yield database_1.db.conectarBD();
    const query = yield propiedades_1.Propiedades.findOneAndUpdate({ _identificador: identificador }, { _cocina: [
            horno, microondas, lavavajillas, frigorifico
        ] })
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
exports.modPropd_cocina = modPropd_cocina;
