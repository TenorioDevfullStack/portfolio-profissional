from flask import Flask, send_from_directory, request, jsonify
import subprocess
import os
import signal
import threading
import time

app = Flask(__name__)

# Processo do Next.js
next_process = None

def start_nextjs():
    global next_process
    os.chdir('/home/ubuntu/portfolio-tenorio')
    next_process = subprocess.Popen(['npm', 'start'], 
                                   stdout=subprocess.PIPE, 
                                   stderr=subprocess.PIPE)

def stop_nextjs():
    global next_process
    if next_process:
        next_process.terminate()
        next_process.wait()

# Iniciar Next.js quando o Flask iniciar
start_nextjs()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def proxy_to_nextjs(path):
    import requests
    try:
        # Proxy para o Next.js rodando na porta 3000
        url = f'http://localhost:3000/{path}'
        if request.query_string:
            url += f'?{request.query_string.decode()}'
        
        resp = requests.get(url, headers=dict(request.headers))
        return resp.content, resp.status_code, dict(resp.headers)
    except:
        return "Serviço temporariamente indisponível", 503

@app.route('/api/contact', methods=['POST'])
def contact_proxy():
    import requests
    try:
        resp = requests.post('http://localhost:3000/api/contact', 
                           json=request.json,
                           headers={'Content-Type': 'application/json'})
        return resp.content, resp.status_code, dict(resp.headers)
    except:
        return jsonify({"error": "Erro interno do servidor"}), 500

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000)
    finally:
        stop_nextjs()

