$(function(){

    $("#website").fadeIn(1200);
    
    $(window).scroll(function(){

        var navbar = $("#navbar");

        $(navbar).toggleClass("scrolled", $(this).scrollTop() > 420);

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
