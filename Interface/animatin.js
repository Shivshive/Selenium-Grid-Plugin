var dragon = document.getElementById('dragon');
dragon.addEventListener('animationstart', start, false);
dragon.addEventListener('animationend', end, false);

function start(e) {
}

function end(e) {
    var bulb = $('#hub-status');
    bulb.attr('src','on.png');
}

