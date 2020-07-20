// Detecting slow internet connection
var slowLoad = window.setTimeout(function () {
    const getText = document.querySelector('.pre-loader h3');
    getText.textContent = "Slow Internet connection..";
}, 4000);

window.addEventListener('load', () => {
    // removing the loading page after fetching the data
    const loader = document.querySelector('.pre-loader');
    loader.className += ' hidden';
    window.clearTimeout(slowLoad);
});

// changing background color on scroll 

window.onscroll = function myFunction() {

    function navStyle(ourColor, ourShadow, ourTextColor) {
        // Changing navbar color
        let selectNav = document.querySelector('.navBar');
        selectNav.style.backgroundColor = ourColor;
        selectNav.style.boxShadow = ourShadow;
        // Changing text color
        let textColor = document.querySelectorAll('.navbarLinks li a');
        textColor.forEach(eachElement => eachElement.style.color = ourTextColor);
        // Changing responsive BurgerMenu Color
        let burgerMenuBg = document.querySelectorAll('.burgerMenu div');
        burgerMenuBg.forEach(eachElement => eachElement.style.backgroundColor = ourTextColor);

    }

    if (window.innerHeight / 5 > window.scrollY) {
        navStyle('transparent', 'none', '#f6f5f5');
    }
    else {
        let ourShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        navStyle('#f6f5f5', ourShadow, '#373737');

    }

}

// carousel in JavaScript

var i = 0;
var images = [];
var time = 4000;
var path = '';

images[0] = "images/bgImage1.png";
images[1] = "images/bgImage2.jpeg";
images[2] = "images/bgImage3.jpeg";
images[3] = "images/bgImage4.jpeg";
images[4] = "images/bgImage5.jpeg";

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
    changeOnClick()
}

//modal script for image map  sarthak
var modalData = {
    "B12": {
      "header":"Modal B12",
      "body":"Here's the text for Modal s1"
    },
    "B02": {
      "header":"Modal B02",
      "body":"Here's the text for Modal s1"
    },
    "B22": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s3"
      },
      "B32": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s4"
      },
      "B42": {
        "header":"Modal B02",
        "body":"Here's the text for Modal Bs502"
      },
      "B52": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s6"
      },
      "B62": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s7"
      },
      "B72": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s8"
      },
      "B82": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s9"
      },
      "B92": {
        "header":"Modal B02",
        "body":"Here's the text for Modal s10"
      }
  }
  
  //open modal on mouseover replace mouse over by click to open mouse on click
  $('.modal-btn').on('mouseover', function(e) {
    e.preventDefault();
    var modalId = $(e.currentTarget).data('modal-id');
    $('.modal-header').text(modalData[modalId].header);
    $('.modal-body').text(modalData[modalId].body);
    $('.modal').show();
  });
//close model on mpouseout
  $('.modal-btn').on('mouseout', function(e) {
        $('.modal').hide();
    });
    
  //close modal on mouse click
//   $('.close').on('click', function(e){
//       $('.modal').hide();
//   });
  

//  JUNK CODE ❌❌
    // else if (window.innerHeight > window.scrollY && window.innerHeight / 5 < window.scrollY) {
    //     navStyle('#ef4d58');
    // }
    // else if (window.innerHeight * 2 > window.scrollY && window.innerHeight < window.scrollY) {
    //     navStyle('#1a8dff');
    // }
    // else if (window.innerHeight * 3 > window.scrollY && window.innerHeight * 2 < window.scrollY) {
    //     navStyle('#1a8dff');
    // }
    // else if (window.innerHeight * 4 > window.scrollY && window.innerHeight * 3 < window.scrollY) {
    //     navStyle('#ef4d58')
    // }
    // else if (window.innerHeight * 5 > window.scrollY && window.innerHeight * 4 < window.scrollY) {
    //     navStyle('#1a8dff')
    // }
    // else if (window.innerHeight * 6 > window.scrollY && window.innerHeight * 5 < window.scrollY) {
    //     navStyle('#ef4d58');
    // }


// Changing HOver color of navbar
// let hoverColor = document.querySelectorAll('.navbarLinks li');
// hoverColor.forEach(eachElement => eachElement.style.borderBottom = `2px solid ${ourTextColor}`);
