# coding: utf-8

from datetime import datetime

from flask import Flask
from flask import render_template
from flask_sockets import Sockets
from flask.ext.cors import CORS
# conda install flask-cors

from views.todos import todos_view
from views.comment import comment_view
from views.demo import demo_view

app = Flask(__name__)
CORS(app)

sockets = Sockets(app)

# 动态路由
app.register_blueprint(todos_view, url_prefix='/todos')
app.register_blueprint(comment_view, url_prefix='/comment')
app.register_blueprint(demo_view, url_prefix='/demo')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/time')
def time():
    return str(datetime.now())


@sockets.route('/echo')
def echo_socket(ws):
    while True:
        message = ws.receive()
        ws.send(message)
