import mysql.connector
from flask import jsonify

import mysql.connector
import time
from flask import Flask, Response, request
from flask_cors import CORS
import json


SECRET_KEY = "greentickteamforthewin"
app = Flask(__name__)
CORS(app)

@app.route('/login',methods=['GET', 'POST'])
def login():

    content = request.json
    testdata = '{"username":"selvyn", "password":"gradprog2016"}'
    credentials = json.loads(content)
    cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306, database='db_grad_cs_1917')

    cursor = cnx.cursor()

    cursor.execute('SELECT * FROM users WHERE user_id = %s AND user_pwd = %s',
                   (credentials["username"], credentials["password"]))

    account = cursor.fetchone()

    # If account exists in accounts table in out database
    if account:
        # Create session data, we can access this data in other routes
        print('Logged in successfully!')
        response_dict = {"token": SECRET_KEY}
        return jsonify(response_dict)
    else:
        # Account doesnt exist or username/password incorrect
        print('Incorrect username/password!')
        return False


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

