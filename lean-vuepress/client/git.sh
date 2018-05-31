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