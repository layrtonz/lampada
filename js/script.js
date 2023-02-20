const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src === ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
    lamp.src = './imgs/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './imgs/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './imgs/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);