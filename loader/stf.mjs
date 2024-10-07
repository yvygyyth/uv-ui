import svgtofont from 'svgtofont';
import path from 'path';
console.log('loader运行');
svgtofont({
  src: path.resolve(process.cwd(), './static/iconFont/svgs'), // SVG 文件所在目录
  dist: path.resolve(process.cwd(), './static/iconFont'), // 输出目录
  fontName: 'yy-icon', // 字体名称
  css: true,  // 生成 CSS 文件
  // 不设置 html: true 生成 HTML 文件
  types: ['svg', 'ttf', 'woff', 'woff2'],  // 生成不同格式的字体
}).then(() => {
  console.log('SVG 图标转换完成！');
});
