document.querySelector('.burger').addEventListener('click', function (e) {
    e.preventDefault;
    this.className = this.className === 'burger' ? 'burger on' : 'burger';
});
//リンク先指定
document.querySelectorAll('.link')[0].addEventListener('click', function(){
    location.href = 'https://sites.google.com/view/nksteam-os/%E3%83%9B%E3%83%BC%E3%83%A0';
});
document.querySelectorAll('.link')[1].addEventListener('click', function(){
    location.href = '#dolphin';
});
//スクロール時のふわふわ
document.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    if (scroll > 983){
        alert('スクロールされた');
    }else{
    
    }
});