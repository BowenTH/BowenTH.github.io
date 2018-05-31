---
meta:
  - name: description
    content: hello
  - name: search
    content: 23232
---
# 📒

## Flask - request操作

### 返回值

```python
from flask import jsonify
t = { 'name': 'bowen'}
return json.dumps(t) # 字符串类型，需要重新解析 Content-Type: text/html
return jsonify(t)
```

* 获取 GET POST参数 [查看参考](https://www.cnblogs.com/FRESHMANS/p/8460227.html)  [article](https://blog.csdn.net/jhgjdfhre/article/details/52249790)

### Get

```python
#Get
get('barefeet.cn?id=123')
requestArg = request.args.get('data', '000')
```

### Post

```python
res = request.form.get('data', 0) # form表单的提交方式
res = request.json # json的形式提交数据
```

### Post form文件上传

```python
import os
from werkzeug import secure_filename

app = Flask(__name__)
res = request.form
print(str(res))
file = request.files['file']
filename = secure_filename(file.filename)
file.save(os.path.join(app.root_path , filename))
```

```javascript
<!-- html操作 -->
const uploadInput = document.getElementById('upload');
let param = new window.FormData();
param.append('file', uploadInput.files[0]);
param.append('goodNum', this.commentWord);
```

## LIST 操作

```python
for item in query_list:
	print('%s %s'%(item.get('msg'), item.id))

for i in rangelen(query_list):
	print('%s'%(query_list[i].get('msg')))
```
<comment commentIndex="docs"/>