print('-----------------分割线')
from bs4 import BeautifulSoup
from urllib import request
import urllib.error
import urllib
import urllib3
import re
import os
import time

# soup = BeautifulSoup(open('https://www.baidu.com'))


# def has_class_but_no_id(tag):
# 	return tag.has_attr('class') and not tag.has_attr('id')

def RegularMatchUrl(url):
	url = re.sub('^//','http://',url, 1,re.I|re.M)
	pattern=re.match(r'(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?',url,re.IGNORECASE)
	if pattern:
		return True, url
	else:
		return False, url

def downFile(src, file, localPath='download/'):
	if not os.path.exists(localPath):  # 新建文件夹
		os.mkdir(localPath)
	with open(localPath + src, 'wb') as f:

		f.write(file)

def __main__(url):
	# data = {"name": "bowen"}
	data = urllib.parse.urlencode({"name": "bowen"})
	data = data.encode('utf-8')
	headers = {
		'Host': 'test.mp.koopoo.top',
		'Connection': 'keep-alive',
		'Content-Length': '0',
		'Accept': 'application/json, text/plain, */*',
		'Origin': 'https://test.mp.koopoo.top',
		'X-Token': 'asdfsa23242342342',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
		'Referer': 'https://test.mp.koopoo.top/oss-frontend/dist/index.html',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
		'Cookie': 'JSESSIONID=C0063A17191CB00B4467C0C836D22952; Hm_lvt_4b7bdd23dce7e662415948bdad894378=1525937220,1526001820; Admin-Token=asdfsa23242342342'
	}
	# req = urllib.request.Request(url,data,headers)
	req = urllib.request.Request(url=url)
	# req = urllib.request.Request(url=url,data=data,headers=headers)
	resp = request.urlopen(req)
	soup = BeautifulSoup(resp, 'lxml')

	alist = soup.find_all('img') # 属性查询
	print('图片个数:', len(alist))
	if len(alist)<10:
		print(soup)
	path = 'download/' + time.strftime("%Y-%m-%d %H:%M:%S/", time.localtime())
	index=0

	for i in alist:
		src = i.attrs.get('src')
		flag, src = RegularMatchUrl(src) # 生成正则
		originUrl = src
		if (not flag):
			print('url error:', src)
			continue
		
		# 打开图片网址
		response = request.urlopen(src)

		if response.info().get('Content-Length')==None:
			continue
		imgSize = int(response.info().get('Content-Length'))
		if imgSize<10000:
			print('小图片:', imgSize, 'b')
			continue
		else:
			print('download:', originUrl)
		index +=1

		img_file = response.read()
		# 拼接图片名称
		src = src.split('/')
		src = src[-1]
		if len(src)>10:
			src = src[-10:]
		downFile(str(index)+ '_' + src, img_file, path)


# __main__('https://test.mp.koopoo.top/oss-frontend/dist/index.html#/product/list')
__main__('https://tieba.baidu.com/p/2460150866?pn=1')
for i in range(1000,1003):
	# __main__('http://jandan.net/ooxx/page-'+str(i)+'#comments')
	# __main__('https://tieba.baidu.com/p/2460150866?pn='+str(i))
	pass
