const selectOpcionColor = document.querySelector("select");
const cuerpoDePagina = document.querySelector("body");
const imagenColor = document.querySelector("img");

const OPCION_1 = "color 1";
const OPCION_2 = "color 2";
const OPCION_3 = "color 3";

const COLOR_OPC_1 = "white";
const COLOR_OPC_2 = "violet";
const COLOR_OPC_3 = "pink";

const IMG_1 = "https://th.bing.com/th/id/OIP.GA-nXuIGTsfbL6ECYFfr7QHaIa?w=188&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMG_2 = "https://th.bing.com/th/id/OIP.zjZ9kASwer7afM6fb1VkOAHaFB?w=279&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMG_3 = "https://th.bing.com/th/id/OIP.JtvUVT0eocxK4YqfbAoE_gHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7";

function cambioEstetica() {

    switch (selectOpcionColor.value) {
        case OPCION_1:
            cuerpoDePagina.style.color = COLOR_OPC_1;
            cuerpoDePagina.style.backgroundColor = "black";
            selectOpcionColor.style.color = COLOR_OPC_1;
            imagenColor.src = IMG_1;
            break;
        
        case OPCION_2:
            cuerpoDePagina.style.color = COLOR_OPC_2;
            cuerpoDePagina.style.backgroundColor = "orange";
            selectOpcionColor.style.color = COLOR_OPC_2;
            imagenColor.src = IMG_2;    
            break;
       
        case OPCION_3:
            cuerpoDePagina.style.color = COLOR_OPC_3;
            cuerpoDePagina.style.backgroundColor = "blue";
            selectOpcionColor.style.color = COLOR_OPC_3;
            imagenColor.src = IMG_3;
            

        default:
            break;
    }
}