
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    scrollNav();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-header a');
    const enlaces2 = document.querySelectorAll('.navsi a');
    
    enlaces.forEach(enlace => {

        enlace.addEventListener('click', function(e){

            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            
            seccion.scrollIntoView({ behavior : "smooth"});

        });
    });

    enlaces2.forEach(enlace => {

        enlace.addEventListener('click', function(e){

            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({ behavior : "smooth"});

        });
    });
}
