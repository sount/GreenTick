import mysql.connector
import pandas as pd

def check_credentials(credentials,SECRET_KEY):
    cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306, database='db_grad_cs_1917')
    cursor = cnx.cursor()
    cursor.execute('SELECT * FROM users WHERE user_id = %s AND user_pwd = %s',
                   (credentials["username"], credentials["password"]))
    account = cursor.fetchone()

    # If account exists in accounts table in out database
    if account:
        print('Logged in successfully!')
        response_dict = {"token": SECRET_KEY}

    else:
        print('Incorrect username/password!')
        response_dict = {}
    return response_dict

def get_statistical_data():
    cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                  database='db_grad_cs_1917')

    query = 'SELECT * FROM deal'
    # save everythiong for the calculations in a dataframe
    statistic_data_dataframe = pd.read_sql(query, cnx)

    # make dataframe to json
    response_dict = statistic_data_dataframe.to_json()
    return response_dict

def get_historical_data(historical_request):
    cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                  database='db_grad_cs_1917')
    query = f'SELECT * FROM deal LIMIT {historical_request["limit"]}'

    historical_data_dataframe = pd.read_sql(query, cnx)
    response_dict = historical_data_dataframe.to_json()
    return response_dict