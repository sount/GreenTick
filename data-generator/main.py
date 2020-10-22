from flask import Flask, request,jsonify
from flask_cors import CORS
import webServiceStream
from RandomDealData import *

from utilities_restapi import check_credentials,get_statistical_data,get_historical_data


SECRET_KEY = "greentickteamforthewin"
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return webServiceStream.index()

@app.route('/testservice')
def testservice():
    return webServiceStream.testservice()

@app.route('/streamTest')
def stream():
    return webServiceStream.stream()

@app.route('/streamTest/sse')
def sse_stream():
     return webServiceStream.sse_stream()


@app.route('/login',methods=['GET', 'POST'])
def login():

    credentials = request.json
    response_dict = check_credentials(credentials,SECRET_KEY)

    return jsonify(response_dict)


@app.route('/statistics', methods=['GET', 'POST'])
def statistics():
    statistics_request = request.json
    if statistics_request["token"] == SECRET_KEY:
        print("Access Granted!")
        # connect do mysql database

        response_dict = get_statistical_data()
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
        response_dict = get_historical_data(historical_request)
        return jsonify(response_dict)
    else:
        print("Access Denied")
        response_dict = {}
        return jsonify(response_dict)




def bootapp():
    #global rdd 
    #rdd = RandomDealData()
    #webServiceStream.bootServices()
    app.run(debug=True, port=8080, threaded=True, host=('127.0.0.1'))


if __name__ == "__main__":
      bootapp()
