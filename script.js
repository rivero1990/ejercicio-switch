const selectOpcionColor = document.querySelector("select");
const cuerpoDePagina = document.querySelector("body");

const COLOR_1 = "color 1";
const COLOR_2 = "color 2";
const COLOR_3 = "color 3";


function cambioEstetica() {

    switch (selectOpcionColor.value) {
        case COLOR_1:
            cuerpoDePagina.style.color = "white";
            cuerpoDePagina.style.backgroundColor = "black";
            selectOpcionColor.style.color = "white";
            selectOpcionColor.style.backgroundColor = "grey";
            break;
        case COLOR_2:
            cuerpoDePagina.style.color = "violet";
            cuerpoDePagina.style.backgroundColor = "orange";
            selectOpcionColor.style.color = "violet";
            selectOpcionColor.style.backgroundColor = "black";

        case COLOR_3:
            cuerpoDePagina.style.color = "pink";
            cuerpoDePagina.style.backgroundColor = "blue";
            selectOpcionColor.style.color = "pink";
            selectOpcionColor.style.backgroundColor = "green";

        default:
            break;
    }
}