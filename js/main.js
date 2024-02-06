const PORCENTAJEXDIAPESOS = 0.3013698630136;
const PORCENTAJEXDIADOLARES = 0.0013698630136;

function limitarDecimales(numero) {
    return Number(numero);
}

function solicitarInput(mensaje, validacion) {
    let input;
    do {
        input = prompt(mensaje);
        if (!validacion(input)) {
            alert("Por favor, ingrese un valor válido.");
        }
    } while (!validacion(input));
    return input;
}

function simularPlazoFijoPesos() {
    alert("Bienvenido al simulador de plazo fijo EN PESOS");

    let capital = solicitarInput("Capital a invertir. (Mínimo $1.500)", input => parseFloat(input) >= 1500);

    let dias = solicitarInput("Plazo (en días). (Mínimo 30 días - Máximo 365 días):", input => parseInt(input) >= 30 && parseInt(input) <= 365);

    let interesPorDia = (capital / 100) * PORCENTAJEXDIAPESOS;

    console.log("Esto te va a dar por día: $ " + limitarDecimales(interesPorDia).toFixed(2));
    alert("Esto te va a dar por día: $ " + limitarDecimales(interesPorDia).toFixed(2));

    let interesesGanados = interesPorDia * dias;
    let montoFinal = parseFloat(capital) + parseFloat(interesesGanados);

    console.log("Intereses ganados en " + dias +  " dias: $" + limitarDecimales(interesesGanados).toFixed(2));
    alert("Intereses ganados en " + dias +  " dias: $" + limitarDecimales(interesesGanados).toFixed(2));
    
    console.log("Monto final pasado los " + dias +  " dias: $" + limitarDecimales(montoFinal).toFixed(2));
    alert("Monto final pasado los " + dias +  " dias: $" + limitarDecimales(montoFinal).toFixed(2));
}

function simularPlazoFijoDolares() {
    alert("Bienvenido al simulador de plazo fijo EN DOLARES");

    capital = solicitarInput("Capital a invertir. (Mínimo USD 1.000)", input => parseFloat(input) >= 1000);

    dias = solicitarInput("Plazo (en días). (Mínimo 30 días - Máximo 365 días):", input => parseInt(input) >= 30 && parseInt(input) <= 365);

    interesPorDia = (capital / 100) * PORCENTAJEXDIADOLARES;

    console.log("Esto te va a dar por día: $ " + limitarDecimales(interesPorDia).toFixed(2));
    alert("Esto te va a dar por día: $ " + limitarDecimales(interesPorDia).toFixed(2));

    interesesGanados = interesPorDia * dias;
    montoFinal = parseFloat(capital) + parseFloat(interesesGanados);

    console.log("Intereses ganados en " + dias +  " dias: USD " + limitarDecimales(interesesGanados).toFixed(2));
    alert("Intereses ganados en " + dias +  " dias: $" + limitarDecimales(interesesGanados).toFixed(2));
    
    console.log("Monto final pasado los " + dias +  " dias: USD " + limitarDecimales(montoFinal).toFixed(2));
    alert("Monto final pasado los " + dias +  " dias: USD " + limitarDecimales(montoFinal).toFixed(2));
}

function main() {
    let bienvenida;
    do {
        bienvenida = solicitarInput("Bienvenidos al simulador de plazo fijo. Ingrese...\n1- Si desea hacer su simulador en PESOS\n2- Si desea hacer su simulador en DOLARES", input => input === "1" || input === "2");
        if (bienvenida !== "1" && bienvenida !== "2") {
            alert("Por favor, seleccione una opción válida (1 o 2).");
        }
    } while (bienvenida !== "1" && bienvenida !== "2");

    switch (bienvenida) {
        case "1":
            simularPlazoFijoPesos();
            break;

        case "2":
            simularPlazoFijoDolares();
            break;
    }
}

// Llamamos a la función principal
main();




