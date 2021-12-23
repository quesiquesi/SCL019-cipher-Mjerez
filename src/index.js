var popup = document.getElementById('popup'),
overlay = document.getElementById('overlay'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

 btnCerrarPopup.addEventListener('click', function (e){
     e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');

 });