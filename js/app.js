$(window).on("load",function() {
    $(".loader").fadeOut(500,function() {
        $(".loader").remove();
    });
});

new WOW().init();

$(document).ready(function(){

    var waypoints = $('#home').waypoint(function(direction) {
        $(".nav-link").removeClass("add-color");
        $(".nav-link[href='#home']").addClass("add-color");
    });

    var waypoints = $('#biography').waypoint(function(direction) {
        $(".nav-link").removeClass("add-color");
        $(".nav-link[href='#biography']").addClass("add-color");
    },{
        offset: '25%'
    });

    var waypoints = $('#service').waypoint(function(direction) {
        $(".nav-link").removeClass("add-color");
        $(".nav-link[href='#service']").addClass("add-color");
    },{
        offset: '25%'
    });

    var waypoints = $('#price').waypoint(function(direction) {
        $(".nav-link").removeClass("add-color");
        $(".nav-link[href='#price']").addClass("add-color");
    },{
        offset: '25%'
    });

    var waypoints = $('#contact').waypoint(function(direction) {
        $(".nav-link").removeClass("add-color");
        $(".nav-link[href='#contact']").addClass("add-color");
    },{
        offset: '25%'
    });

    let screenHeight = $(window).height();
    // console.log(screenHeight);

    $(window).scroll(function() {
        let currentPositon = $(this).scrollTop();
        // console.log(currentPositon);
        if(currentPositon >= screenHeight) {
            $(".navigation").addClass("side-nav");
            $(".nav-link").addClass("color-change");
        }else{
            $(".navigation").removeClass("side-nav");
            $(".nav-link").removeClass("color-change");

        }
    });

    $("#bars").click(function() {
        $(".navbar-nav").slideToggle();
    });

    $('.slide').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
  });
