import time
from flask import Flask, Response
from flask_cors import CORS
from datetime import datetime, timedelta
import json


app = Flask(__name__)
CORS(app)

@app.route('/login')
def login(json):
    #usernama =
    #password =
    return Response(login.html, status=200, mimetype='application/json')

@app.route('/statistics')
def statistics():
    return Response(eventStream(), mimetype="text/event-stream")

@app.route('/historicaldata')
def historicaldata():
    return Response(eventStream(), mimetype="text/event-stream")


def bootapp():
    app.run(port=8000, threaded=True, host=('127.0.0.1'))

if __name__ == '__main__':
     bootapp()

