# coding: utf-8
from leancloud import Object
from leancloud import Query
from leancloud import LeanCloudError
from flask import Blueprint
from flask import Flask
from flask import request
from flask import redirect
from flask import url_for
from flask import jsonify
from flask import render_template
# import os
# from werkzeug import secure_filename

app = Flask(__name__)
class Todo(Object):
    pass

comment_view = Blueprint('comment', __name__)

@comment_view.route('')
def show():
	query = Query('Comment')
	query.descending('createdAt')
	search = request.args.get('search', '0')
	query.equal_to('commentIndex', search)
	query_list = query.find()
	# 处理查询结果，不能直接json化
	msgs = []
	for item in query_list:
		msgs.append({'msg': item.get('msg'), 'createdAt': item.created_at, 'commentIndex': item.get('commentIndex')})
	return(jsonify({'data': msgs,'code':0}))

@comment_view.route('', methods=['POST'])
def add():
	res = request.json
	print(str(res))
	Comment = Object.extend('Comment')
	comment = Comment()
	msg = res.get('msg', '')
	commentIndex = res.get('commentIndex', '')
	if msg=='':
		return(jsonify({'msg': '内容为空','code':100}))
	comment.set("msg", msg)
	comment.set("commentIndex", commentIndex)
	try:
		comment.save()
	except LeanCloudError as e:
		return e.error, 502
	return(jsonify({'msg': 'success','code':0}))