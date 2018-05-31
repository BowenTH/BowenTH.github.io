import numpy as np
import cv2

# 去除边框
def clear_border(img,img_name):
  filename = './out_img/' + img_name.split('.')[0] + '-clearBorder.jpg'
  h, w = img.shape[:2]
  for y in range(0, w):
    for x in range(0, h):
      if y < 2 or y > w - 2:
        img[x, y] = 255
      if x < 2 or x > h -2:
        img[x, y] = 255

  cv2.imwrite(filename,img)
  return img

# 自适应阀值二值化
def _get_dynamic_binary_image(filedir, img_name):
  filename =   './out_img/' + img_name.split('.')[0] + '-binary.png'
  img_name = filedir + '/' + img_name
  print('.....' + img_name)
  im = cv2.imread(img_name)
  im = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY) #灰值化
  # 二值化
  th1 = cv2.adaptiveThreshold(im, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 21, 1)
  cv2.imwrite(filename,th1)

  res_img = clear_border(th1, 'hero-binary_img')
  
  cv2.imshow("lena_rgb", res_img) 
  return th1



_get_dynamic_binary_image('imgs', 'code.png')

def _show_img():
    img = cv2.imread("imgs/hero.jpg")
    # img = cv2.imread("pic.jpg", cv2.IMREAD_COLOR)
    img = cv2.imread("imgs/hero.jpg", cv2.IMREAD_GRAYSCALE)
    # img = cv2.imread("pic.jpg", cv2.IMREAD_UNCHANGED)

    cv2.imshow("image", img) # 显示图片，后面会讲解
    k = cv2.waitKey(0) #
    if k == 27: # ESC
        cv2.destroyAllWindows()
    elif k == ord('s'):
        cv2.imwrite('imgs/black.jpg', img)
        print('save img -------------------')
        cv2.destroyAllWindows()