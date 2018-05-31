# coding: utf-8

from leancloud import Object
from leancloud import Query
from leancloud import LeanCloudError
from flask import Blueprint
from flask import request
from flask import redirect
from flask import url_for
from flask import render_template


class Todo(Object):
    pass

demo_view = Blueprint('demo', __name__)


@demo_view.route('')
def show():
	res=[1,2,3, 4]
	types = {
		'int': int(45.23),
		'tuple': tuple(res),
		'list': list(res),
	}
	return render_template('demo.html', res=res,types=types)


@demo_view.route('', methods=['POST'])
def add():
    content = request.form['content']
    todo = Todo(content=content)
    try:
        todo.save()
    except LeanCloudError as e:
        return e.error, 502
    return redirect(url_for('todos.show'))
