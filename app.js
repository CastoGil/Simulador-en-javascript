
//Bienvenido al MUNDO DEL CELULAR
alert("Bienvenido al worldCell")
// Imprimimos la Fecha de la Compra

const hoy = new Date()
console.log( hoy.toLocaleDateString() )

//Pedimos el nombre del Cliente asi lo mostramos por consola
const nombreComprador = prompt("ingrese su nombre para registrarlo en la compra del producto")

//Pedimos al usuario que busque el modelo del celular disponible
//Definimos el array con los produtos y sus respectivo precio

const telefonos = [
    { nombre: "samsung", valor:40000},
    { nombre: "motorola", valor:32000} ,   
    { nombre: "lg", valor:20000},
    { nombre: "nokia", valor:100000} , 
   
] 

let modelo_usuario = prompt("ingrese el nombre de celular, para ver disponibilidad").toLowerCase()
const buscar_modelo = telefonos.filter((telefono) => telefono.nombre.includes(modelo_usuario))
const buscador = () => {
switch (modelo_usuario) {
    
    case "samsung":
        alert("Si tenemos disponibilidad")
        console.log("Si tenemos disponibilidad")
        break
    case "motorola":
        alert("Si tenemos disponibilidad")
        console.log("Si tenemos disponibilidad")
        break
    case "lg":
        alert("Si tenemos disponibilidad")
        console.log("Si tenemos disponibilidad")
        break
    case "nokia":
        alert("Si tenemos disponibilidad")
        console.log("Si tenemos disponibilidad")
        break
    default:
        alert("Ingresar un modelo de celular disponible")
        console.log("Ingresar un modelo de celular disponible")
        break
}
}
buscador()
console.log(buscar_modelo)

//Creamos la clase junto con el constructor del producto

class Celular {
   constructor(modelo, camara, precio) {
       this.modelo = modelo
       this.camara = camara
       this.precio = precio
   }

}

const celular1= new Celular("Samsung", 48, 40000)
const celular2= new Celular("Motorola", 32, 30000)
const celular3= new Celular("Lg", 24, 20000)
const celular4= new Celular("Nokia", 80, 100000)

//Creamos nuestro ARRAY, El cual seria mi shopCell donde ingresariamos los celulares seleccionados

const shopCell = []

//Creamos la funcion y el ciclo por el cual quiero me muestre por consola el total de la compra junto con el impuesto Iva (Argentina)

const FacturaCompra = () => {
    let contador= 0
    shopCell.forEach((movil) => {
        contador += movil.precio +(movil.precio*0.21) 
    }) 
    return contador
}
//Luego a traves de una funcion flecha mostramos la descripcion de la compra realizada

const avisodeCompra = (Celular) => {
    console.log("La descripcion de la compra " + nombreComprador + " es: " + Celular.modelo  + " con camara " + Celular.camara + " precio "+ Celular.precio + " sin iva ")
}
// Ciclo por el cual con una funcion flecha volvemos a iterar con el cliente si desea comprar otro celular
const aggCell = () => {
    
    const agregar_Celular = prompt("Elige un Modelo de Celular Disponible: Samsung , Motorola, Lg, Nokia").toLowerCase()

    switch (agregar_Celular) {
        case "samsung":
            avisodeCompra(celular1)
            shopCell.push(celular1)
            break
        case "motorola":
            avisodeCompra(celular2)
            shopCell.push(celular2)
            break
        case "lg":
            avisodeCompra(celular3)
            shopCell.push(celular3)
            break
        case "nokia":
            avisodeCompra(celular4)
            shopCell.push(celular4)
            break
        default:
            console.log("Ingresa un modelo de celular disponible en nuestra tienda si no intenta en otra oportunidad")
            break
    }
    if (confirm('Deseas comprar otro celular? o iniciar tu compra de nuevo?')) {
        aggCell()
    } else {
        console.log('Finalizo Compra, su total es de $' + FacturaCompra())
        console.log(shopCell)
    }
}

aggCell()
//Fin de la Compra

