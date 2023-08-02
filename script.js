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
        alert(`100grs de ${this.nombre} tienen ${this.calorias} calorías.`);
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
    respuesta = prompt("Seleccione la opción deseada: [A] Buscar el índice calórico de un alimento; [B] Buscar alimentos por vitamina; [C] Calcular las calorías de una receta. [X] Salir").toUpperCase();

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
            vitAlimento = a.join(", ");
            alert(`${textoAlimentosRicos} A: ${vitAlimento}`);
            break;
        case 'B':
            vitAlimento = b.join(", ");
            alert(`${textoAlimentosRicos} B: ${vitAlimento}`);
            break;
        case 'C':
            vitAlimento = c.join(", ");
            alert(`${textoAlimentosRicos} C: ${vitAlimento}`);
            break;
        case 'D':
            vitAlimento = d.join(", ");
            alert(`${textoAlimentosRicos} D: ${vitAlimento}`);
            break;
    }
}


function caloriasDeXAlimento(alimento) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
        <h2> 
            100 grs de 
            <strong> ${listaAlimentos[alimento - 1].nombre} </strong> 
            tienen: 
            <strong> ${listaAlimentos[alimento - 1].calorias} </strong> 
            calorías.
        </h2>`
    document.body.appendChild(contenedor);
}
/*
alert("100gr de " + listaAlimentos[alimento - 1].nombre + " tienen " + listaAlimentos[alimento - 1].calorias + "calorías.");
}
*/

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


