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
        var paragrafo = document.getElementById('entregar');
        paragrafo.style.width = "400px"
    }
    if (document.getElementById('descodificar').checked) {
        event.preventDefault();
        let b64 = document.getElementById('receber').value;
        let tradutor = atob(b64);
        document.getElementById('entregar').innerHTML = tradutor;
        paragrafo.style.width = "400px"
    }

// BOTÃO MUDANDO CONFORME A OPÇÃO DO RADIO INPUT
}

function botao() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Codificar';
    botaoCode.style.color = 'green';
}
function botaoD() {
    var botaoCode = document.querySelector ('.bparagrafo')
    botaoCode.textContent = 'Decodificar';
    botaoCode.style.color = 'red'
}

