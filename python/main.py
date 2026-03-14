from flask import Flask,request,jsonify

app = Flask(__name__)

tarefas = []

@app.route("/noticias", methods=["GET"])
def noticias():
    return jsonify(tarefas)

@app.route("/tarefas", methods=["POST"])
def criar_tarefas():

    dados = request.json
    
    tarefa = {
        "id":len(tarefas) +1,
        "titulo":dados["titulo"],
        "concluida": False
    }

    tarefas.append(tarefas)

    return jsonify({
        "mensagem": "Tarefa criada com sucesso",
        "tarefa": tarefa
    })
    