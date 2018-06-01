

print('-----我是分割线-----')
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

initData()