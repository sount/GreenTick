
import mysql.connector
import pandas as pd
import numpy as np

cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                      database='db_grad_cs_1917')

instrument_name_to_id = {"Astronomica" : 1001,
                         "Borealis" : 1002,
                         "Celestial" : 1003,
                         "Deuteronic" : 1004,
                         "Eclipse" : 1005,
                         "Floral" : 1006,
                         "Galactia" : 1007,
                         "Heliosphere" : 1008,
                         "Interstella" : 1009,
                         "Jupiter" : 1010,
                         "Koronis" : 1011,
                         "Lunatic" : 1012}
instrument_id_to_name = {b : a for a, b in instrument_name_to_id.items()}

ctpy_name_to_id = {"Lewis" : 701,
                   "Selvyn" : 702,
                   "Richard" : 703,
                   "Lina" : 704,
                   "John" : 705,
                   "Nidia" : 706}
ctpy_id_to_name = {b : a for a, b in ctpy_name_to_id.items()}

query = 'SELECT * FROM deal'
# save everything for the calculations in a dataframe
data = pd.read_sql(query, cnx)


def find_dealer_PL(data_dataframe):

    ctpy_PL = {}
    for index, row in data_dataframe.iterrows():
        if row['deal_type'] == "B":
            modifier = -1
        else:
            modifier = 1
        if ctpy_id_to_name[row['deal_counterparty_id']] not in list(ctpy_PL.keys()):
            ctpy_PL[ctpy_id_to_name[row['deal_counterparty_id']]] = (row['deal_amount'] * row['deal_quantity'] * modifier)
        else:
            ctpy_PL[ctpy_id_to_name[row['deal_counterparty_id']]] += (row['deal_amount'] * row['deal_quantity'] * modifier)

    ctpy_PL_df = pd.DataFrame(list(ctpy_PL.items()), columns=['deal_counterparty', 'PL'])

    return ctpy_PL_df


def find_average_buy_sell_price(data_dataframe):
    pd.set_option('max_columns', None)
    grouped_data = data_dataframe.groupby(['deal_instrument_id', 'deal_type'])[["deal_quantity", "deal_amount"]]

    return grouped_data.mean()


if __name__ == '__main__':
    # find_dealer_PL(data)
    find_average_buy_sell_price(data)