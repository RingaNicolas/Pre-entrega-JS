let nombre = "";
let empresa = "";
let cargo = "";

// Función para no permitir que el usuario deje un campo vacio en un prompt que retorna lo que el usuario ingrese
function campoVacio(articulo, texto, variable) {
    while (variable === "") {
        variable = prompt("Ingrese su " + texto);
        if (variable === "") {
            alert("El campo " + articulo + texto + " no puede quedar vacío")
        }
    }
    return variable;
}

let nombreDeCliente = campoVacio("del ", "nombre", nombre); // variable que almacena el nombre ingresado por el usuario
let empresaDeCliente = campoVacio("de la ", "empresa", empresa);
let cargoDeCliente = campoVacio("de", "Cargo", cargo)

class Cliente { // clase constructora del objeto Cliente
    constructor(nombre, empresa, cargo) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.cargo = cargo
    }
    saludar() {
        alert("Hola " + this.nombre + " de " + this.empresa + ". Bienvenido a em.Point, a continuación te mostraremos los servicios que puedes elegir.")
    }
}

console.log(nombreDeCliente);
console.log(empresaDeCliente);
console.log(cargoDeCliente);

const cliente1 = new Cliente(nombreDeCliente, empresaDeCliente, cargoDeCliente); // creación del cliente

cliente1.saludar(); // llamado a la acción de la función dentro de la clase constructora de Cliente

console.log(cliente1);

const servicios = ["Consultoria", "Investigacion de mercado", "Manejo de redes", "Gamification", "Nuevo branding"]; // Array que almacena los nombres de los servicios

const preciosServicios = [20000, 40000, 15000, 7500, 10000]; // Array que almacena el valor de los servicios ordenados como el array de servicios

const serviciosCarrito = []; // Array vacia para almacenar los servicios que el usuario desee



function ventaDeServicios() { // Función para que el usuario elija el o los servicios que quiera contratar, borrar servicios en caso de que asi lo desee y calcular su valor total

    let servicioElegido; //variable para almacenar el numero de opcion elegida por el usuario
    do {
        servicioElegido = parseInt(prompt("Elegí uno de nuestros servicios ingresando el número asignado: \n\n 0. Consultoría -> $20000 \n 1. Investigación de mercado -> $40000 \n 2. Manejo de redes -> $15000 \n 3. Gamification -> $7500 \n 4. Nuevo branding -> $10000"));
    } while (servicioElegido > 4 || servicioElegido < 0)

    switch (servicioElegido) {
        case 0:
            alert("Elegiste el servicio de consultoría.");
            break;
        case 1:
            alert("Elegiste el servicio de investigación de mercado.");
            break;
        case 2:
            alert("Elegiste el servicio de manejo de redes.");
            break;
        case 3:
            alert("Elegiste el servicio de gamification");
            break;
        case 4:
            alert("Elegiste el servicio de nuevo branding");
            break;
    }

    serviciosCarrito.push(servicios[servicioElegido]); // Pusheo del servicio que el usuario eligio al array SERVICIOSCARRITO desde el array SERVICIOS
    serviciosCarrito.push(preciosServicios[servicioElegido]); // Pusheo del precio de los servicios

    let repetirSeleccion;  // variable para almacenar el numero que elija el usuario
    do {
        repetirSeleccion = parseInt(prompt("¿Desea elegir otro servicio? \n\n 1. Si \n 2. No"));
    } while (repetirSeleccion > 2 || repetirSeleccion < 1);

    switch (repetirSeleccion) {
        case 1:
            ventaDeServicios();
            break;
        case 2:
            break
    }



}

ventaDeServicios(); // Llamada de la funcion ventaDeServicios

let listaDeServiciosSeleccionados = serviciosCarrito.join("\n");

console.log(listaDeServiciosSeleccionados);



let eliminarServicio; // variable para almacenar el nombre del servicio elegido por el usuario para posteriormente eliminarlo del carrito de compras
do {
    eliminarServicio = parseInt(prompt("¿Desea eliminar algun servicio de su lista? \n\n 1. Si \n 2. No"));
} while (eliminarServicio > 2 || eliminarServicio < 1);

switch (eliminarServicio) {
    case 1:
        let servicioAEliminarBusqueda = prompt("Los servicios que eligió son: \n\n" + listaDeServiciosSeleccionados + "\n\n Escriba el nombre del servicio que desee eliminar");
        if (serviciosCarrito.includes(servicioAEliminarBusqueda)) {
            let index = serviciosCarrito.indexOf(servicioAEliminarBusqueda);
            serviciosCarrito.splice(index, 2);
        } else {
            alert("El servicio " + servicioAEliminarBusqueda + " no se encuentra seleccionado o no forma parte de nuestros servicios.");
        }
        break;
    case 2:
        alert("Mauchas gracias por elegir a em.Point, a continuación te mostraremos el total precio total de los servicios elegidos.")
        break;
}

const valorTotal = []; // Array que almacenará todos los precios de los servicios elegidos por el usuario.

for (let i = 1; i <= serviciosCarrito.length; i = i + 2) {
    valorTotal.push(serviciosCarrito[i]);
}

const sumaDeValorTotal = valorTotal.reduce((acc, num) => acc + num, 0); // variable que almacena la suma del precio de los sercicios elegidos por el usuario

alert("El valor de la suma de los servicios que elegiste es: " + sumaDeValorTotal + " muchas gracias por elegir a em.Point como tu consultora de confianza.")


