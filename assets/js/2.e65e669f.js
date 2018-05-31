(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{91:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),this._m(1),this._m(2),this._m(3),s("comment",{attrs:{commentIndex:"shell"}})],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"shell-发布vuepress应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-发布vuepress应用","aria-hidden":"true"}},[this._v("#")]),this._v(" shell 发布vuepress应用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" begin python shell-------分割线\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" client\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 导航到构建输出目录")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/\n"),a("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -rf lean-vuepress/client/docs/dist/* ./\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init path:-------\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 推到你仓库的的 gh-page 分支")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 将 <USERNAME>/<REPO> 替换为你的信息")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f https://github.com/BowenTH/BowenTH.github.io.git master\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("exit")]),t._v(" 0\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"通过选择进入不同的文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过选择进入不同的文件夹","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过选择进入不同的文件夹")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("  \n"),a("span",{attrs:{class:"token comment"}},[t._v("#-----------------------------------------------------------  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#文件名称：where_to_go  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#作    用：跳转到相关目录  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#备    注：执行时用 . where_to_go   ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#----------------------------------------------------------  ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 打印当前目录路径  ")]),t._v("\nCUR_DIR"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$(")]),a("span",{attrs:{class:"token function"}},[t._v("pwd")]),a("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v("  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" -e "),a("span",{attrs:{class:"token string"}},[t._v('"The current path is : \\n \\033[36m '),a("span",{attrs:{class:"token variable"}},[t._v("$CUR_DIR")]),t._v(' \\033[0m "')]),t._v("  \n"),a("span",{attrs:{class:"token comment"}},[t._v("#选择要跳转的路径  ")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"where do you want to go?"')]),t._v("  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" -e "),a("span",{attrs:{class:"token string"}},[t._v('"1:vmShare\\n2 : home\\n3 : source\\n4 : binary\\n5 : build"')]),t._v("  \n  \n"),a("span",{attrs:{class:"token function"}},[t._v("read")]),t._v(" -p "),a("span",{attrs:{class:"token string"}},[t._v('"input the number:"')]),t._v(" WH  \n  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token variable"}},[t._v("$WH")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 跳转到以下目录共享目录下  ")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /mnt/hgfs/0_VMwareShare/  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token variable"}},[t._v("$WH")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 跳转到$HOME根目录下  ")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token variable"}},[t._v("$WH")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"3"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 跳转到$HOME/SBC8600/AM335X_StarterWare_02_00_00_06/examples/sbc8600/  ")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/SBC8600/AM335X_StarterWare_02_00_00_06/examples/sbc8600/  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token variable"}},[t._v("$WH")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"4"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n    "),a("span",{attrs:{class:"token comment"}},[t._v("# 跳转到$HOME/SBC8600/AM335X_StarterWare_02_00_00_06/binary/armv7a/gcc/am335x/sbc8600/  ")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/SBC8600/AM335X_StarterWare_02_00_00_06/binary/armv7a/gcc/am335x/sbc8600/  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token variable"}},[t._v("$WH")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"5"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("  \n    "),a("span",{attrs:{class:"token comment"}},[t._v("#跳转到 $HOME/SBC8600/AM335X_StarterWare_02_00_00_06/build/armv7a/gcc/am335x/sbc8600  ")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/SBC8600/AM335X_StarterWare_02_00_00_06/build/armv7a/gcc/am335x/sbc8600/  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("  \n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Ther is no document path"')]),t._v("  \n"),a("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v(" \n")])])}],!1,null,null,null);s.default=e.exports}}]);