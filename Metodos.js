
var alfabeto = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alfabeto2 = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
 "a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o',
 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var alfabeto3 = [' ','ç','á','é','í','ó','ú','â','ê','î','ô','û','ã','õ',",",'.',"!","?",'ç','á','é','í','ó','ú','â','ê','î','ô','û','ã','õ',",",'.',"!","?"]

 
function criptografar() {
    var frase = document.querySelector("#frase").value;
    var rout = document.querySelector("#route").value
    frase = frase.toLowerCase()
    console.log(frase);
    console.log(rout);
    if(rout <=0  || rout>26 ){
        alert("Insira uma chave valida e menor  que 26 para criptografar a frase ")
            } else{
                var frasec = "";
    for (var i = 0; i < frase.length; i++) {
        for (var y = 1; y < 27; y++) {
            console.log(frase.charAt(i))
            if (frase.charAt(i) == alfabeto[y]) {
                var letra = parseInt(y) + parseInt(rout);
                frasec += alfabeto2[letra];
                console.log(frasec)
            }if (frase.charAt(i) == " ") {
                frasec += " ";
                console.log(frasec) 
            } if(frase.charAt(i) == alfabeto3[y]){
                var letra = parseInt(y) + parseInt(rout);
                frasec += alfabeto3[letra];
                break;
            }
        }
    }
    var div = document.createElement('div')
    div.className = "informaçoes"
    var h = document.createElement('h4')
    var r = document.createElement('h2')
    var text_i = document.createTextNode(frasec)
    h.appendChild(text_i)
    div.appendChild(h)
    document.getElementById('result').appendChild(div)
}
};

function descriptografar() {
    var frase = document.querySelector("#frase").value;
    var rout = document.querySelector("#route").value
    frase = frase.toLowerCase()
    console.log(frase);
    console.log(rout);

    if(rout <=0 || rout>26){
alert("Insira uma chave valida e menor  que 26 para criptografar a frase")
    } else{
        var frasec = "";
    for (var i = 0; i < frase.length; i++) {
        for (var y = 1; y < 27; y++) {
            console.log(frase.charAt(i))
            if (frase.charAt(i) == alfabeto[y]) {
                var letra = parseInt(y)+parseInt(26) - parseInt(rout);
                frasec += alfabeto2[letra];
                console.log(frasec)
            }if (frase.charAt(i) == " ") {
                frasec += " ";
                console.log(frasec) 
            } if(frase.charAt(i) == alfabeto3[y]){
                var letra = parseInt(y)+ parseInt(17) - parseInt(rout);
                frasec += alfabeto3[letra];
            }
        }
    }
    var div = document.createElement('div')
    div.className = "res"
    var h = document.createElement('h4')
    var r = document.createElement('h2')
    var text_i = document.createTextNode(frasec)
    h.appendChild(text_i)
    div.appendChild(h)
    document.getElementById('result').appendChild(div)
}
};