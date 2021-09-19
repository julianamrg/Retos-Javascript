const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

/* este evento funciona con el scrooll */
checkBoxes();
/* nombre de la función aqui arriba */

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    /* poner en movimiento el boton 200/5*4 = 160 */

    /* para cada caja */
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        /* este metodo getBoundingClient Rect devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización. Este método devuelve un objeto DOMRect con ocho propiedades: left, top, right, bottom, x, y, width, height. */

        /*El condicional indica que si la parte superior de la caja es menor que el movimiento del boton disparador indica que debe mostrar la caja. De lo contrario, debe seguir mostrando la caja */

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
