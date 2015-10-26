from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',
                           title = "Title")

@app.route('/update_graph')
def update_graph():
    name = request.args.get('name',type=str)
    #Used to convert 1st letter of name to a number
    n1 = ord(name[0].lower()) - 96
    color = colorHex()
    return jsonify(n1=n1, color=color)

def colorHex():
    chars = "0123456789ABCDEF"
    r = random.randint(0,255)
    g = random.randint(0,255)
    b = random.randint(0,255)
    Hex = "#" + chars[int(r/16)] + chars[r%16] + chars[int(g/16)] + chars[g%16] + chars[int(b/16)] + chars[b%16]
    return Hex;


if __name__ == '__main__':
    app.run(debug=True)
