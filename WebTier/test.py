import mysql.connector
import json
from flask import jsonify


SECRET_KEY = "greentickteamforthewin"

testdata = '{"username":"selvyn", "password":"gradprog2016"}'
credentials = json.loads(testdata)
cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306, database='db_grad_cs_1917')

cursor = cnx.cursor()

cursor.execute('SELECT * FROM users WHERE user_id = %s AND user_pwd = %s', (credentials["username"], credentials["password"]))

account = cursor.fetchone()

# If account exists in accounts table in out database
if account:
    # Create session data, we can access this data in other routes
    print( 'Logged in successfully!')
    response_dict={"TOKEN":SECRET_KEY}
    return jsonify(response_dict)
else:
    # Account doesnt exist or username/password incorrect
    print('Incorrect username/password!')

