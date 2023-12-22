"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consola_1 = __importDefault(require("consola"));
exports.default = async (argument, options, program) => {
    // program.option('-V --version', '查看版本号');
    // 如果是`list`选项，则进行处理
    console.log(argument);
    if (options.list) {
        console.log('list选项');
    }
    const confirm = await consola_1.default.prompt('是否继续', {
        type: 'confirm'
    });
    consola_1.default.info('是的', confirm);
};
