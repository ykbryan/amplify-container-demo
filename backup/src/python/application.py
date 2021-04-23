#!/usr/bin/env python3
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!!'

@app.route('/fargate')
def hello_fargate():
    return 'Hello Fargate!'

@app.route('/ec2')
def hello_ec2():
    return 'Hello ECS on EC2!'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=8080)
