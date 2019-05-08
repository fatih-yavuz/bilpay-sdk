"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("./Transaction"));
var Bilpay_1 = __importDefault(require("./Bilpay"));
window.Bilpay = Bilpay_1.default;
window.Transaction = Transaction_1.default;
exports.default = {};
//# sourceMappingURL=index.js.map