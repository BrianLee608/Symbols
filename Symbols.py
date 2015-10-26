from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',
                           title = "Title")

@app.route('/update_graph')
def update_graph():
    name = request.args.get('name',0,type=str)
    n1 = ord(name[0].lower()) - 96
    return jsonify(n1=n1)

if __name__ == '__main__':
    app.run(debug=True)
