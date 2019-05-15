---
sidebar: auto
pageClass: custom-page-class
# layout: Commit
# prev: /
next: /
---

::: tip
可以用来检查一个`字符串`是否含有某种子串、将匹配的子串替换或者从某个串中取出符合某个条件的子串等。
* [简介链接](https://www.runoob.com/regexp/regexp-syntax.html)
* [在线工具](https://c.runoob.com/front-end/854)
:::

## 匹配字符

|字符|含义|
|--|:--|
|\s `|` \S|空格 `|` 非空格|
|$| 开始 |
|^|结束|
|()|匹配子串`不能携带g参数`|
|*|匹配0或多次|
|+|至少一次|
|?|最多一次|
|.|代表除换行外的任意字符|
|{}|限定个数`{5} {5,10} {5,}`|
|[]|罗列匹配范围`[0-9][a-z][A-Z] [^xyz] [ \f\r\t\n]`[\u4e00-\u9fa5]|
|\w `|` \W| 合法字符 `|` 非法字符|
|\b|单词边界|

## 常见表达式

[常见表达式](https://c.runoob.com/front-end/854)


<Comments />
