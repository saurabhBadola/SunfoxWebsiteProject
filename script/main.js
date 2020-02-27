// changing background color on scroll 

window.onscroll = function myFunction() {
    let selectNav = document.querySelector('.navBar');
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
        selectNav.classList.add('navBarChanged');
    else
        selectNav.classList.remove('navBarChanged');

}


// burger menu

document.querySelector('.burgerMenu').onclick = function () {

    let displayMe = document.querySelector('.responsiveNavParent');

    if (displayMe.style.display === "none") {
        displayMe.style.display = "flex";
    } else {
        displayMe.style.display = "none";
    }
}
