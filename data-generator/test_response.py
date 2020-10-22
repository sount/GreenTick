import requests

#test login
res = requests.post('http://localhost:8080/login', json={"username":"selvyn", "password":"gradprog2016"})

if res.ok:
    data = res.json()
    print(data)



#test historical data
res = requests.post('http://localhost:8080/historicaldata', json={"token":"greentickteamforthewin","limit":10})

if res.ok:
    data2 = res.json()
    print(data2)



# test statistic
res = requests.post('http://localhost:8080/statistics', json={"token":"greentickteamforthewin"})

if res.ok:
    data3 = res.json()
    print(data3)
