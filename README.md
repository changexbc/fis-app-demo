# fis-app-demo
fis项目实例

###安装fis-hand
```bash
npm install -g fis-hand
```
###在该目录下执行local.sh脚本，预览项目
```bash
hand server start
cd fis-app-demo 
sh local.sh
```
###开发完毕后，在online.sh文件中配置发布选项
```bash
export cssprefixer=1
hand release -mpod ../fe
```
###执行online.sh脚本项目，打包部署完毕，查看fe文件夹
```bash
sh online.sh
```
