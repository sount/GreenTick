
import mysql.connector
import pandas as pd

cnx = mysql.connector.connect(user='root', password='ppp', host="localhost", port=3306,
                                      database='db_grad_cs_1917')

query = 'SELECT * FROM deal'
# save everything for the calculations in a dataframe
data_dataframe = pd.read_sql(query, cnx)
instrument_id = data_dataframe["deal_instrument_id"].unique().sort()
print(instrument_id)

grouped_data= data_dataframe.groupby(['deal_instrument_id', 'deal_type'])[["deal_quantity","deal_amount"]]
print(grouped_data.describe())
#.size().unstack(level=1)
#make dataframe to json
response_dict = data_dataframe.to_json()