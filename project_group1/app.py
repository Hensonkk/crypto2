from flask import Flask, render_template, request, redirect, url_for, jsonify
import psycopg2
import pandas as pd
import base64
import io
from matplotlib.figure import Figure
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html") # templates/index.html

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

@app.route("/heatmap")
def generate_heatmap():
    data = pd.read_csv("path_to_heatmap_data.csv")

    fig = Figure()
    axis = fig.add_subplot(1, 1, 1)
    output = io.BytesIO()
    FigureCanvas(fig).print_png(output)
    heatmap_base64 = base64.b64encode(output.getvalue()).decode('utf-8')

    return render_template("index.html", heatmap_base64=heatmap_base64)

if __name__ == "__main__":
    app.run(debug=True)
