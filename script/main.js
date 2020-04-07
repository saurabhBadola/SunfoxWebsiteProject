var slowLoad = window.setTimeout(function () {
    const getText = document.querySelector('.pre-loader h2');
    getText.textContent = "Slow Internet connection...";
}, 3000);


window.addEventListener('load', () => {
    // removing the loading page after fetching the data
    const loader = document.querySelector('.pre-loader');
    loader.className += ' hidden';
    window.clearTimeout(slowLoad);
});



// changing background color on scroll 

window.onscroll = function myFunction() {

    let defaultShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    function navStyle(color, shadow = defaultShadow) {
        let selectNav = document.querySelector('.navBar');

        selectNav.style.backgroundColor = color;
        selectNav.style.boxShadow = shadow;
    }

    if (window.innerHeight / 5 > window.scrollY) {
        navStyle('transparent', 'none');
    }
    else if (window.innerHeight > window.scrollY && window.innerHeight / 5 < window.scrollY) {
        navStyle('#ef4d58');
    }
    else if (window.innerHeight * 2 > window.scrollY && window.innerHeight < window.scrollY) {
        navStyle('#1a8dff');
    }
    else if (window.innerHeight * 3 > window.scrollY && window.innerHeight * 2 < window.scrollY) {
        navStyle('#1a8dff');
    }
    else if (window.innerHeight * 4 > window.scrollY && window.innerHeight * 3 < window.scrollY) {
        navStyle('#ef4d58')
    }
    else if (window.innerHeight * 5 > window.scrollY && window.innerHeight * 4 < window.scrollY) {
        navStyle('#1a8dff')
    }
    else if (window.innerHeight * 6 > window.scrollY && window.innerHeight * 5 < window.scrollY) {
        navStyle('#ef4d58');
    }

}

// carousel in JavaScript

var i = 0;
var images = [];
var time = 4000;
var path = '';

images[0] = "images/bgImage1.png";
images[1] = "images/bgImage2.png";
images[2] = "images/bgImage3.png";

function changeImage() {

    document.querySelector('.coverPage').style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}
window.onload = changeImage;


// burger menu for responsive design
document.querySelector('.burgerMenu').onclick = function () {
    document.querySelector('.responsiveNavParent').classList.add('responsiveNavParentChanged');
    document.querySelector('.crossOne').classList.add("changeTopSlice");
    document.querySelector('.crossTwo').classList.add("changeBottomSlice");
}

function changeOnClick() {
    document.querySelector('.responsiveNavParent').classList.remove('responsiveNavParentChanged');
    document.querySelector('.crossOne').classList.remove("changeTopSlice");
    document.querySelector('.crossTwo').classList.remove("changeBottomSlice");
}

document.querySelector('.crossSign').onclick = function () {
    changeOnClick();

}
document.querySelector('.responsiveNav a').onclick = function () {
    changeOnClick();
}