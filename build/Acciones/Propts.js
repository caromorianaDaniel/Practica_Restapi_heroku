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
exports.eliminarPropt = exports.crearPropt = exports.buscarPropt = exports.listarPropts = void 0;
const propietarios_1 = require("../model/propietarios");
const database_1 = require("../database/database");
const listarPropts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propietarios_1.Propietarios.find({});
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.listarPropts = listarPropts;
const buscarPropt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { DNI } = req.params;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propietarios_1.Propietarios.findOne({ _DNI: DNI });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.buscarPropt = buscarPropt;
const crearPropt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { DNI, nombre, apellidos, nacimento, propiedades } = req.body;
    yield database_1.db.conectarBD();
    const dSchema = {
        _DNI: DNI,
        _nombre: nombre,
        _apellidos: apellidos,
        _nacimento: new Date(nacimento),
        _propiedades: new Array(propiedades),
    };
    const oSchema = new propietarios_1.Propietarios(dSchema);
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
exports.crearPropt = crearPropt;
const eliminarPropt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { DNI } = req.params;
    yield database_1.db.conectarBD()
        .then((mensaje) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(mensaje);
        const query = yield propietarios_1.Propietarios.findOneAndDelete({ _DNI: DNI });
        res.json(query);
    }))
        .catch((mensaje) => {
        res.send(mensaje);
    });
    database_1.db.desconectarBD();
});
exports.eliminarPropt = eliminarPropt;
