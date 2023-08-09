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

/* OPCION A */

//////////// A
let alimentoCaloriasSeleccionado = document.getElementById("alimentoCaloria");
alimentoCaloriasSeleccionado.onchange = (e) => {
    const productoSeleccionado = e.target.value

    if (productoSeleccionado != '0') {
        let seleccion = listaAlimentos.find(prod => prod.nombre === productoSeleccionado)
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
let alimentoParaReceta = document.getElementById("alimentosReceta");
console.log(alimentoParaReceta)

let seleccionReceta = "";

alimentoParaReceta.onchange = (e) => {
    const alimSeleccionado = e.target.value;
    seleccionReceta = listaAlimentos.find(alim => alim.nombre === alimSeleccionado)

    console.log(alimSeleccionado, seleccionReceta);
}

let gramosSeleccionados = document.getElementById("gramos").value;

let sumaCalorias = 0;



function agregarAReceta() {

    let divReceta = document.getElementById("recetas");
    divReceta.innerHTML = '';
    let contenedor = document.createElement("div");

    let listaReceta = document.createElement("ul");
    contenedor.appendChild(listaReceta);

    gramosSeleccionados = document.getElementById("gramos").value;

    /////// nuevo, parte del alimento seleccionado
    if (alimentoParaReceta != '0') {
        let seleccionadoAlimentoReceta = listaAlimentos.find(prod => prod.nombre === alimentoParaReceta)
        ///////// nuevo, parte de los gramos seleccionados
        if (gramosSeleccionados >= 100) {

            let cantidad = gramosSeleccionados / 100;
            console.log("seleccion calorias " + seleccionadoAlimentoReceta.calorias)
            //sumaCalorias += (seleccion.calorias * cantidad);

            let item = document.createElement("li");
            item.innerHTML = `${listaAlimentos[respuesta - 1].nombre} - ${cantidad * 100}grs`;
            listaReceta.appendChild(item);

            contenedor.innerHTML = `
                    <h2> La suma de calorías para esa receta es: ${sumaCalorias} </h2>
                    <h3> Ingredientes y cantidades: </h3>
                    ${listaReceta.outerHTML}`;
            document.body.appendChild(contenedor);

            divReceta.appendChild(contenedor);

        }
        else {
            alert('Seleccione una cantidad de gramos, minimo 100')
        }
    }
    else {
        alert('No has seleccionado alimentos')
    }

}

