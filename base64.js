//BASE64
function base64() {

    if (document.getElementById('codificar').checked) {
        function botao() {
            var botaoCode = document.querySelector ('.bparagrafo')
            botaoCode.textContent = 'Codificar';
        }
        event.preventDefault();
        let b64 = document.getElementById('receber').value;
        let tradutor = btoa(b64);
        document.getElementById('entregar').innerHTML = tradutor;
    }
    if (document.getElementById('descodificar').checked) {
        event.preventDefault();
        let b64 = document.getElementById('receber').value;
        let tradutor = atob(b64);
        document.getElementById('entregar').innerHTML = tradutor;
    }

// BOTÃO MUDANDO CONFORME A OPÇÃO DO RADIO INPUT
}

function botao() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Codificar';
}
function botaoD() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Decodificar';
}

