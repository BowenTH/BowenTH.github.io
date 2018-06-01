---
siderbar: auto
---

## Object

	封装、继承、多态

```python
class Animal(object):
	def __init__(self, type):
		self.type = type

class Dog(Animal):
	def run(self)
		print('running')
```

## 通过下划线来判断是否能访问

```python
class Animal(object)
	def __init__(self, name)
		self.__name = name # 私有成员不可访问
		self._name = name # 可访问，建议不要访问

```

## 判断类型

	type()  isinstance(a, 'Dog')  isinstance(a, 'Animal')

## 类的属性

```python
class Student(object):
	# 类可以访问，每个实例也可以访问
	count = 0
	def __init__(self)
		Student.count += 1
```

## 装饰器 -- 这个很极客

```python
class Animal(object):
	count = 0
	def __init__(self, name, sex):
		self._name = name
		pass
	
	@property
	def name(self):
		return self._name
	
	@name.setter
	def name(self, name):
		self._name = name

def initData():
	cat = Animal('cat animal', 'female')
	print('%s' % cat.name)
	cat.name = 'dog'
	print('%s' % cat.name)
```

<comment commentIndex="object" />
