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

        mycursor = cnx.cursor()
#         TODO: Add deal_counterparty_id
        sql = "INSERT INTO deal (deal_time, deal_instrument_id, deal_type, deal_amount, deal_quantity) VALUES (%s, %d, %s, %d, %d)"
        val = (msg['deal_time'], msg['instrumentName'], msg['type'], msg['price'], msg['quantity'])
        mycursor.execute(sql, val)

        mydb.commit()

        print(mycursor.rowcount, "record inserted.")

def connect_to_db():
    cnx = mysql.connector.connect(user='scott', password='password',
                                  host='127.0.0.1',
                                  database='employees')

if __name__ == '__main__':
    connect_to_db()
    _streamSSE('http://127.0.0.1:5000/streamTest/sse')
    # get_deal_data()
    cnx.close()
