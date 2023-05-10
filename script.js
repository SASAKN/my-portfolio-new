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
function note(){
    setTimeout(function(){
        location.href ='https://note.com/sasaken_23';
    },3000);
    showloadscreen();
}
function youtube(){
    setTimeout(function(){
        location.href ='https://youtube.com/@sasaken23';
    },3000);
    showloadscreen();
}
function blog(){
    setTimeout(function(){
        location.href ='https://kenkensasaken.blogspot.com';
    },3000);
    showloadscreen();
}
function github(){
    setTimeout(function(){
        location.href ='https://github.com/SASAKN/';
    },3000);
    showloadscreen();
}
function showloadscreen(){
    const loadsc = document.getElementById('loadsc');
    loadsc.classList.add('loadbegin');
    const loadp = document.querySelectorAll('#loadsc p')[0];
    loadp.classList.add('beginp');
    const progress = document.getElementById('progress');
    progress.classList.add('probegin');
}