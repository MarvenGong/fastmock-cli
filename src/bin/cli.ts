#!/usr/bin/env node
import commander from 'commander';
import consola from 'consola';
import genTs from '../actions/gen-ts';
import ora from 'ora';
const { program } = commander;
(async function() {
  console.log('欢迎安装fastmock-cli工具')
  program.option('-V --version', '查看命令行版本号');
  // 生成ts类型声明命令
  program
    .command('gen-ts')
    .alias('gt')
    .description("根据项目录入的数据生成ts声明文件")
    .option('-T --token <char>', '项目访问秘钥')
    .option('-f --file <char>', '文件名')
    .action(genTs)
  program.parse();
})()
