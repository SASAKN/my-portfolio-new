//上に戻るボタン
window.addEventListener("scroll", function () {
	const elm = document.getElementById("top");
	const scroll = window.pageYOffset;
	if (scroll > 2684) {
		elm.classList.remove('notactive-top');
		elm.classList.add('active-top');
	} else {
		elm.classList.add('notactive-top');
		elm.classList.remove('active-top');
	}
  });