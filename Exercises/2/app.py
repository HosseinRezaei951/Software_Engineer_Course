from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route('/MySite')
def mysite():
    data = [('Name','Chris Johnson'),
            ('Birthday','06 December 1987'),
            ('Job','Freelancer'),
            ('Email','henry@domain.com'),
            ('Skype','henryrooney85')]
            
    info = []
    for i , j in data:
        dict = {'Lable':i, 'Value':j}
        info.append(dict)
    
    return render_template('MySite/index.html', data = info)
    

@app.route('/page1')
def index():
    info = []
    for i in range(5):
        dict = {'name':'Your name ☻',
                'age':i+18}
        info.append(dict)
    temp = "♦ Hello World! ♦"

    return render_template('index1.html', data = info, value = temp)


@app.route('/page2')
def sample():
    return render_template('directory/sample.html')

if __name__ == '__main__':
    app.run(debug=True)
