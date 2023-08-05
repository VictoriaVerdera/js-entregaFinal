let salir = false;
let respuesta;
let textoAlimentosRicos = "Alimentos ricos en vitamina ";

const divProductos = document.getElementById('productos')
const divVitamina = document.getElementById('vitaminas')
const divRecetas = document.getElementById('recetas')

class Alimento {

    constructor(nombre, calorias, precio) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.precio = precio;
    }

    caloriasCadaCienGramos() {
        //alert(`100grs de ${this.nombre} tienen ${this.calorias} calorías.`);
        divProductos.innerHTML = ''

        const productoSeleccionado = `Producto :${this.nombre}, precio: ${this.precio}, calorías: ${this.calorias} `

        localStorage.setItem('Producto', productoSeleccionado)

        console.log(localStorage)
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
                <p> 
                    100 grs de 
                    <strong> ${this.nombre} </strong> 
                    tienen: 
                    <strong> ${this.calorias} </strong> 
                    calorías.
                </p>`;
        divProductos.appendChild(contenedor);
    }
}

let listaAlimentos = [];

const alimento1 = new Alimento("salmon", 208, 100)
const alimento2 = new Alimento("hígado", 165, 200)
const alimento3 = new Alimento("huevo", 155, 300)
const alimento4 = new Alimento("papa", 86, 150)
const alimento5 = new Alimento("brócoli", 34, 500)
const alimento6 = new Alimento("tomate", 20, 350)
const alimento7 = new Alimento("queso", 402, 600)
const alimento8 = new Alimento("manzana", 52, 550)
const alimento9 = new Alimento("frutilla", 25, 800)

listaAlimentos.push(alimento1, alimento2, alimento3, alimento4, alimento5, alimento6, alimento7, alimento8, alimento9);

let a = ["salmón", "hígado vacuno", "espinaca", "batatas", "zanahoria", "brócoli", "calabaza", "melón", "mango", "manzana"];
let b = ["cereal integral", "carne", "pescado", "huevo", "legumbre"];
let c = ["brocoli", "frutilla", "melón", "papa", "tomate"];
let d = ["pescado graso", "hígado", "yema de huevo", "queso", "hongo"];


function queAlimentosTienenXVitamina(vit) {
    let vitAlimento;
    let divVitamina = document.getElementById("vitaminas");
    divVitamina.innerHTML = ''
    let contenedor = document.createElement("div");
    let listaVitAlimento = document.createElement("ul");

    switch (vit) {
        case 'A':
            vitAlimento = a.join(", ");

            localStorage.setItem('Vitamina', vit)
            console.log(localStorage)

            contenedor.appendChild(listaVitAlimento);

            for (const alim of a) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento.appendChild(item);
            }
            contenedor.innerHTML = `
                    <h2> ${textoAlimentosRicos} A: </h2>
                    ${listaVitAlimento.outerHTML}`;
            break;
        case 'B':
            vitAlimento = b.join(", ");

            localStorage.setItem('Vitamina', vit)
            console.log(localStorage)

            contenedor.appendChild(listaVitAlimento);

            for (const alim of b) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento.appendChild(item);
            }
            contenedor.innerHTML = `
                <h2> ${textoAlimentosRicos} B: </h2>
                ${listaVitAlimento.outerHTML}`;
            break;
        case 'C':
            vitAlimento = c.join(", ");

            localStorage.setItem('Vitamina', vit)
            console.log(localStorage)

            contenedor.appendChild(listaVitAlimento);

            for (const alim of c) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento.appendChild(item);
            }
            contenedor.innerHTML = `
                <h2> ${textoAlimentosRicos} C: </h2>
                ${listaVitAlimento.outerHTML}`;
            break;
        case 'D':
            vitAlimento = d.join(", ");

            localStorage.setItem('Vitamina', vit)
            console.log(localStorage)

            contenedor.appendChild(listaVitAlimento);

            for (const alim of d) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento.appendChild(item);
            }
            contenedor.innerHTML = `
                <h2> ${textoAlimentosRicos} D: </h2>
                ${listaVitAlimento.outerHTML}`;
            break;
    }
    divVitamina.appendChild(contenedor);
}

function caloriasPorReceta() {
    let seguir = true;
    let sumaCalorias = 0;

    let divReceta = document.getElementById("recetas");
    divVitamina.innerHTML = ''
    let contenedor = document.createElement("div");

    let listaReceta = document.createElement("ul");
    contenedor.appendChild(listaReceta);

    while (seguir) {

        let respuesta = prompt("Selecciona un alimento de la lista: [1] salmón, [2] hígado, [3] huevo, [4]papa, [5] brócoli, [6] tomate, [7] queso, [8] manzana o [9] frutilla");

        let cantidad = prompt("Ingrese el número de gramos (minimo 100gr).") / 100;
        sumaCalorias += (listaAlimentos[respuesta - 1].calorias * cantidad);

        let item = document.createElement("li");
        item.innerHTML = `${listaAlimentos[respuesta - 1].nombre} - ${cantidad * 100}grs`;
        listaReceta.appendChild(item);

        if ("N" == prompt("Desea sumar otro alimento? [S] Si, [N] No").toUpperCase()) {
            alert("La suma de calorías para esa receta es: " + sumaCalorias);
            contenedor.innerHTML = `
                    <h2> La suma de calorías para esa receta es: ${sumaCalorias} </h2>
                    <h3> Ingredientes y cantidades: </h3>
                    ${listaReceta.outerHTML}`;
            document.body.appendChild(contenedor);
            seguir = false;
        }
    }

    divReceta.appendChild(contenedor);
}
/*
 
while (!salir) {
    respuesta = prompt("Seleccione la opción deseada: [A] Buscar el índice calórico de un alimento; [B] Buscar alimentos por vitamina; [C] Calcular las calorías de una receta. [X] Salir")
    respuesta = respuesta.toUpperCase();
 
    const listaOpciones = ["Selecciona un alimento de la lista: [1] salmón, [2] hígado, [3] huevo, [4]papa, [5] brócoli, [6] tomate, [7] queso, [8] manzana o [9] frutilla", "Selecciona una vitamina: A, B, C, D."];
 
    if (respuesta == "A") {
        let alimentoCaloria = prompt(listaOpciones[0]);
        listaAlimentos[alimentoCaloria - 1].caloriasCadaCienGramos();
        // Buscar el índice calórico de un alimento
    } else if (respuesta == "B") {
        // Buscar alimentos por vitamina
        let vitamina = prompt(listaOpciones[1]).toUpperCase();
        queAlimentosTienenXVitamina(vitamina);
    } else if (respuesta == "C") {
        caloriasPorReceta();
        // Calcular las calorías de una receta
    } else if (respuesta == "X") {
        salir = true;
    } else {
        alert("Respuesta incorrecta, seleccione una opción.");
    }
}
*/

/* OPCION A */

//////////// A
let alimentoCaloriasSeleccionado = document.getElementById("alimentoCaloria");
alimentoCaloriasSeleccionado.onchange = (e) => {
    const productoSeleccionado = e.target.value

    if (productoSeleccionado != '0') {
        const seleccion = listaAlimentos.find(prod => prod.nombre === productoSeleccionado)
        seleccion.caloriasCadaCienGramos();
    }
    else {
        alert('No has seleccionado alimentos')
    }

}

/* OPCION B */
let alimentosVitaminaSelect = document.getElementById("alimentosVitamina");

alimentosVitaminaSelect.onchange = () => {
    let vitSeleccionada = alimentosVitaminaSelect.options[alimentosVitaminaSelect.selectedIndex].innerText;

    console.log(vitSeleccionada)

    queAlimentosTienenXVitamina(vitSeleccionada);
}

/* OPCION C */
//caloriasPorReceta();