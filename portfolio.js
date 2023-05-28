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
const hidden = document.querySelectorAll('.link');

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
    rootMargin: '-50px',
}
const hidden2 = document.querySelectorAll('.title');

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

//次プログラムするとき変えるけど、アニメーションごとにオブザーバーを分けて同じアニメーションのクラスを作らないとダメ。