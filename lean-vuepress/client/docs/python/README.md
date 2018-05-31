---
sidebar: auto
---
# python语言的优势

⑴ 作为初学python的科班出身的小白，python非常简单，非常适合人类阅读。阅读一个良好的Python程序就感觉像是在读英语一样，尽管这个英语的要求非常严格！Python的这种伪代码本质是它最大的优点之一。它使你能够专注于解决问题而不是去搞明白语言本身。

　　⑵易学。python虽然是用c语言写的，但是它摈弃了c中非常复杂的指针，简化了python的语法。

　　⑶Python是FLOSS（自由/开放源码软件）之一。简单地说，你可以自由地发布这个软件的拷贝、阅读它的源代码、对它做改动、把它的一部分用于新的自由软件中。Python希望看到一个更加优秀的人创造并经常改进。

　　⑷可移植性————由于它的开源本质，Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。如果你小心地避免使用依赖于系统的特性，那么你的所有Python程序无需修改就可以在下述任何平台上面运行。这些平台包括Linux、Windows、FreeBSD、Macintosh、Solaris、OS/2、Amiga、AROS、AS/400、BeOS、OS/390、z/OS、Palm OS、QNX、VMS、Psion、Acom RISC OS、VxWorks、PlayStation、Sharp Zaurus、Windows CE甚至还有PocketPC、Symbian以及Google基于linux开发的Android平台！

　　 ⑸在计算机内部，Python解释器把源代码转换成称为字节码的中间形式，然后再把它翻译成计算机使用的机器语言并运行。事实上，由于你不再需要担心如何编译程序，如何确保连接转载正确的库等等，所有这一切使得使用Python更加简单。由于你只需要把你的Python程序拷贝到另外一台计算机上，它就可以工作了，这也使得你的Python程序更加易于移植。

　　 ⑹Python既支持面向过程的函数编程也支持面向对象的抽象编程。在面向过程的语言中，程序是由过程或仅仅是可重用代码的函数构建起来的。在面向对象的语言中，程序是由数据和功能组合而成的对象构建起来的。与其他主要的语言如C++和Java相比，Python以一种非常强大又简单的方式实现面向对象编程。

　　 ⑺ 可扩展性和可嵌入性。如果你需要你的一段关键代码运行得更快或者希望某些算法不公开，你可以把你的部分程序用C或C++编写，然后在你的Python程序中使用它们。你可以把Python嵌入你的C/C++程序，从而向你的程序用户提供脚本功能。

　　⑻丰富的库。Python标准库确实很庞大。python有可定义的第三方库可以使用。它可以帮助你处理各种工作，包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV文件、密码系统、GUI（图形用户界面）、Tk和其他与系统有关的操作。记住，只要安装了Python，所有这些功能都是可用的。这被称作Python的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如wxPython、Twisted和Python图像库等等。

　　 ⑼ Python确实是一种十分精彩又强大的语言。它合理地结合了高性能与使得编写程序简单有趣的特色。

　　 ⑽规范的代码。Python采用强制缩进的方式使得代码具有极佳的可读性。

## Number类型

```python{1}
int(3.56)
long(3.2)
float(3)
str(342)
```
[运行](http://localhost:3000/demo)

## math、 cmath模块
```python{1}
import math
# dir(math)
['__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'copysign', 'cos', 'cosh', 'degrees', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'pi', 'pow', 'radians', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc']
```

## 随机函数
```python
import random
random.choice(range(10))
random() # [0,1)
lst = [1,3,5]
random.shuffle(lst) # 随机排列

```
## time 日期与时间

1. time.time() ` 时间戳`
2. time.localtime
3. time.strftime
4. time.strptime
5. time.mktime

```python
import time
ticks =time.time() # 时间戳
time.asctime([tupletime])

# 格式化成2016-03-20 11:45:39形式
print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) 

# 格式化成Sat Mar 28 22:24:24 2016形式
print time.strftime("%a %b %d %H:%M:%S %Y", time.localtime()) 
  
# 将格式字符串转换为时间戳
a = "Sat Mar 28 22:24:24 2016"
print time.mktime(time.strptime(a,"%a %b %d %H:%M:%S %Y"))
```

### 时间格式的含义
python中时间日期格式化符号：

%y 两位数的年份表示（00-99）

%Y 四位数的年份表示（000-9999）

%m 月份（01-12）

%d 月内中的一天（0-31）

%H 24小时制小时数（0-23）

%I 12小时制小时数（01-12）

%M 分钟数（00=59）

%S 秒（00-59）

%a 本地简化星期名称

%A 本地完整星期名称

%b 本地简化的月份名称

%B 本地完整的月份名称

%c 本地相应的日期表示和时间表示

%j 年内的一天（001-366）

%p 本地A.M.或P.M.的等价符

%U 一年中的星期数（00-53）星期天为星期的开始

%w 星期（0-6），星期天为星期的开始

%W 一年中的星期数（00-53）星期一为星期的开始

%x 本地相应的日期表示

%X 本地相应的时间表示

%Z 当前时区的名称

%% %号本身

## 函数调用

* 参数

```python
def printInfo (name='bowen', age=4):
	print('%s  %s'%(age, name))
printInfo(32)
```

* 匿名函数
		
		sum = lambda a,b:a+b

* 多个返回值

```python
def twoReturn (a, b):
	return a*3, b*2
c, d = twoReturn(2, 3)
```

## 模块

> 为了方便管理

```python
import support
from support import name1
from support import *
```
```python
test.py
package_runoob
|-- __init__.py
|-- runoob1.py
|-- runoob2.py
# 导入 Phone 包
from package_runoob.runoob1 import runoob1
from package_runoob.runoob2 import runoob2
 
runoob1()
runoob2()
```

## anaconda3 切换2.7&3.5版本

`anaconda3`

```bash{1}
source activate test_py3
which python
<!-- 安装包 -->
conda install beautifulsoup4
pip install beautifulsoup4
```

## BeautifulSoup

> 解析网页

```python
from bs4 import BeautifulSoup
from urllib import request

# soup = BeautifulSoup(open('https://www.baidu.com')) # 打开本地文件
resp = request.urlopen('http://www.baidu.com') # 打开网站
soup = BeautifulSoup(resp) # 可以指定解析器，默认是lxml

# alist = soup.find_all('a')
# alist = soup.find('a')

alist = soup.a
# 查询属性
for i in alist:
	print(i.text, i.attrs, i.get('id'), i.get('class'))
print(alist)
```

### 正则表达式，匹配多个节点

```python
alist = soup.find_all(re.compile('t')) # html& title 正则表达式
alist = soup.find_all(['a', '.title']) # 多个条件
alist = soup.find_all('a', class_="title") # 属性查询
alist = soup.find_all(text='意见反馈') # 属性查询
alist = soup.find_all(text='意见反馈', limit=3) # 限制个数
alist = soup.find_all(text='意见反馈', recursive=False) # 不变量子节点
alist = soup.find_all(True) # 匹配任何值，无字符串节点
	print(i.text, i.contents, i.children) # 兄弟父子节点
```

### select通过样式查找
alist = soup.select('p>.title>a[href]')

自定义过滤器

```python
def has_class_but_no_id(tag):
	return tag.has_attr('class') and not tag.has_attr('id')

soup.find_all(has_class_but_no_id)
```
## 简单下载

### 第一步url合法检验

```python
def RegularMatchUrl(url):
	url = re.sub('^//','http://',url, 1,re.I|re.M)
	pattern=re.match(r'(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?',url,re.IGNORECASE)
	if pattern:
		return True, url
	else:
		return False, url
```

### 下载图片

```python
def downFile(src, file, localPath='download/'):
	if not os.path.exists(localPath):  # 新建文件夹
		os.mkdir(localPath)
	with open(localPath + src, 'wb') as f:
		f.write(file)
```

### 便利查询

```python
def __main__(url):
	resp = request.urlopen(url)
	soup = BeautifulSoup(resp, 'lxml')

	alist = soup.find_all('img') # 属性查询
	print('图片个数:', len(alist))

	for i in alist:
		src = i.attrs.get('src')
		flag, src = RegularMatchUrl(src) # 生成正则
		originUrl = src
		if (not flag):
			print('url error:', src)
			continue
		else:
			print('download:', originUrl)
		# 打开图片网址
		try:
			response = request.urlopen(src)
		except urllib.error.HTTPError as e:
			print('code----', e.code)
		except urllib.error.URLError as e:
			print('reason----', e.reason)
		cat_img = response.read()
		# 拼接图片名称
		src = src.split('/')
		path = 'download/' + time.strftime("%Y-%m-%d %H:%M:%S/", time.localtime())
		downFile(src[-1], cat_img, path)
```

<comment commentIndex="python" />
