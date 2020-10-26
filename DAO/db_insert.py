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
    # primary key
    deal_id = 20001
    # dict to store primary key of each unique ctpy/instrument name
    ctpy_name_to_id = insert_counterparty(cnx)
    instrument_name_to_id = insert_instrument(cnx)

    messages = SSEClient(url)
    for msg in messages:
        output_msg = msg.data
        if type(output_msg) is str:
            output_json = json.loads(output_msg)

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

        print(mycursor.rowcount, "record inserted.")


def convert_to_datetime(time):
    '''
    function to convert strtime (e.g. 20-oct-2020 (18:32:48:699905)) to
    sql datetime format (YYY:MM:DD hh:mm:ss)
    :return: 
    '''
    try:
        datetime_obj = datetime.strptime(time, '%d-%b-%Y (%H:%M:%S.%f)')
    except:
        print("Invalid time data")

    return datetime_obj


def insert_instrument(cnx):
    mycursor = cnx.cursor()
    instrument_id = 1001
    instrument_dict = {}
    instruments = ("Astronomica", "Borealis", "Celestial", "Deuteronic", "Eclipse",
                   "Floral", "Galactia", "Heliosphere", "Interstella", "Jupiter", "Koronis", "Lunatic")
    for instrument in instruments:
        sql = "INSERT IGNORE INTO instrument (instrument_id, instrument_name) VALUES (%s, %s)"
        val = (instrument_id, instrument)
        instrument_dict[instrument] = instrument_id
        mycursor.execute(sql, val)
        cnx.commit()
        instrument_id += 1

    print("instruments added to database")
    return instrument_dict


def insert_counterparty(cnx):
    mycursor = cnx.cursor()
    ctpy_id = 701
    ctpy_dict = {}
    counterparties = ("Lewis", "Selvyn", "Richard", "Lina", "John", "Nidia")
    for ctpy in counterparties:
        sql = "INSERT IGNORE INTO counterparty (counterparty_id, counterparty_name, counterparty_status, counterparty_date_registered) VALUES (%s, %s, %s, %s)"
        time = datetime.now().strftime("%Y:%m:%d %H:%M:%S")
        ctpy_status = "A"
        val = (ctpy_id, ctpy, ctpy_status, time)
        ctpy_dict[ctpy] = ctpy_id
        mycursor.execute(sql, val)
        cnx.commit()
        ctpy_id += 1

    print("counterparties added to database")
    return ctpy_dict
