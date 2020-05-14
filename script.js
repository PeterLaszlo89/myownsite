$(function(){

    $("#website").fadeIn(1200);
    
    $(window).scroll(function(){

        var navbar = $("#navbar");

        $(navbar).toggleClass("scrolled", $(this).scrollTop() > 420);

    });

    window.sr = ScrollReveal();
    sr.reveal('#skillz div', {
      delay:750,
      duration: 1500,
      origin:'left',
      distance:'300px',
      viewFactor:0.2
    });

    $("#skillzbutton").on("click", function(){

        var skillzbutton = document.getElementById("skillz");

        skillzbutton.scrollIntoView({
            block: "start"});
    });
    $("#aboutmebutton").on("click", function(){

        var aboutmebutton = document.getElementById("aboutme");

        aboutmebutton.scrollIntoView({
            block: "start"});
        });
    $("#referencebutton").on("click", function(){

        var referencebutton = document.getElementById("scroll_reference");
    
        referencebutton.scrollIntoView({
            block: "start"});
        });
    $("#infobutton").on("click", function(){

        var infobutton = document.getElementById("scroll_info");
        
        infobutton.scrollIntoView({
            block: "start"});
        });
    });

//parallax

    window.onload = function(){                    
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}
