from flask import Flask, render_template, Response,request,jsonify
from flask_sse import sse
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
#app.register_blueprint(sse, url_prefix='/stream')
CORS(app)

@app.route('/deals')
def forwardStream():
    r = requests.get('http://localhost:8080/streamTest', stream=True)
    def eventStream():
            for line in r.iter_lines( chunk_size=1):
                if line:
                    yield 'data:{}\n\n'.format(line.decode())
    return Response(eventStream(), mimetype="text/event-stream")

@app.route('/client/testservice')
def client_to_server():
    r = requests.get('http://localhost:8080/testservice')
    return Response(r.iter_lines(chunk_size=1), mimetype="text/json")

@app.route('/')
@app.route('/index')
def index():
    return "webtier service points are running..."


<<<<<<< HEAD
@app.route('/login', methods=['GET', 'POST'])
def login():
    credentials = request.json

    res = requests.post('http://localhost:8080/login', json=credentials)

    return res.json()

@app.route('/historicaldata', methods=['GET', 'POST'])
def historicaldata():
    historical = request.json

    res = requests.post('http://localhost:8080/historicaldata', json=historical)

    return res.json()


@app.route('/statistics', methods=['GET', 'POST'])
def statistics():
    statistics = request.json

    res = requests.post('http://localhost:8080/statistics', json=statistics)

    return res.json()
=======
>>>>>>> b47fa48b1ce06162e05a9f3bf2d30ad2a35fb9e2

def get_message():
    """this could be any function that blocks until data is ready"""
    time.sleep(1.0)
    s = time.ctime(time.time())
    return s

def bootapp():
    app.run(port=8090, threaded=True, host=('127.0.0.1'))

if __name__ == '__main__':
     bootapp()
