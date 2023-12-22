#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const gen_ts_1 = __importDefault(require("../actions/gen-ts"));
const { program } = commander_1.default;
(async function () {
    console.log('欢迎安装fastmock-cli工具');
    program.option('-V --version', '查看命令行版本号');
    // 生成ts类型声明命令
    program
        .command('gen-ts')
        .alias('gt')
        .description("根据项目录入的数据生成ts声明文件")
        .option('-T --token <char>', '项目访问秘钥')
        .option('-f --file <char>', '文件名')
        .action(gen_ts_1.default);
    program.parse();
})();
