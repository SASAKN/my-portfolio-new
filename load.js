setTimeout(() => {
    document.getElementById('load').style.animation = 'stop 0.5s forwards ease-in-out';
}, 3000);
setTimeout(() => {
    document.getElementById('load').remove();
}, 3500);