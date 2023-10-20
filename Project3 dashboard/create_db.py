import psycopg2
import requests

conn = psycopg2.connect(database="Currency_db")
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE Cryptocurrency (
    id SERIAL PRIMARY KEY,
    name TEXT,
    symbol TEXT,
    price REAL,
    market_cap REAL,
    last_updated TEXT
)
''')

cryptocurrencies = [
    {"name": "Bitcoin", "symbol": "BTC", "url": "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"},
    {"name": "Gold", "symbol": "XAU", "url": "https://example.com/gold_api_endpoint"},  
    {"name": "Silver", "symbol": "XAG", "url": "https://example.com/silver_api_endpoint"}  
]

for crypto in cryptocurrencies:
    name = crypto["name"]
    symbol = crypto["symbol"]
    url = crypto["url"]

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        price = data["price"]
        market_cap = data["market_cap"]
        last_updated = data["last_updated"]

        cursor.execute('''
        INSERT INTO Cryptocurrency (
            name, symbol, price, market_cap, last_updated
        )
        VALUES (%s, %s, %s, %s, %s)
        ''', (name, symbol, price, market_cap, last_updated))

conn.commit()
conn.close()
