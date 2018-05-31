import re

line = '//ww.baid.com'
matchObj = re.search('com$',line, re.I|re.M)
searchObj = re.search( r'(.*) are (.*?) .*', "Cats are smarter than dogs", re.M|re.I)
subObj = re.sub('^x//','http://',line, 1,re.I|re.M)

pass
print(subObj)