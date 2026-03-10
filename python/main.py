from flask import Flask,request,jsonify

app = Flask(__name__)

dados = [
    {"Titulo": "EUA ataca irã", "descrição": ""},
    {"Titulo": "Brasileiros começam a fazer o a pistola do 22", "descrição":"Descrição da notícia"}

]
@app.route("/noticias")
def noticias():
    return jsonify(dados)
