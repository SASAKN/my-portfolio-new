//変更禁止！
document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});

//スクロールアクションの設定
const options = {
    rootMargin: '-50px 0px'
}
const intersection = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}
const observer = new IntersectionObserver(intersection, options);
const target = document.querySelector('.target');
observer.observe(target);