---
sidebar: auto
---
## shell 发布vuepress应用

```bash
#!/bin/bash
echo begin python shell-------分割线
cd client
# 构建
npm run docs:build

# 导航到构建输出目录
cd ../../
cp -rf lean-vuepress/client/docs/dist/* ./
echo git init path:-------
git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f https://github.com/BowenTH/BowenTH.github.io.git master

exit 0
```

## 通过选择进入不同的文件夹

```bash
#!/bin/bash  
#-----------------------------------------------------------  
#文件名称：where_to_go  
#  
#作    用：跳转到相关目录  
#  
#备    注：执行时用 . where_to_go   
#----------------------------------------------------------  
# 打印当前目录路径  
CUR_DIR=$(pwd)  
echo -e "The current path is : \n \033[36m $CUR_DIR \033[0m "  
#选择要跳转的路径  
echo "where do you want to go?"  
echo -e "1:vmShare\n2 : home\n3 : source\n4 : binary\n5 : build"  
  
read -p "input the number:" WH  
  
if [ "$WH" == "1" ]; then  
    # 跳转到以下目录共享目录下  
    cd /mnt/hgfs/0_VMwareShare/  
elif [ "$WH" == "2" ]; then  
    # 跳转到$HOME根目录下  
    cd $HOME/  
elif [ "$WH" == "3" ]; then  
    # 跳转到$HOME/SBC8600/AM335X_StarterWare_02_00_00_06/examples/sbc8600/  
    cd $HOME/SBC8600/AM335X_StarterWare_02_00_00_06/examples/sbc8600/  
elif [ "$WH" == "4" ]; then  
    # 跳转到$HOME/SBC8600/AM335X_StarterWare_02_00_00_06/binary/armv7a/gcc/am335x/sbc8600/  
    cd $HOME/SBC8600/AM335X_StarterWare_02_00_00_06/binary/armv7a/gcc/am335x/sbc8600/  
elif [ "$WH" == "5" ]; then  
    #跳转到 $HOME/SBC8600/AM335X_StarterWare_02_00_00_06/build/armv7a/gcc/am335x/sbc8600  
    cd $HOME/SBC8600/AM335X_StarterWare_02_00_00_06/build/armv7a/gcc/am335x/sbc8600/  
else  
   echo "Ther is no document path"  
fi 
```

<comment commentIndex="shell" />
