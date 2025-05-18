// 文件名: replace-json.js
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建交互式终端接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('请将 JSON 文件拖拽到终端中，按回车确认：');

rl.on('line', (input) => {
  try {
    // 处理拖拽路径（去除首尾空格和引号）
    const filePath = input.trim().replace(/^["']|["']$/g, '');

    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf8');

    // 替换 home-test. 为 home.
    const modifiedContent = content.replace(/home-test\./g, 'home.');

    // 生成新文件名（原文件名 + _modified）
    const newFileName = path.basename(filePath, '.json') + '_modified.json';
    const outputPath = path.join(path.dirname(filePath), newFileName);

    // 写入新文件
    fs.writeFileSync(outputPath, modifiedContent, 'utf8');
    console.log(`✅ 替换完成！文件已保存至：${outputPath}`);

  } catch (err) {
    console.error('❌ 错误：', err.message);
  } finally {
    rl.close();
  }
});