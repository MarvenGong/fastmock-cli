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
    const ans = await consola_1.default.prompt('输入名称', {
        type: 'text'
    });
    const ans2 = await consola_1.default.prompt('选择版本', {
        type: 'select',
        options: ['ts', 'd.ts']
    });
    const ans3 = await consola_1.default.prompt('选择类型', {
        type: 'multiselect',
        options: ['1', '2', '3']
    });
    consola_1.default.info(confirm, ans, ans2, ans3);
};
