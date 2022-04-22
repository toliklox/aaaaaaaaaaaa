const Paths = document.querySelectorAll('textPath');

window.addEventListener('scroll', function(){

    Paths[0].setAttribute('startOffset', window.scrollY * 0.8);
    Paths[1].setAttribute('startOffset', window.scrollY *0.6);
    Paths[2].setAttribute('startOffset', window.scrollY *0.4);

})
