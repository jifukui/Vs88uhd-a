const path=require("path");
const fs=require("fs");
const uglify=require("uglify-js");
const builds=[
    "main.js",
    "init.js",
    "routing.js",
    "utils.js",
    "mobile_touch.js"
]
if (!fs.existsSync('dist')) 
{
  fs.mkdirSync('dist')
}
const srcPath=path.resolve(__dirname,"../src");
const dimPath=path.resolve(__dirname,"../dist");
const config={
  warnings:{},
  parse:{},
  compress:{},
  mangle:{},
  output:{},
  sourceMap:{},
  nameCache:false,
  toplevel:false,
  ie8:false
}
//console.log(fs.readdirSync(srcPath));
let files=fs.readdirSync(srcPath);
const expect=[
  "code",
  "boot_log.log",
  "README.md",
  "LICENSE"
]
function buildFile(data){
  files=files.map((value)=>{
    for(let i=0;i<data.length;i++)
    {
      if(value===data[i])
      {
        return false;
      }
    }
    return value;
  })
}
function CompressFile(value)
{
  for(let i=0;i<value.length;i++)
  {
    console.log("压缩文件"+value[i]);
    let code=fs.readFileSync(path.resolve(srcPath,value[i]),"utf-8");
    fs.writeFileSync(path.resolve(dimPath,value[i]),uglify.minify(code,config).code);
  }
}
function CopyFile(value)
{
  for(let i=0;i<value.length;i++)
  {
    if(value[i])
    {
      console.log("拷贝文件"+value[i]);
      fs.copyFileSync(path.resolve(srcPath,value[i]),path.resolve(dimPath,value[i]));
    }
  }
}
function Build()
{
  /**清除不相关的文件 */
  buildFile(expect);
  console.log(files);
  /**清除需要进行压缩的文件 */
  buildFile(builds);
  console.log(files);
  console.log("开始进行文件压缩");
  CompressFile(builds);
  console.log("开始进行文件的拷贝");
  CopyFile(files);
  console.log("项目构建结束");
}
Build();