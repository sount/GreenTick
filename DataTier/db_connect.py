import mysql.connector
from sseclient import SSEClient
import requests
from requests.exceptions import HTTPError
import json

#
# def get_deal_data():
#
#     try:
#         response = requests.get('http://127.0.0.1:5000/testservice')
#         response.raise_for_status()
#         # access JSON content
#         jsonResponse = response.json()
#         print("Entire JSON response")
#         print(jsonResponse)
#
#     except HTTPError as http_err:
#         print(f'HTTP error occurred: {http_err}')
#     except Exception as err:
#         print(f'Other error occurred: {err}')
#
#     return jsonResponse


def _streamSSE(url):
    '''internal'''
    messages = SSEClient(url)
    for msg in messages:
        print(msg)



def connect_to_db():
    cnx = mysql.connector.connect(user='scott', password='password',
                                  host='127.0.0.1',
                                  database='employees')
    cnx.close()


if __name__ == '__main__':
    _streamSSE('http://127.0.0.1:5000/streamTest/sse')
    # get_deal_data()
