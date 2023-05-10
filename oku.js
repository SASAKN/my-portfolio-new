//変数の設定
let burger = 1;
//動作の設定
function menustop() {
    const tlogo = document.getElementsByClassName('slogo');
    const slogo = tlogo[0];
    const slogoelem = document.createElement('p');
    slogoelem.className = 'stextlogo';
    slogoelem.textContent = 'SASAKEN';
    slogo.appendChild(slogoelem);
    const elem = document.getElementById('humbergermenu');
    elem.style.transition = 'all .1.5s';
    elem.style.transform = 'translateX(100%)';
}
function menuopen() {
    const elem = document.getElementById('humbergermenu');
    const ttextlogo = document.getElementsByClassName('stextlogo');
    const stextlogo = ttextlogo[0];
    stextlogo.remove();
    elem.style.animation = 'menu 0.5s forwards ease-in-out';
}
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});
document.querySelector('.burger').addEventListener('click', function (e) {
    switch (burger) {
        case 1:
            menuopen();
            burger++;
            console.log('Animation:Menuopen()');
            break;
        case 2:
            menustop();
            burger = 1;
            console.log('Animation:Menustop()');
            break;
    }
});