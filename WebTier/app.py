import mysql.connector
from flask import jsonify

import mysql.connector
import time
from flask import Flask, Response, request
from flask_cors import CORS
import json
import pandas as pd

SECRET_KEY = "greentickteamforthewin"
app = Flask(__name__)
CORS(app)

@app.route('/login',methods=['GET', 'POST'])
def login():

    credentials = request.json

    cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306, database='db_grad_cs_1917')
    cursor = cnx.cursor()
    cursor.execute('SELECT * FROM users WHERE user_id = %s AND user_pwd = %s',
                   (credentials["username"], credentials["password"]))
    account = cursor.fetchone()

    # If account exists in accounts table in out database
    if account:
        print('Logged in successfully!')
        response_dict = {"token": SECRET_KEY}
        return jsonify(response_dict)
    else:
        print('Incorrect username/password!')
        response_dict = {}
        return jsonify(response_dict)


@app.route('/statistics', methods=['GET', 'POST'])
def statistics():
    statistics_request = request.json
    if statistics_request["token"] == SECRET_KEY:
        print("Access Granted!")
        # connect do mysql database
        cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                      database='db_grad_cs_1917')

        query = 'SELECT * FROM deal'
        # save everythiong for the calculations in a dataframe
        statistic_data_dataframe = pd.read_sql(query, cnx)


        #make dataframe to json
        response_dict = statistic_data_dataframe.to_json()

        return jsonify(response_dict)
    else:
        print("Access Denied")
        response_dict = {}
        return jsonify(response_dict)

@app.route('/historicaldata',methods=['GET', 'POST'])
def historicaldata():
    historical_request = request.json
    if historical_request["token"] == SECRET_KEY:
        print("Access Granted!")
        cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                      database='db_grad_cs_1917')
        query = f'SELECT * FROM deal LIMIT {historical_request["limit"]}'

        historical_data_dataframe = pd.read_sql(query, cnx)
        response_dict = historical_data_dataframe.to_json()
        return jsonify(response_dict)
    else:
        print("Access Denied")
        response_dict = {}
        return jsonify(response_dict)

def bootapp():
    app.run(port=8000, threaded=True, host=('127.0.0.1'))

if __name__ == '__main__':
     bootapp()

