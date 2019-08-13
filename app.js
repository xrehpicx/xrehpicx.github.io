function show() {
    var eleList = ['.place1', '.place2', '.place3'];

    eleList.forEach(function (cl) {
        var toshow = document.querySelector(cl);
        var topPosition = toshow.getBoundingClientRect().top;
        var screenPosition = window.innerHeight/2;
        if (topPosition < screenPosition) {
            toshow.style.opacity = 1;
            toshow.style.transform = "translateY(0)";
        }else{
            toshow.style.opacity = 0;
            toshow.style.transform = "translateY(25)";
        }
    });
}

window.addEventListener('scroll', show);
