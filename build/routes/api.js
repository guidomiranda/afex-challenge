"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import {getDeliveryEntries} from '../services/api.services';
const app = (0, express_1.default)();
app.get('hola', (_req, res) => {
    res.json('chau');
});
// app.get('/deliveries', (_req, res) => {
//   res.json(getDeliveryEntries);
// });
