function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("pageUpButton").style.display = "block";
    } else {
        document.getElementById("pageUpButton").style.display = "none";
    }
}