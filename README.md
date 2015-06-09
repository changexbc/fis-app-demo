# fis-app-demo
fis项目实例

###安装fis-hand
```bash
npm install -g fis-hand
```
###在该目录下执行sh脚本
```bash
hand server start
cd fis-app-demo 
sh local.sh
```
###在sh文件中配置发布选项
```bash
export cssprefixer=1
hand release -mpod ../fe
```
###项目打包部署完毕，查看fe文件夹
