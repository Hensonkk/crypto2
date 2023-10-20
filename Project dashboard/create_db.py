import psycopg2
import csv
import requests

conn = psycopg2.connect(database="Currency_db")
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE AirQuality (
    id INTEGER PRIMARY KEY,
    city TEXT,
    country TEXT,
    latitude REAL,
    longitude REAL,
    parameter TEXT,
    unit TEXT,
    average REAL,
    last_value REAL,
    last_updated TEXT
)
''')


url = "https://api.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=lastUpdated&dump_raw=false"


response = requests.get(url, headers={"X-API-Key": "683f7e6a2369b52e9a6afb689d3405cf9f08767f94d9eace76bc46942900d9f1"})

data = response.json()['results']

for entry in data:
    city = entry['city']
    country = entry['country']
    latitude = entry['coordinates']['latitude']
    longitude = entry['coordinates']['longitude']
    
    for param in entry['parameters']:
        parameter = param['parameter']
        unit = param['unit']
        average = param['average']
        last_value = param['lastValue']
        last_updated = param['lastUpdated']
        
        cursor.execute('''
        INSERT INTO AirQuality (
            city, country, latitude, longitude, parameter, 
            unit, average, last_value, last_updated
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            city, country, latitude, longitude, parameter, 
            unit, average, last_value, last_updated
        ))
        
conn.commit()
conn.close()