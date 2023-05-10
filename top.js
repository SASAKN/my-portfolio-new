document.addEventListener('DOMContentLoaded', function () {
        var entryElement = document.getElementById('stop');
        entryElement.addEventListener('click', function () {

                stop();
                function stop() {
                        var patha = 'stop.mp3';
                        var audiostop = new Audio(chrome.extension.getURL(patha));
                        audiostop.play();
                        document.write('<h1>このタブを閉じてください。</h1>');
                }
        });
});
document.addEventListener('DOMContentLoaded', function () {
        var entryElement = document.getElementById('start');
        entryElement.addEventListener('click', function () {

             
        });
});