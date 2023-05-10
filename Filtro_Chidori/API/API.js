const urlCliente = "http://localhost:4200/clientes"
const urlUsuario = "http://localhost:4200/users"
const urlCategoria = "http://localhost:4200/categoria"
const urlproductos = "http://localhost:4200/productos"
const urlfactura = "http://localhost:4200/VentasFactura"
const urlDetalles = "http://localhost:4200/DetallesFactura"
const urlCompras = "http://localhost:4200/Compras"

export const getDetalles = async () =>{
    try {
        const result = await fetch(urlDetalles)
        const detalles = await result.json()
        return detalles
    } catch (error) {
        console.log(error);
    }
}

export const getCompras = async () =>{
    try {
        const result = await fetch(urlCompras)
        const Compras = await result.json()
        return Compras
    } catch (error) {
        console.log(error);
    }
}

export const getCliente = async () =>{
    try {
        const result = await fetch(urlCliente)
        const cliente = await result.json()
        return cliente
    } catch (error) {
        console.log(error);
    }
}
 export const getCategoria = async () =>{
    try {
        const result = await fetch(urlCategoria)
        const categoria = await result.json()
        return categoria
    } catch (error) {
        console.log(error);
    }
 }

 export const getFactura = async () =>{
    try {
        const result = await fetch(urlfactura)
        const factura = await result.json()
        return factura
    } catch (error) {
        console.log(error);
    }
 }

 export const getProducto = async () =>{
    try {
        const result = await fetch(urlproductos)
        const producto = await result.json()
        return producto
    } catch (error) {
        console.log(error);
    }
 }

export const newCategoria = async (cat) =>{
    try {
        await fetch(urlCategoria,{
            method: "POST",
            body: JSON.stringify(cat),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const newDetalles = async (det) =>{
    try {
        await fetch(urlDetalles,{
            method: "POST",
            body: JSON.stringify(det),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const newCompra = async (com) =>{
    try {
        await fetch(urlCompras,{
            method: "POST",
            body: JSON.stringify(com),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}


export const NewProducto = async (product) =>{
    try {
        await fetch(urlproductos,{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const newVenta = async (ven) =>{
    try {
        await fetch(urlfactura,{
            method: "POST",
            body: JSON.stringify(ven),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "inicio.html"
    } catch (error) {
        console.log(error);
    }
}


export const newCliente = async (cli) =>{
    try {
        await fetch(urlCliente,{
            method: "POST",
            body: JSON.stringify(cli),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "inicio.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async id =>{
    try {
        await fetch(`${urlCliente}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteDetalles = async id =>{
    try {
        await fetch(`${urlDetalles}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCompras = async id =>{
    try {
        await fetch(`${urlCompras}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteVenta = async id =>{
    try {
        await fetch(`${urlfactura}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}


export const deleteProducto = async id =>{
    try {
        await fetch(`${urlproductos}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export const delteCAtegoria = async id =>{
    try {
        await fetch(`${urlCategoria}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}



/* login */

export const getUser = async () =>{
    try {
        const result = await fetch(urlUsuario)
        const usuario = await result.json()
        return usuario
    } catch (error) {
        console.log(error);
    }
    
}

export const newUser = async (user) =>{
   console.log(user);
    try {
     await fetch(urlUsuario,{
        method: "POST",
        body: JSON.stringify(user),
        headers:{
        'Content-Type':'application/json'
    }
    })
    
   } catch (error) {
    console.log(error);
   }
}