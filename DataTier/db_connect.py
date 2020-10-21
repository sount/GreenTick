from sseclient import SSEClient
import requests
from requests.exceptions import HTTPError
import json
from __future__ import print_function
from datetime import date, datetime, timedelta
import mysql.connector

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


def _connect_to_db():
    cnx = mysql.connector.connect(user='root', password='ppp',
                                  host='127.0.0.1',
                                  database='db_grad_cs_1917')


def _insert_data(cnx, data):

    cursor = cnx.cursor()

    tomorrow = datetime.now().date() + timedelta(days=1)

    add_employee = ("INSERT INTO deals "
                    "(deal_time, deal_type, deal_amount, deal_quantity) "
                    "VALUES (%s, %s, %s, %s)")

    deal_data = data

    # Insert new employee
    cursor.execute(add_employee, deal_data)
    emp_no = cursor.lastrowid

    # Insert salary information
    data_salary = {
        'emp_no': emp_no,
        'salary': 50000,
        'from_date': tomorrow,
        'to_date': date(9999, 1, 1),
    }
    cursor.execute(add_salary, data_salary)

    # Make sure data is committed to the database
    cnx.commit()

    cursor.close()
    cnx.close()

if __name__ == '__main__':
    _streamSSE('http://127.0.0.1:5000/streamTest/sse')
    # get_deal_data()
