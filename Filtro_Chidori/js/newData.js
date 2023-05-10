import { NewProducto, newCategoria, newCliente, newCompra, newDetalles, newVenta } from "../API/API.js"



const formularioDetalles = document.querySelector('#formularioDetalles')
formularioDetalles.addEventListener('submit',DetallesNueva)


const formularioCompra = document.querySelector('#formularioCompra')
formularioCompra.addEventListener('submit',compraNueva)

const formularioVenta = document.querySelector('#formularioVenta')
formularioVenta.addEventListener('submit',ventaNueva)

const formulariProductos = document.querySelector('#formularioProduct')
formulariProductos.addEventListener('submit',productoNuevo)

const formulariCategoria = document.querySelector('#formularioCategoria')
formulariCategoria.addEventListener('submit',categoriNueva)

const formularioCliente = document.querySelector('#formulario')
formularioCliente.addEventListener('submit',clienteNuevo)

function DetallesNueva(e){
    e.preventDefault()
    const factura = document.querySelector('#facturaDetalles').value
    const producto = document.querySelector('#productoDetalle').value
    const canidad = parseInt(document.querySelector('#cantidadDetalle').value)
    

    const detal ={
         factura,
         producto,
         canidad,
         
    }
    console.log(detal);
    if(validate(detal)){
        alert('Todos los campos son Obligatorios')
        return
    }
    newDetalles(detal)
}


function compraNueva(e){
    e.preventDefault()
    const fecha = document.querySelector('#FechaCompra').value
    const producto = document.querySelector('#productoCompra').value
    const cantidad = document.querySelector('#cantidad').value
    const proovedor = document.querySelector('#proovedor').value

    const compra ={
         fecha,
         producto,
         cantidad,
         proovedor,
    }
    console.log(compra);
    if(validate(compra)){
        alert('Todos los campos son Obligatorios')
        return
    }
    newCompra(compra)
}




function ventaNueva(e){
    e.preventDefault()
    const cliente = document.querySelector('#nombreCliente').value
    const empleado = document.querySelector('#nombreEmpleado').value
    const fecha = document.querySelector('#fecha').value

    const venta ={
         cliente,
         empleado,
         fecha,
    }
    console.log(venta);
    if(validate(venta)){
        alert('Todos los campos son Obligatorios')
        return
    }
    newVenta(venta)
}



function categoriNueva(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombrecate').value
    const descripcion = document.querySelector('#descripcion').value

    const cate ={
        nombre,
        descripcion,
    }
    console.log(cate);
    if(validate(cate)){
        alert('Todos los campos son Obligatorios')
        return
    }
    newCategoria(cate)
}

function productoNuevo(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombrepro').value
    const precio = parseInt(document.querySelector('#Precio').value)
    const stock = document.querySelector('#Stock').value
    const idCategoria = document.querySelector('#categoria').value

    const produ ={
        nombre,
        precio,
        stock,
        idCategoria,
    }
    console.log(produ);
    if(validate(produ)){
        alert('Todos los campos son Obligatorios')
        return
    }
    NewProducto(produ)
}


function clienteNuevo(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const direccion = document.querySelector('#Direccion').value
    const telefono = document.querySelector('#telefono').value

    const clien = {
        nombre,
        direccion,
        telefono,
    }
    if (validate(clien)) {
        alert('Todos los campos son Obligatorios')
        return
    }

    newCliente(clien)

}


function validate(obj){
    return !Object.values(obj).every(element => element !== "")
}