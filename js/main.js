'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    
    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/

    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        smartSpeed: 1200,
        autoHeight: true,
        autoplay: false
    });
    

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

//scroll aniamtion Effect GPt
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".hidden");

    let observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => { // Staggered animation
                    entry.target.classList.add("show");
                }, index * 200); // Har element thoda delay se show hoga
                observer.unobserve(entry.target); // Ek baar trigger hone ke baad dobara na ho
            }
        });
    }, { threshold: 0.2 }); // Jab 20% visible hoga tab trigger hoga

    sections.forEach(section => observer.observe(section));
});



//end animation

// testmentials slider

// FAQ Section Script Start
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function () {
            this.nextElementSibling.style.display =
                this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// FAQ Section Script End

// //* state section custom jackets */
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    
    function update() {
        let now = new Date().getTime();
        let progress = Math.min((now - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * range + start);
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    update();
}

document.addEventListener("DOMContentLoaded", function() {
    animateValue("customers", 0, 41000, 2000);
    animateValue("requests", 0, 478000, 2500);
    animateValue("countries", 0, 135, 1500);
    animateValue("reviews", 0, 3900, 2000);
});

//* end state section custom jackets */

const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.getElementById('chat-container');

// WhatsApp Link (Make sure to replace with your actual WhatsApp number)
const whatsappNumber = '923001234567'; // Your WhatsApp number in international format
const whatsappMessage = 'Hi, I have a question about leather jackets.'; // Predefined message

// List of predefined chatbot responses for leather-related questions
const chatbotResponses = [
  { keywords: ["hello", "hi", "hey", "greetings"], response: "Hello! How can I assist you with our leather jackets today?" },
  { keywords: ["price", "cost", "how much", "price of leather jacket"], response: "Our leather jackets start at $150, depending on the style. Would you like to know more about our different designs?" },
  { keywords: ["style", "types", "designs", "variety"], response: "We offer various styles including classic, biker, and custom designs. What's your preferred style?" },
  { keywords: ["shipping", "delivery", "how long", "when will it arrive"], response: "We offer worldwide shipping, and delivery typically takes 5-7 business days. Need help with shipping details?" },
  { keywords: ["leather", "material", "skin", "leather jacket", "cowhide", "goatskin", "sheepskin"], response: "Our leather jackets are crafted from high-quality cowhide, goatskin, or sheepskin, ensuring durability and comfort. Would you like to know more about the material used?" },
  { keywords: ["care", "maintenance", "cleaning", "preserve", "how to care for leather"], response: "To care for your leather jacket, avoid direct sunlight and moisture. Regularly clean it with a soft cloth and treat it with leather conditioner. Would you like more tips on maintaining your leather jacket?" },
  { keywords: [], response: "Sorry, I didn't quite get that. Could you please rephrase or ask something else related to leather jackets?" }
];

// Open the chat
function openChat() {
  chatContainer.style.display = 'flex';
}

// Close the chat
function closeChat() {
  chatContainer.style.display = 'none';
}

// Function to send a message
function sendMessage(message, sender = 'user') {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to generate bot responses
function getBotResponse(userInput) {
  let response = chatbotResponses[chatbotResponses.length - 1].response; // Default response if no match found
  for (let i = 0; i < chatbotResponses.length - 1; i++) {
    for (let keyword of chatbotResponses[i].keywords) {
      if (userInput.toLowerCase().includes(keyword)) {
        response = chatbotResponses[i].response;
        break;
      }
    }
    if (response !== chatbotResponses[chatbotResponses.length - 1].response) {
      break;
    }
  }

  // Display response
  sendMessage(response, 'bot');
  
  // Add WhatsApp button after the bot's response
  if (response) {
    setTimeout(() => {
      const whatsappButton = document.createElement('button');
      whatsappButton.innerText = "Continue on WhatsApp";
      whatsappButton.classList.add('whatsapp-button');
      whatsappButton.addEventListener('click', () => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      });
      chatMessages.appendChild(whatsappButton);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
  }
}

// Handle sending the message
sendBtn.addEventListener('click', () => {
  const userInput = chatInput.value.trim();
  if (userInput) {
    sendMessage(userInput, 'user');
    chatInput.value = '';  // Clear input field after sending
    setTimeout(() => getBotResponse(userInput), 500);
  }
});

// Optionally, allow sending by pressing 'Enter'
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

// script End
// Swiper JS -->

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,  // Infinite loop
        autoplay: {
            delay: 3000, // 3-second auto-slide
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
/* add cart hero section script */
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




