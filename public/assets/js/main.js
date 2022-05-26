$(document).ready(function(){
    $(window).scroll(function(){
        
        if (this.scrollY > 20){
            
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky")

        }

        //up-btn appear when met condition

        if (this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    //slide-up with up-btn script

    $(".scroll-up-btn").click(function(){
$("html").animate({
    scrollTop: 0
})
    })

    //togle menu/navbar script

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })

    //typing animation script
var typed = new Typed(".typing" , {
    strings: [ "Engineer", "Entrepreneur" , "Developer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true

})

var typed = new Typed(".typing-2" , {
    strings: [ "Engineer", "Entrepreneur" , "Developer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true

})

    //owl carousel script

    $(".carousel").owlCarousel({
        margin: 20, 
        loop: true, 
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }

    })


    //Download CV click event script

    // const downloadCvButton = document.querySelector("#download-cv");
    // downloadCvButton.addEventListener('click', () => {

    // })
});