// changing background color on scroll 
let selectNav = document.querySelector('.navBar');

window.onscroll = function myFunction() {

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
        selectNav.classList.add('navBarChanged');
    else
        selectNav.classList.remove('navBarChanged');

}


// burger menu

document.querySelector('.burgerMenu').onclick = function () {

    document.querySelector('.responsiveNavParent').classList.toggle('responsiveNavParentChanged');


    document.querySelector('.topSlice').classList.toggle("changeTopSlice");// for animation on
    document.querySelector('.middleSlice').classList.toggle("changeMiddleSlice");//for removing middleSlice
    document.querySelector('.bottomSlice').classList.toggle("changeBottomSlice");



    document.querySelector('.responsiveNav a').onclick = function () {
        document.querySelector('.responsiveNavParent').classList.toggle('responsiveNavParentChanged');

        document.querySelector('.topSlice').classList.toggle("changeTopSlice");// for animation on
        document.querySelector('.middleSlice').classList.toggle("changeMiddleSlice");//for removing middleSlice
        document.querySelector('.bottomSlice').classList.toggle("changeBottomSlice");
    }

}
