var intervalo;
var s = 1;
var m = 0;
var h = 0
contador = 0

function tempo(op) {
    if (op == 1) {
        document.getElementById('parar').style.display = "block";

    };
    intervalo = window.setInterval(function () {
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            s = 0;
            m = 0;
        }
        if (h < 10) document.getElementById("hora").innerHTML = "0" + h + ":";
        else document.getElementById("hora").innerHTML = h + ":";
        if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "";
        else document.getElementById("segundo").innerHTML = s + ":";
        if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + ":";
        else document.getElementById("minuto").innerHTML = m + ":";
        s++;
    }, 1000);
}

function parar() {
    window.clearInterval(intervalo);


}

function volta() {
    contador +=1
    document.getElementById('voltas').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data +"  volta:"+contador+ "<br>";
}

function limpa() {
    document.getElementById('voltas').innerHTML = "";
    document.getElementById('segundo').innerHTML = "00";
    document.getElementById('minuto').innerHTML = "00:";
    document.getElementById('hora').innerHTML = "00:";
    
}