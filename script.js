const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp'); 

// funções para ligar, desligar e quebrar a lampada.

function lampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 // sintaxe > indexOf ('trecho procurado') > -1;
}

/*  o indexOf que impedirá os funcionamentos dos botões após a lampada quebrar. O método indexOf procurará um trecho de string dentro de uma string. Se dentro da string tiver a palavra "quebrada" quer dizer que a imagem da lampada é a quebrada, ou seja, achar um número maior que -1, se não achar, trará -1 */

function lampOn () {
    if (!lampBroken ()) { // a ! significa negativo, ou seja, o botão só funcionará nesses termos
        lamp.src = 'img/ligada.jpg';
    }  
}

function lampOff () {
    if (!lampBroken()) { // a ! significa negativo, ou seja, o botão só funcionará nesses termos
        lamp.src = 'img/desligada.jpg';
    }   
}

/* resumindo em palavras: se a lâmpada não estiver quebrada, a função funcionará, caso contrário, não vai. O que faz com que o processo seja travado. */

function lampCrash () {
    lamp.src = 'img/quebrada.jpg';
}
// eventos 
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn );
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampCrash);



