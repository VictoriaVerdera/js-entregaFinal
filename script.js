let salir = false;
let respuesta;
let textoAlimentosRicos = "Alimentos ricos en vitamina ";


class Alimento {

    constructor(nombre, calorias, precio) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.precio = precio;
    }

    caloriasCadaCienGramos() {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
                <p> 
                    100 grs de 
                    <strong> ${this.nombre} </strong> 
                    tienen: 
                    <strong> ${this.calorias} </strong> 
                    calorías.
                </p>`;
        document.body.appendChild(contenedor);
    }

}

let listaAlimentos = new Array();

listaAlimentos.push(new Alimento("salmon", 208, 100));
listaAlimentos.push(new Alimento("hígado", 165));
listaAlimentos.push(new Alimento("huevo", 155));
listaAlimentos.push(new Alimento("papa", 86));
listaAlimentos.push(new Alimento("brócoli", 34));
listaAlimentos.push(new Alimento("tomate", 20));
listaAlimentos.push(new Alimento("queso", 402));
listaAlimentos.push(new Alimento("manzana", 52));
listaAlimentos.push(new Alimento("frutilla", 25));

let a = ["salmón", "hígado vacuno", "espinaca", "batatas", "zanahoria", "brócoli", "calabaza", "melón", "mango", "manzana"];
let b = ["cereal integral", "carne", "pescado", "huevo", "legumbre"];
let c = ["brocoli", "frutilla", "melón", "papa", "tomate"];
let d = ["pescado graso", "hígado", "yema de huevo", "queso", "hongo"];



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

function queAlimentosTienenXVitamina(vit) {
    let vitAlimento;
    switch (vit) {
        case 'A':
            /*
            vitAlimento = a.join(", ");
            alert(`${textoAlimentosRicos} A: ${vitAlimento}`);
            */
            let contenedor = document.createElement("div");
            let listaVitAlimento = document.createElement("ul");

            contenedor.appendChild(listaVitAlimento);

            for (const alim of a) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento.appendChild(item);
            }
            contenedor.innerHTML = `
                    <h2> ${textoAlimentosRicos} A: </h2>
                    ${listaVitAlimento.outerHTML}`;
            document.body.appendChild(contenedor);

            break;
        case 'B':
            let contenedor1 = document.createElement("div");
            let listaVitAlimento1 = document.createElement("ul");

            contenedor1.appendChild(listaVitAlimento1);

            for (const alim of b) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento1.appendChild(item);
            }
            contenedor1.innerHTML = `
                    <h2> ${textoAlimentosRicos} B: </h2>
                    ${listaVitAlimento1.outerHTML}`;
            document.body.appendChild(contenedor1);
            break;
        case 'C':
            let contenedor2 = document.createElement("div");
            let listaVitAlimento2 = document.createElement("ul");

            contenedor2.appendChild(listaVitAlimento2);

            for (const alim of c) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento2.appendChild(item);
            }
            contenedor2.innerHTML = `
                    <h2> ${textoAlimentosRicos} C: </h2>
                    ${listaVitAlimento2.outerHTML}`;
            document.body.appendChild(contenedor2);
            break;
        case 'D':
            let contenedor3 = document.createElement("div");
            let listaVitAlimento3 = document.createElement("ul");

            contenedor3.appendChild(listaVitAlimento3);

            for (const alim of d) {
                let item = document.createElement("li");
                item.innerHTML = alim;
                listaVitAlimento3.appendChild(item);
            }
            contenedor3.innerHTML = `
                    <h2> ${textoAlimentosRicos} D: </h2>
                    ${listaVitAlimento3.outerHTML}`;
            document.body.appendChild(contenedor3);
            break;
    }
}

function caloriasPorReceta() {
    let seguir = true;
    let sumaCalorias = 0;
    while (seguir) {
        let respuesta = prompt("Selecciona un alimento de la lista: [1] salmón, [2] hígado, [3] huevo, [4]papa, [5] brócoli, [6] tomate, [7] queso, [8] manzana o [9] frutilla");
        let cantidad = prompt("Ingrese el número de gramos (minimo 100gr).") / 100;
        sumaCalorias += (listaAlimentos[respuesta - 1].calorias * cantidad);
        if ("N" == prompt("Desea sumar otro alimento? [S] Si, [N] No").toUpperCase()) {
            alert("La suma de calorías para esa receta es: " + sumaCalorias);
            seguir = false;
        }
    }
}


