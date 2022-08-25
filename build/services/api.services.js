"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeliveryEntries = void 0;
const delivery_json_1 = __importDefault(require("./delivery.json"));
const deliveries = delivery_json_1.default;
const getDeliveryEntries = () => deliveries;
exports.getDeliveryEntries = getDeliveryEntries;
