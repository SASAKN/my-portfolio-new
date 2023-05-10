autoed();
function autoed() {
    setInterval(come2,5000);
    setInterval(sclool2,300000);
    setInterval(sclool,3000);
    setInterval(autosc,2000);
    setInterval(come,1000);
    setInterval(come2,300000);
    setInterval(finish,1800000);
    function autosc() {
        var asc = document.getElementsByClassName('v2-btn--more');
        var bsc = asc[0];
        bsc.click();
    }
    function come() {
        var count = document.getElementsByClassName('v2-message__comment-button').length;
        var i;
            for (i = 0; i < count; i++) {
            document.getElementsByClassName('v2-message__comment-button')[i].click();
        }
    }
    function come2() {
        var count = document.getElementsByClassName('v2-message-reply-content__reply-button').length;
        var i;
            for (i = 0; i < count; i++) {
            document.getElementsByClassName('v2-message__comment-button')[i].click();
        }
    }
    
    function sclool() {
        window.scrollTo(0,document.body.scrollHeight);
    }
    function sclool2() {
        window.scrollTo(0, 0);
    }
    function finish() {
        document.write("<h1>Finish!</h1><br><h1>タイムラグが発生して未読数が減ります。</h1>");
    }
}
