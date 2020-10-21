import mysql.connector
import requests
from requests.exceptions import HTTPError


def get_deal_data():

    try:
        response = requests.get('http://127.0.0.1:5000/streamTest/sse')
        response.raise_for_status()
        # access JSON content
        jsonResponse = response.json()
        print("Entire JSON response")
        print(jsonResponse)

    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')


def connect_to_db():
    cnx = mysql.connector.connect(user='scott', password='password',
                                  host='127.0.0.1',
                                  database='employees')
    cnx.close()


if __name__ == '__main__':
    get_deal_data()
