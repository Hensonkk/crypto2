from flask import Flask, render_template, request, redirect, url_for, jsonify
import psycopg2
import pandas as pd
import base64
import io
from matplotlib.figure import Figure
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import json

app = Flask(__name__)
app.static_url_path = '/static'
app.static_folder = 'static'

@app.route("/")
def index():
    return render_template("index.html") # templates/index.html

@app.route('/heatmap')
def heatmap():
    return render_template('heatmap.html')

@app.route("/api/bitcoin")
def get_bitcoin():
    conn = psycopg2.connect(database="Currency_db", user="postgres", password="postgres", port="5432")
    query = "SELECT * FROM bitcoin"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient="records"))

@app.route("/api/gold")
def get_gold():
    conn = psycopg2.connect(database="Currency_db", user="postgres", password="postgres", port="5432")
    query = "SELECT * FROM gold"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient="records"))

@app.route("/api/silver")
def get_silver():
    conn = psycopg2.connect(database="Currency_db", user="postgres", password="postgres", port="5432")
    query = "SELECT * FROM silver"
    data = pd.read_sql(query, conn)
    conn.close()
    return jsonify(data.to_json(orient="records"))

@app.route('/get_data')
def get_data():
    # Load and serve the JSON data
    with open('gold_reserves.json') as json_file:
        data = json.load(json_file)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
