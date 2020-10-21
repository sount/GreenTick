import mysql.connector
from sseclient import SSEClient
import json
from datetime import datetime

def _streamSSE(url, cnx):
    '''
    function to receive data and insert them into a db
    :param url:
    :param cnx:
    :return:
    '''
    # primary keys
    ctpy_id = 701
    instrument_id = 1001
    deal_id = 20001
    # empty dict to store primary key of each unique ctpy/instrument name
    ctpy_dict = {}
    instrument_dict = {}

    messages = SSEClient(url)
    for msg in messages:
        output_msg = msg.data
        if type(output_msg) is str:
            output_json = json.loads(output_msg)

        # insert ccounterparty details into ctpy table
        ctpy_name_to_id = insert_counterparty(cnx, output_json, ctpy_id, ctpy_dict)

        # insert instrument details into instrument table
        instrument_name_to_id = insert_instrument(cnx, output_json, instrument_id, instrument_dict)

        # insert deal data into deal table
        mycursor = cnx.cursor()
        sql = "INSERT IGNORE INTO deal (deal_id, deal_time, deal_counterparty_id, deal_instrument_id, deal_type, deal_amount, deal_quantity) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        time = convert_to_datetime(output_json['time'])
        val = (deal_id, time, ctpy_name_to_id[output_json['cpty']],
               instrument_name_to_id[output_json['instrumentName']], output_json['type'],
               output_json['price'], output_json['quantity'])
        mycursor.execute(sql, val)

        cnx.commit()

        # increment primary keys
        deal_id += 1
        ctpy_id += 1
        instrument_id += 1

        print(mycursor.rowcount, "record inserted.")


def convert_to_datetime(time):
    '''
    function to convert strtime (e.g. 20-oct-2020 (18:32:48:699905)) to
    sql datetime format (YYY:MM:DD hh:mm:ss)
    :return: 
    '''
    datetime_obj = datetime.strptime(time, '%d-%b-%Y (%H:%M:%S.%f)')

    return datetime_obj


def insert_instrument(cnx, output_data, instrument_id, instrument_dict):
    mycursor = cnx.cursor()
    if output_data['instrumentName'] not in list(instrument_dict.keys()):
        sql = "INSERT IGNORE INTO instrument (instrument_id, instrument_name) VALUES (%s, %s)"
        val = (instrument_id, output_data['instrumentName'])

        instrument_dict[output_data['instrumentName']] = instrument_id
        mycursor.execute(sql, val)
        cnx.commit()

    return instrument_dict


def insert_counterparty(cnx, output_data, ctpy_id, ctpy_dict):
    mycursor = cnx.cursor()
    if output_data['cpty'] not in list(ctpy_dict.keys()):
        sql = "INSERT IGNORE INTO counterparty (counterparty_id, counterparty_name, counterparty_status, counterparty_date_registered) VALUES (%s, %s, %s, %s)"
        time = convert_to_datetime(output_data['time'])
        ctpy_status = "A"
        val = (ctpy_id, output_data['cpty'], ctpy_status, time)

        ctpy_dict[output_data['cpty']] = ctpy_id
        mycursor.execute(sql, val)
        cnx.commit()

    return ctpy_dict


def connect_to_db():
    cnx = mysql.connector.connect(user='root', password='ppp',
                                  host='127.0.0.1',
                                  database='db_grad_cs_1917')

    return cnx


if __name__ == '__main__':
    cnx = connect_to_db()
    _streamSSE('http://127.0.0.1:5000/streamTest/sse', cnx)
    cnx.close()
