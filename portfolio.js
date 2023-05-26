//変更禁止！
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});

//スクロールアクションの設定
const targetElem = document.querySelector('.targetElem');