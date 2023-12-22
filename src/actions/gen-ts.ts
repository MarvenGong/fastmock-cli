import consola from "consola";
import ora from 'ora';

export default async (argument, options, program) => {
  // program.option('-V --version', '查看版本号');
  // 如果是`list`选项，则进行处理
  console.log(argument);
  if (options.list) {
      console.log('list选项');
  }
  const confirm = await consola.prompt('是否继续', {
    type: 'confirm'
  });
  const ans = await consola.prompt('输入名称', {
    type: 'text'
  });
  const ans2 = await consola.prompt('选择版本', {
    type: 'select',
    options: ['ts', 'd.ts']
  });
  const ans3 = await consola.prompt('选择类型', {
    type: 'multiselect',
    options: ['1', '2', '3']
  });
  consola.info(confirm, ans, ans2, ans3);
  
}