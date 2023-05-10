//変数の設定
const elem = document.getElementById('smenu');
let burger = 1;
//動作の設定
function menuopen() {
    elem.className = 'animactive';
}
function menuclose() {
    elem.className = 'animclose1';
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
            console.log('Animation:メニューをオープンしました。');
            break;
        case 2:
            menuclose();
            burger = 1;
            console.log('Animation:メニューのストップを実行しました。');
            break;
    }
});