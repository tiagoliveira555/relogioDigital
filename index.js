function relogio() {
    const data = new Date();

    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    document.querySelector('.relogio').innerHTML = 
        `${corrigirHora(hora)}:${corrigirHora(min)}:${corrigirHora(sec)}`;

    function corrigirHora(tempo) {
        if (tempo < 10) {
            tempo = '0' + tempo;
        }
        return tempo;
    }
}

relogio();
setInterval(relogio, 1000);
