$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('scroll-up-btn').removeClass("show");
        }
    });

    // script para alternar el menu/barra de navegacion
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //script para animacion de tipeo
    var typed = new Typed(".typing", {
        strings: ["Programador", "Desarrollador Backend", "Estudiante de Ingeniería en Sistemas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programador", "Desarrollador Backend", "Estudiante de Ingeniería en Sistemas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});