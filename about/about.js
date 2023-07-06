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
  //右からのアニメーション
const options4 = {
    rootMargin: '-5px',
}
const hidden4 = document.querySelectorAll('.b');

const observer4 = new IntersectionObserver(startanim4);
hidden4.forEach(hidden4 =>{
	observer4.observe(hidden4);
});
function startanim4(entries){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add('b-active');
		}
	});
}