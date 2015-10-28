from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',
                           title = "Symbols")

@app.route('/update_graph')
def update_graph():
    # n1 = stringToNumeric(request.args.get('firstname'))
    # n2 = stringToNumeric(request.args.get('lastname'))
    n1 = request.args.get('n1')
    n2 = request.args.get('n2')
    n3 = request.args.get('n3')
    n4 = request.args.get('n4')
    a1 = request.args.get('a1')
    a2 = request.args.get('a2')
    print("" + n1 + n2 + n3 + n4 + a1 + a2)
    color = colorHex()
    return jsonify(n1=n1, n2=n2, n3=n3, n4=n4, a1=a1, a2=a2, color=color)

def colorHex():
    chars = "0123456789ABCDEF"
    r = random.randint(0,255)
    g = random.randint(0,255)
    b = random.randint(0,255)
    Hex = "#" + chars[int(r/16)] + chars[r%16] + chars[int(g/16)] + chars[g%16] + chars[int(b/16)] + chars[b%16]
    return Hex;

def isNumeric(input):
    try:
        float(input)
        return True
    except ValueError:
        return False

def stringToNumeric(firstName):
    if isNumeric(firstName):
        num = float(firstName)
    else:
        num = 0
        # Used to convert letter in name to a number
        for i in range(0, len(firstName)):
            num = num + (ord(firstName[i].lower()) - 96)

    return num / len(firstName)

if __name__ == '__main__':
    app.run(debug=True)
