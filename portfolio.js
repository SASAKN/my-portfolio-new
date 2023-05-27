//変更禁止！
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});

//スクロールアクションの設定
const header = document.querySelector('#top'),
		totop = document.getElementById('.back-top'),
		options = {
			root : null,
			rootMargin : "0px 0px 0px 0px",
			threshold: 1.0
		};

const observer = new IntersectionObserver((entries) => {
	for(const e of entries) {
		if(e.isIntersecting) {
			totop.classList.remove('active-bt');
		} else{
			totop.classList.add('active-bt');
		}
	}
}, options);
observer.observe(header);