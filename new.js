
                var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?87960';
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                var options = {
                "enabled":true,
                "chatButtonSetting":{
                    "backgroundColor":"#00e785",
                    "ctaText":"Chat with us",
                    "borderRadius":"25",
                    "marginLeft": "0",
                    "marginRight": "20",
                    "marginBottom": "20",
                    "ctaIconWATI":false,
                    "position":"right"
                },
                "brandSetting":{
                    "brandName":"Wati",
                    "brandSubTitle":"undefined",
                    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
                    "welcomeText":"Hi there!\nHow can I help you?",
                    "messageText":"Hello, %0A I have a question about {{page_link}}",
                    "backgroundColor":"#00e785",
                    "ctaText":"Chat with us",
                    "borderRadius":"25",
                    "autoShow":false,
                    "phoneNumber":"919732414967"
                }
                };
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            



// search bar animation 
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const phrases = [
    
    "Search for Cakes",
    "Search for Gifts",
    "Search for Chocolates",
    "Search for Plants",
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let userInputFlag = false;

  function typeText() {
    if (userInputFlag) {
      stopAnimation();
      return;
    }

    searchInput.value = phrases[currentPhraseIndex].substring(0, currentCharIndex);
    currentCharIndex++;

    if (currentCharIndex > phrases[currentPhraseIndex].length) {
      setTimeout(eraseText, 1000); // Wait for 1 second before erasing
    } else {
      setTimeout(typeText, 100); // Type the next character after a short delay
    }
  }

  function eraseText() {
    if (userInputFlag) {
      stopAnimation();
      return;
    }

    if (currentCharIndex >= 0) {
      searchInput.value = phrases[currentPhraseIndex].substring(0, currentCharIndex);
      currentCharIndex--;
      setTimeout(eraseText, 50); // Erase the previous character after a short delay
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next phrase
    }
  }

  function stopAnimation() {
    // Add any additional cleanup logic if needed
    console.log("Animation stopped");
  }

  // Add event listener to the input field to detect user input
  searchInput.addEventListener("click", function () {
    userInputFlag = true;
    this.value = '';
    stopAnimation();
  });

  // Start the typing animation
  typeText();
});



window.onclick = function (event) {
  document.getElementById("livesearch2").style.display = "none";
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
    {
      loop:true,
      // margin:100,
      nav:false,
      autoplay:false,
      autoplayTimeout:1000,
      // stagePadding:50,
      responsive:
      {
          0:{
              items:1
          },
          320:{
              items:2
          },
  
          480:{
              items:3
              // autoplay:true
          },
          600:{
              items:3
              // autoplay:true
          },
          800:{
            items:4,
            // spaceBetween:20
          },
          1000:{
            items:5,
            // spaceBetween:20
          },
          1400:{
              items:7
          },
          2000:{
              items:9
          },
          2100:{
              items:10
          }
      }  
    });
    // Custom Button
  $('.customNextBtn').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel', [300]);
  });
});
  


//Testimonial swiper
var swiper = new Swiper('.slide-content', {
  // speed: 2000,
  slidesPerView: 1,   
  spaceBetween:30,
  // slidesPerGroup:3,   
  loop: true,
  centerSlide: true,
  fade:true,
  grabCursor:true,
  loopFillGroupWithBlank:true,
  pagination:{
    el:".swiper-pagination",
    clickable:true,
    dynamicBullets:true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView:2,
    },
    520:{
      slidesPerView:3,
    },
    950:{
      slidesPerView:4,
    },
  },
});

// for changing image 
window.addEventListener("DOMContentLoaded", function(e) {
  
  var stage = document.getElementById("stage");
  var fadeComplete = function(e) { stage.appendChild(arr[0]); };
  var arr = stage.getElementsByTagName("a");
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

}, false);


// for testimonial
let testimonialIndex = 1;
showTestimonial(testimonialIndex);

function changeTestimonial(n) {
    showTestimonial(testimonialIndex += n);
}

function showTestimonial(n) {
    let testimonials = document.getElementsByClassName("testimonial-new");

    if (n > testimonials.length) {
    testimonialIndex = 1;
    }

    if (n < 1) {
    testimonialIndex = testimonials.length;
    }

    for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
    }

    testimonials[testimonialIndex - 1].style.display = "block";
    
}

//testimonial time interval
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 3000); 
  }

$(document).ready(function () {

  $('#popdiv-bg2').hide();
  $('#show_div').hide();


});

$("#close-btn2").click(function () {
  $('#popdiv-bg2').hide();
});

$("#searchbtnn").click(function () {
  $('#popdiv-bg2').show();
});

function onSubmitClick1() {
  $('#popdiv-bg2').hide();
  event.stopPropagation();
}

function show_delivery_modal() {
  $('#popdiv-bg2').show();
}



function toggleText14() {
  var x = document.getElementById("Myid14");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText10() {
  var x = document.getElementById("Myid10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function toggleText11() {
  var x = document.getElementById("Myid11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText12() {
  var x = document.getElementById("Myid12");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText13() {
  var x = document.getElementById("Myid13");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// for flowers button 
const toggleButton = document.getElementById("dropdown2");
const hiddenDiv = document.getElementById("Myid10");

toggleButton.addEventListener("click", () => {
  if (hiddenDiv.style.display === "none") {
      hiddenDiv.style.display = "block";
  } else {
      hiddenDiv.style.display = "none";
  }
});

toggleButton.addEventListener("mouseover", () => {
  hiddenDiv.style.display = "block";
  toggleButton.addEventListener("mouseout", () => {
    hiddenDiv.style.display = "none";
  });
});

hiddenDiv.addEventListener("mouseover", () => {
  hiddenDiv.style.display = "block";
});
hiddenDiv.addEventListener("mouseout", () => {
  hiddenDiv.style.display = "none";
});

// cakes 

const toggleButton1 = document.getElementById("dropdown3");
const hiddenDiv1 = document.getElementById("Myid11");

toggleButton1.addEventListener("mouseover", () => {
  hiddenDiv1.style.display = "block";
  toggleButton1.addEventListener("mouseout", () => {
    hiddenDiv1.style.display = "none";
  });
});

hiddenDiv1.addEventListener("mouseover", () => {
  hiddenDiv1.style.display = "block";
});
hiddenDiv1.addEventListener("mouseout", () => {
  hiddenDiv1.style.display = "none";
});

toggleButton1.addEventListener("click", () => {
    if (hiddenDiv1.style.display === "none") {
        hiddenDiv1.style.display = "block";
    } else {
        hiddenDiv1.style.display = "none";
    }
});

// gifts 
const toggleButton2 = document.getElementById("dropdown4");
const hiddenDiv2 = document.getElementById("Myid12")

toggleButton2.addEventListener("mouseover", () => {
  hiddenDiv2.style.display = "block";
  toggleButton2.addEventListener("mouseout", () => {
    hiddenDiv2.style.display = "none";
  });
});

hiddenDiv2.addEventListener("mouseover", () => {
  hiddenDiv2.style.display = "block";
});
hiddenDiv2.addEventListener("mouseout", () => {
  hiddenDiv2.style.display = "none";
});

toggleButton2.addEventListener("click", () => {
    if (hiddenDiv2.style.display === "none") {
        hiddenDiv2.style.display = "block";
    } else {
        hiddenDiv2.style.display = "none";
    }
});

//occasions
const toggleButton10 = document.getElementById("dropdown15");
const hiddenDiv10 = document.getElementById("Myid15")

toggleButton10.addEventListener("mouseover", () => {
  hiddenDiv10.style.display = "block";
  toggleButton10.addEventListener("mouseout", () => {
    hiddenDiv10.style.display = "none";
  });
});

hiddenDiv10.addEventListener("mouseover", () => {
  hiddenDiv10.style.display = "block";
});
hiddenDiv10.addEventListener("mouseout", () => {
  hiddenDiv10.style.display = "none";
});

toggleButton10.addEventListener("click", () => {
    if (hiddenDiv10.style.display === "none") {
        hiddenDiv10.style.display = "block";
    } else {
        hiddenDiv10.style.display = "none";
    }
});

//relations
const toggleButton11 = document.getElementById("dropdown6");
const hiddenDiv12 = document.getElementById("Myid16")

toggleButton11.addEventListener("mouseover", () => {
  hiddenDiv12.style.display = "block";
  toggleButton11.addEventListener("mouseout", () => {
    hiddenDiv12.style.display = "none";
  });
});

hiddenDiv12.addEventListener("mouseover", () => {
  hiddenDiv12.style.display = "block";
});
hiddenDiv12.addEventListener("mouseout", () => {
  hiddenDiv12.style.display = "none";
});

toggleButton11.addEventListener("click", () => {
    if (hiddenDiv12.style.display === "none") {
        hiddenDiv12.style.display = "block";
    } else {
        hiddenDiv12.style.display = "none";
    }
});

// location 
const toggleButton3 = document.getElementById("dropdown5");
const hiddenDiv3 = document.getElementById("Myid13")

toggleButton3.addEventListener("mouseover", () => {
  hiddenDiv3.style.display = "block";
  toggleButton3.addEventListener("mouseout", () => {
    hiddenDiv3.style.display = "none";
  });
});

hiddenDiv3.addEventListener("mouseover", () => {
  hiddenDiv3.style.display = "block";
});
hiddenDiv3.addEventListener("mouseout", () => {
  hiddenDiv3.style.display = "none";
});

toggleButton3.addEventListener("click", () => {
    if (hiddenDiv3.style.display === "none") {
        hiddenDiv3.style.display = "block";
    } else {
        hiddenDiv3.style.display = "none";
    }
});

// Services 
const toggleButton4 = document.getElementById("dropdowntopheader");
const hiddenDiv4 = document.getElementById("dropdown-contenttopheader")

toggleButton4.addEventListener("click", () => {
    if (hiddenDiv4.style.display === "none") {
        hiddenDiv4.style.display = "block";
    } else {
        hiddenDiv4.style.display = "none";
    }
});


//currency
const toggleButton5 = document.getElementById("currency");
const hiddenDiv5 = document.getElementById("dropdown-content")

toggleButton5.addEventListener("click", () => {
  if (hiddenDiv5.style.display === "none") {
      hiddenDiv5.style.display = "block";
  } else {
      hiddenDiv5.style.display = "none";
  }
});

toggleButton5.addEventListener("mouseover", () => {
  hiddenDiv5.style.display = "block";
  // toggleButton5.addEventListener("mouseout", () => {
  //   hiddenDiv5.style.display = "none";
  // });
});


hiddenDiv5.addEventListener("mouseover", () => {
  hiddenDiv5.style.display = "block";
});
hiddenDiv5.addEventListener("mouseout", () => {
  hiddenDiv5.style.display = "none";
});




































































$(document).ready(function () {
  if ($(window).width() < 600) {

  }
});





$(document).ready(function () {
  if ($(window).width() < 767) {
    $("a.no-link").attr("href", "#")
  }
});

// $(function () {
//   switchable({
//     $element: $('#slides'),
//     interval: 3500,
//     animateSpeed: 2000

//   });
//   switchable({
//     $element: $('#slides1'),
//     interval: 3500,
//     effect: 'fade'
//   });
//   switchable({
//     $element: $('#scroll_wrap'),
//     interval: 3500,
//     showNav: true,
//     effect: 'fade',
//     type: 'imgScroll',
//     imgScroll: {
//       num: 2
//     }
//   });
// });






