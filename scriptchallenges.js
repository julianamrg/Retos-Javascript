let d = document;
/* this variable get all the elements from the document */

d.addEventListener("input", (e) => {
    let links = document.querySelectorAll(".exercises-table");
    /* this variable Links search all the elements a from the document */

    /* if the letter typed matches with some of the letter of elements a, it will show it and remove all the elements that are not doing match */
    if (e.target.matches(".seeker")) {
        /* Array.forEach() method calls a function for each element in an array.
         */
        links.forEach((el) => {
            /* It reviews all the values including upper o lower cases */
            el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("filter")
                : el.classList.add("filter");
        });
    }
});

/*
document.addEventListener("input", (e) => {
    let enlaces = document.querySelectorAll("a");

    if (e.target.matches(".buscador")) {
        enlaces.forEach((el) => {
            el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove("filter")
                : el.classList.add("filter");
        });
    }
});
*/
/*const challenges = [{ name: "hola" }, { name: "perro" }];

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () => {
    // console.log(formulario.value);
    resultado.innerHTML = "";

    const texto = formulario.value.toLowerCase();

    for (let challenge of challenges) {
        let name = challenge.name.toLowerCase();
        if (name.indexOf(texto) !== -1) {
            resultado.innerHTML = `
  <li>${challenge.name}</li>`;
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML += `<li> Producto no encontrado... </li>`;
    }
};
boton.addEventListener("click", filtrar);
*/
