//変更禁止！
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});

//スクロールアクションの設定
window.addEventListener("scroll", function () {
	const elm = document.getElementById("back-btn");
	const scroll = window.pageYOffset;
	if (scroll > 200) {
		elm.classList.remove('notactive-bt');
		elm.classList.add('active-bt');
	} else {
		elm.classList.add('notactive-bt');
		elm.classList.remove('active-bt');
	}
  });