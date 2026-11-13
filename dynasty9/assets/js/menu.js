const boton = document.querySelector('.menu');
const menu = document.querySelector('.lMenu');

boton.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    boton.classList.toggle('activo', abierto);
});