var gastoTotal = 0
var personasCant = 0

function datos(){
    var nombre = document.getElementById("nombre-persona");
    var gasto = document.getElementById("gasto-persona");
    var lista = document.getElementById("lista");
    if(nombre.value != "" && gasto.value != ""){
        personasCant = personasCant + 1;
        var li = document.createElement("li");
        li.innerText = nombre.value + ": $" + gasto.value;
        gastoTotal = gastoTotal + parseFloat(gasto.value, 10);
        lista.appendChild(li);
        nombre.value = "";
        gasto.value = "";
    }else{
        alert("Ingrese un valor valido en el formulario");
    }
}

function totalGastado(total) {
    var displayTotal = document.getElementById("total");
    if (isNaN(total)){
        displayTotal.innerText = "Total gastado::"
    } else{
        displayTotal.innerText = "Total gastado:: $" + total;
    }
    
}

function promedio(total, gente) {
    if (gente != 0){
        return "$" + (total / gente).toString();
    } else {
        return ""
    }
    
}

function pagoIndividual() {
    var displayAporteIndividual = document.getElementById("aporte-individual");
    var aporteIndividual = "Cada persona debe pagar: " + promedio(gastoTotal, personasCant);
    displayAporteIndividual.innerText = aporteIndividual;
}


function calcular(){
    datos();
    // alert("Cantidad de personas:" + personasCant);
    totalGastado(gastoTotal);
    pagoIndividual();
}