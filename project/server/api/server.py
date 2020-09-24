from os import environ
from  random import randint
from  time import sleep
import logging as logger
from flask import Flask, jsonify
from flask_cors import CORS
from collections import defaultdict
import json

app = Flask(__name__)
CORS(app)
logger.debug("App starting")

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Congratulations!</h1> Your server is running."


@app.route('/get_raw', methods=['GET'])
def get_data():
    logger.debug("GET method returning data")
    with open("data/covariates.json") as json_file:
        raw = json.load(json_file)
        #if randint(0,99) == 1:
        #    sleep(200000)
        return jsonify(raw), 200


@app.route('/get_counts', methods=['GET'])
def get_count():
    logger.debug("GET method returning data")
    with open("data/covariates.json") as json_file:
        raw = json.load(json_file)
        drugs = raw['Drug']
        res = defaultdict(list)
        for key, val in sorted(drugs.items()):
            res[val].append(key)
        raw = list()
        for key, val in res.items():
            drug_count = dict()
            drug_count["Drug"] = key
            drug_count['Count'] = len(val)
            raw.append(drug_count)
        if randint(0,99) == 1:
            sleep(200000)
        return jsonify(raw), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0",
            port=environ['TX_SERVER_PORT'])
