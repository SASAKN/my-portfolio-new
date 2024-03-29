//変更禁止！
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});

//上に戻るボタン
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
//下からのアニメーション
const options = {
    rootMargin: '-50px',
}
const hidden = document.querySelectorAll('.under-animation');

const observer = new IntersectionObserver(startanim);
hidden.forEach(hidden =>{
	observer.observe(hidden);
});
function startanim(entries){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add('under-active');
		}
	});
}

//左からのアニメーション
const options2 = {
    rootMargin: '-10px',
}
const hidden2 = document.querySelectorAll('.left-animation');

const observer2 = new IntersectionObserver(startanim2);
hidden2.forEach(hidden2 =>{
	observer2.observe(hidden2);
});
function startanim2(entries){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add('left-active');
		}
	});
}
//右からのアニメーション
const options3 = {
    rootMargin: '-10px',
}
const hidden3 = document.querySelectorAll('.right-animation');

const observer3 = new IntersectionObserver(startanim3);
hidden3.forEach(hidden3 =>{
	observer3.observe(hidden3);
});
function startanim3(entries){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.classList.add('right-active');
		}
	});
}
