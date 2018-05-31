---
sidebar: auto
---
## python 应用的几个实例

#### 执行shell脚本

### 验证码识别

> [参考资料](https://www.cnblogs.com/qqandfqr/p/7866650.html)

### cv2图片操作

```python
import cv2  
import numpy as np  
  
# 读取图像  
img = cv2.imread("lena.jpg", 1)   # 读取彩色图像  
img_g = cv2.imread("lena.jpg", 0)  # 读取绘图图像  
  
# 复制图像  
img_copy = img.copy()  
  
# 利用NumPy 创建空的图像  
emptyImage = np.zeros(img.shape, np.uint8)  
  
# 保存图像  
cv2.imwrite("lena_copy.jpg", img_copy)  
  
# 颜色变换  
img_gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)  
  
# 尺度变换  
img_resize = cv2.resize(img, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_CUBIC)  

# 保存图片
cv2.imwrite('imgs/black.jpg', img)
  
cv2.namedWindow("lena_rgb")  
cv2.namedWindow("lena_gray")  
cv2.namedWindow("emptyImage")  
cv2.namedWindow("gray")  
cv2.namedWindow("resize")  
  
cv2.imshow("lena_rgb", img)  
cv2.imshow("lena_gray", img_g)  
cv2.imshow("emptyImage", emptyImage)  
cv2.imshow("gray", img_gray)  
cv2.imshow("resize", img_resize)  
  
cv2.waitKey(0)  
cv2.destroyAllWindows() 
```


<comment commentIndex="python-demo" />
