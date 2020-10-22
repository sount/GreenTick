import requests
#test login
res = requests.post('http://localhost:8000/login', json={"username":"selvyn", "password":"gradprog2016"})

if res.ok:
    print(res.json())

#test historical data
res = requests.post('http://localhost:8000/historicaldata', json={"token":"greentickteamforthewin","limit":10})

if res.ok:
    print(res.json())

# test statistic
res = requests.post('http://localhost:8000/statistics', json={"token":"greentickteamforthewin"})

if res.ok:
    print(res.json())