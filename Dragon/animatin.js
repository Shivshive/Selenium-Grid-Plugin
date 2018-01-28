var dragon = document.getElementById('dragon');
dragon.addEventListener('animationstart', start, false);
dragon.addEventListener('animationend', end, false);

function start(e) {
    // $('#dragon').fadeIn(2000);
    // alert('animation started..');
}

function end(e) {
    // alert('animation end..');
    // $('#dragon').fadeOut(3000);
    var bulb = $('#bulb');
    bulb.attr('src','on.png');
    bulb.attr('height','65');
    bulb.attr('width','40');
}

