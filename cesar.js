// FAZER INCREMENTO APARECER NA ESCOLHA DE CODIFICAÇÃO
function recebeDisplay () {
    var displayOn = document.getElementById ('select');
    var incremento = document.getElementById ('increment');
    
    if (document.querySelector('#select').value == "cifradecesar") {
        document.querySelector ('#entregarC')
        document.getElementById('increment').style.visibility = 'visible';
        document.querySelector ('#receberC').style.display="initial";
        document.querySelector ('#receberC').style.width="410px";
        document.querySelector ('#receberC').style.height="160px";
        document.querySelector ('#entregarC').style.display="block";
        document.querySelector ('#entregar').style.display="none";
        document.querySelector ('#receber').style.display="none";   
    }
    else if (document.querySelector('#select').value == "base64") {
        document.getElementById('increment').style.visibility = 'hidden';
        document.querySelector ('#receberC').style.display="none";
        document.querySelector ('#entregarC').style.display="none";
        document.querySelector ('#entregar').style.display="block";
        document.querySelector ('#receber').style.display="block";
    }
    else {

    }
}



function decisao () {
    if (document.querySelector('#select').value == "base64") {  
        base64()
    }
    else 
        validaIncremento()
    
}
    


function validaIncremento(){
    document.getElementById ('escolhaC')
    var incremento = document.getElementById("increment").value;
    incremento = incremento % 26; //recebe o resto da divisão por 26 que sao as letras do alfabeto
    var radioDecodificar = document.getElementById ('descodificar');
    if (radioDecodificar.checked) {
        incremento = incremento * (-1);
    }
    cesar(incremento)//chama a função cesar que tem o incremento como parametro
}
//validando o Incremento do codigo de Cesar
function cesar(incremento) {

    var textoDeEntrada = document.querySelector("#receberC").value;
    var textoDeSaida = document.querySelector("#entregarC");
    var transiçao = "";//variavel que receberá o valor charcode para ser mudado depois
    textoDeSaida.innerHTML = "";//textofinal

    for (var i = 0; i < textoDeEntrada.length; i++) {//for para pegar letra por letra e para incremneta-los
        transiçao = textoDeEntrada.charCodeAt(i);//numero da letra dentro do for

        if (transiçao >= 65 && transiçao <= 90) {//condiçãopara letras maiusculas
            transiçao = transiçao + incremento; //soma ao charCode o incremento
            if (transiçao > 90) {
                transiçao = transiçao - 26;//Caso o incremento estoure a condição
            } else if (transiçao < 65) {
                transiçao = transiçao + 26; //Caso o incremento estoure a condição
            }
        }
        if (transiçao >= 97 && transiçao <= 122) {//condiçao para letras minusculas
            transiçao = transiçao + incremento;//soma ao charCode o incremento
            if (transiçao > 122) {
                transiçao = transiçao - 26; //Caso o incremento estoure a condição
            } else if (transiçao < 97) {
                transiçao = transiçao + 26; //Caso o incremento estoure a condição
            }
        }

        document.getElementById('entregarC').innerHTML += String.fromCharCode(transiçao);//transfromando o charcode em string para exibi-lo
    }

}
