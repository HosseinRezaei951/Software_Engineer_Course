#import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash
from flask             import render_template
from flask             import request
from flask             import jsonify
import sys
from flask import Flask
import hashlib
import mysql.connector

app = Flask(__name__)



@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/index2')
def index2():
    return render_template('index2.html')

@app.route('/insertUser', methods = ['POST'])
def insertUser():
	
    username = request.form["username"]
    phone = request.form["phone"]
    email = request.form["email"]
    password = request.form["password"]
	
    hash_password = hashlib.md5(password.encode())
       
    mydb = mysql.connector.connect(user    ='root',
                                    password='',
                                    host    ='localhost',
                                    database='signup')
    cur = mydb.cursor()
    sql = "INSERT INTO users(username, phone, email, password) VALUES (%s,%s,%s,%s)"
    val = (username,phone,email,hash_password.hexdigest())
    cur.execute(sql,val)
    mydb.commit()
    print(cur.rowcount, "record inserted.")
    cur.close()
    mydb.close()

    return render_template('index2.html')
	
    
	
    
if __name__ == '__main__':
    app.run(debug = True)