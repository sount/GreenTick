import requests
import pandas as pd
import json
#test login
res = requests.post('http://localhost:8000/login', json={"username":"selvyn", "password":"gradprog2016"})

if res.ok:
    data = res.json()
    print(data)
    df1 = pd.DataFrame([data])
    print(df1)


#test historical data
res = requests.post('http://localhost:8000/historicaldata', json={"token":"greentickteamforthewin","limit":10})

if res.ok:
    data2 = res.json()
    print(data2)
    df2 = pd.DataFrame([data2])
    print(df2)


# test statistic
res = requests.post('http://localhost:8000/statistics', json={"token":"greentickteamforthewin"})

if res.ok:
    data3 = res.json()
    print(data3)
    df3 = pd.DataFrame([data3])
    print(df3)