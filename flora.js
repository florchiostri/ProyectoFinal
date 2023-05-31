let edad = prompt("Por favor ingresa tu edad");
let sosDeSn = confirm("¿El envío sería dentro de San Nicolás?");

if (edad > 18) {
    alert("Sos mayor, acceso permitido");
} else {
    alert("Sos menor, estás entrando bajo tu responsabilidad");
}


if (sosDeSn == true) {
    alert("Dentro de San Nicolás no se cobra adicional de envío");
} else {
    alert("Fuera de San Nicolás el adicional de envío es de 800pesos");
}

