var carousel = document.querySelector('.carousel');
var container = carousel.querySelector('.carousel-container');
var prevBtn = carousel.querySelector('.carousel-prev');
var nextBtn = carousel.querySelector('.carousel-next');
var pagination = carousel.querySelector('.carousel-pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
var totalItems = container.querySelectorAll('.carousel-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

sliderInterval = setInterval(next, 4500);

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);

/* Ideas para quitar un poco la monotonia del sitio:
-Tratar de romper la estructura original del sitio, jugar con un fondo blanco/negro/gris con las secciones en con las fotos actuales pero mas pequeñas y que sean mas interactivas. 
-Sobre los backgrounds probar insertar cuadros de texto con el nombre de la seccion
-En la seccion about, proponer que al hacer hover aparezca el texto con un fondo blanco con letras negras
-Layouts en la secciones photo? slider? https://codepen.io/jackcohle/pen/dyoyzyX
-seccion clientes(puede ser un slider con los logos y nombres)
-
*/