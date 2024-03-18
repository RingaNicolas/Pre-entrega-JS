let nombre = "";
let empresa = "";

function campoVacio(articulo, texto, variable) {
    while (variable === "") {
        variable = prompt("Ingrese su " + texto);
        if (variable === "") {
            alert("El campo " + articulo + texto + " no puede quedar vacío")
        }
    }
}

campoVacio("del ", "nombre", nombre);
campoVacio("de la ", "empresa", empresa);

function seleccionDeServicio() {
let servicioElegido;
do {
    servicioElegido = parseInt(prompt("Bienvenido a em.Point. Por favor elegí uno de nuestros servicios ingresando el número asignado: \n\n 1. Consultoría \n 2. Investigación de mercado \n 3. Manejo de redes \n 4. Gamification \n 5. Nuevo branding"));
} while (servicioElegido > 5 || servicioElegido < 1)

switch (servicioElegido) {
    case 1:
        alert("Elegiste el servicio de consultoría.");
        break;
    case 2:
        alert("Elegiste el servicio de investigación de mercado.");
        break;
    case 3:
        alert("Elegiste el servicio de manejo de redes.");
        break;
    case 4:
        alert("Elegiste el servicio de gamification");
        break;
    case 5:
        alert("Elegiste el servicio de nuevo branding");
        break;    
}

let repetirSeleccion;
do {
    repetirSeleccion = parseInt(prompt("¿Desea elegir otro servicio? \n\n 1. Si \n 2. No"));
} while (repetirSeleccion > 2 || repetirSeleccion < 1);

switch (repetirSeleccion) {
    case 1:
        seleccionDeServicio();
        break;
    case 2:
        alert("Muchas gracias por elegir a la consultora de em.Point");
        break
}

}

seleccionDeServicio();