import { deleteCliente, deleteCompras, deleteDetalles, deleteProducto, deleteVenta, delteCAtegoria, getCategoria, getCliente, getCompras, getDetalles, getFactura, getProducto, getUser } from "../API/API.js";

(function(){
    const lista = document.querySelector('.lista')
    
    lista.addEventListener('click', confirmEliminar)
    const categorias = document.querySelector('#categorias')
    const producto = document.querySelector('#producto')
    const factura = document.querySelector('#factura')
    const detalles = document.querySelector('#detalles')
    const compra = document.querySelector('#compra')
    factura.addEventListener('click',tabalFactura)
    detalles.addEventListener('click',tablaDetalles)
    compra.addEventListener('click',tablaCompra)
    categorias.addEventListener('click',tablaCategory)
    producto.addEventListener('click',tablaProducto)
    
    document.addEventListener('DOMContentLoaded',()=>{
        EliminarCate()
        EliminarProduc()
        EliminarVenta()
        EliminarCompra()
        EliminarDetalle()
    })

    async function tablaDetalles(e){
        e.preventDefault()
        let nombreProducto = ""
        let nombreCliente = ""
        let nombreEmpleado = ""
        let precioProducto = ""
        let totalInd = ""
        let suma = ""
        let operacion = ""
        let total = 0
        let fechas
        const detalles = await getDetalles()
        const produc = await getProducto()
        const facturas = await getFactura()
        const empleados = await getUser()
        const clientes = await getCliente() 
        const tabla = document.querySelector('#menuBarra')
        tabla.innerHTML = `
        <thead class="menu-busqueda">
                  <tr >
                      <th scope="col">ID</th>
                      <th scope="col">CLIENTE</th>
                      <th scope="col">EMPLEADO</th>
                      <th scope="col">FECHA</th>
                      <th scope="col">PRODUCTO</th>
                      <th scope="col">CANTIDAD</th>
                      <th scope="col">TOTAL</th>
                      <th scope="col">BORRAR</th>
                  </tr>
            </thead>
                  <tbody id="container" class="table-group-divider listaCate">

                  </tbody>
          </table>`;
          const container = document.querySelector('#container')
          detalles.forEach((detalle)=>{
            const {id,factura,producto,canidad} = detalle
            produc.forEach((produ)=>{
                const {id,nombre,precio} = produ
                if (producto == id || producto == nombre) {
                    nombreProducto = nombre
                    precioProducto = precio
                }
            })
            facturas.forEach((factu)=>{
                const {id,cliente,empleado,fecha} = factu
                empleados.forEach((emple)=>{
                    const {id,nombre} = emple
                    if (empleado == id || empleado == nombre) {
                        nombreEmpleado = nombre
                        console.log(nombreEmpleado);
                    }
                })
                clientes.forEach((client)=>{
                    const {id,nombre} = client
                    if (cliente == id || cliente == nombre) {
                        nombreCliente = nombre
                    }
                })
                if (factura == id) {
                    fechas = fecha
                }
            })
            const rows = document.createElement('tr')
                rows.innerHTML = `
                <th scope="row">${id}</th>
                <td>${nombreCliente}</td>
                <td>${nombreEmpleado}</td>
                <td>${fechas}</td>
                <td>${nombreProducto}</td>
                <td>${canidad}</td>
                <td>${precioProducto*canidad}</td>
                <td><button id="listaCate" class="btn btn-danger borrarDetalle" data-detalle=${id}>Borrar</button></td>
                `

                totalInd = `${precioProducto*canidad}`
                suma = [...suma,Number(totalInd)]

                
                console.log(operacion);

                container.appendChild(rows)
                return operacion

          })
    
        
    }

    async function tablaCompra(e){
        e.preventDefault()
        let nombreProducto = ""
        const compr = await getCompras()
        const produc = await getProducto()
        const tabla = document.querySelector('#menuBarra')
        tabla.innerHTML = `
        <thead class="menu-busqueda">
                  <tr >
                      <th scope="col">ID</th>
                      <th scope="col">FECHA</th>
                      <th scope="col">PRODUCTO</th>
                      <th scope="col">CANTIDAD</th>
                      <th scope="col">PROOVEDOR</th>
                      <th scope="col">BORRAR</th>
                  </tr>
            </thead>
                  <tbody id="container" class="table-group-divider listaCate">

                  </tbody>
          </table>`;
          const container = document.querySelector('#container')
          compr.forEach((compr)=>{
            const {id,fecha,producto,cantidad,proovedor} = compr
            produc.forEach((produ)=>{
                const {id,nombre} = produ
                if (producto == id || producto == nombre) {
                    nombreProducto = nombre
                }
            })
            const rows = document.createElement('tr')
                rows.innerHTML = `
                <th scope="row">${id}</th>
                <td>${fecha}</td>
                <td>${nombreProducto}</td>
                <td>${cantidad}</td>
                <td>${proovedor}</td>
                <td><button id="listaCate" class="btn btn-danger borrarCompra" data-compra=${id}>Borrar</button></td>
                `
                container.appendChild(rows)
          })
    }



    async function tabalFactura(e){
        e.preventDefault()
        let nombreCliente = ""
        let nombreEmpleado = ""
        const factura = await getFactura()
        const clientes = await getCliente()
        const empleados = await getUser()
        const tabla = document.querySelector('#menuBarra')
        tabla.innerHTML = `
        <thead class="menu-busqueda">
                  <tr >
                      <th scope="col">ID</th>
                      <th scope="col">CLIENTE</th>
                      <th scope="col">EMPLEADO</th>
                      <th scope="col">FECHA</th>
                      <th scope="col">BORRAR</th>
                  </tr>
            </thead>
                  <tbody id="container" class="table-group-divider listaCate">

                  </tbody>
          </table>`;
          const container = document.querySelector('#container')
          factura.forEach((factu)=>{
            const {id,cliente,empleado,fecha} = factu
            empleados.forEach((emple)=>{
                const {id,nombre} = emple
                if (empleado == id || empleado == nombre) {
                    nombreEmpleado = nombre
                    console.log(nombreEmpleado);
                }
            })
            clientes.forEach((client)=>{
                const {id,nombre} = client
                if (cliente == id || cliente == nombre) {
                    nombreCliente = nombre
                }
            })

            const rows = document.createElement('tr')
                rows.innerHTML = `
                <th scope="row">${id}</th>
                <td>${nombreCliente}</td>
                <td>${nombreEmpleado}</td>
                <td>${fecha}</td>
                <td><button id="listaCate" class="btn btn-danger borrarVenta" data-venta=${id}>Borrar</button></td>
                `
                container.appendChild(rows)

          })
          
    }


    async function tablaProducto(e){
        e.preventDefault()
        let nombreCategoria = ""
        const producto = await getProducto()
        console.log(producto);
        const categoria = await getCategoria()
        const tabla = document.querySelector('#menuBarra')
        tabla.innerHTML = `
        <thead class="menu-busqueda">
                  <tr >
                      <th scope="col">ID</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">PRECIO</th>
                      <th scope="col">STOCK</th>
                      <th scope="col">CATEGORIA</th>
                      <th scope="col">BORRAR</th>
                  </tr>
            </thead>
                  <tbody id="container" class="table-group-divider listaCate">

                  </tbody>
          </table>`;
          const container = document.querySelector('#container')
          producto.forEach((product)=>{
            const {id,nombre,precio,stock,idCategoria} = product
            categoria.forEach((categori)=>{
                const {id,nombre} = categori
                console.log(product);
                console.log(product.idCategoria);
                if (idCategoria == id || idCategoria == nombre) {
                    nombreCategoria = nombre
                }

            })
                const rows = document.createElement('tr')
                rows.innerHTML = `
                <th scope="row">${id}</th>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${stock}</td>
                <td>${nombreCategoria}</td>
                <td><button id="listaCate" class="btn btn-danger borrarPro" data-producto=${id}>Borrar</button></td>
                `
                container.appendChild(rows)
          })

    }

    async function tablaCategory(e) {
        e.preventDefault()
        const categorias = await getCategoria()
        const tabla = document.querySelector('#menuBarra')
        tabla.innerHTML = `
        <thead class="menu-busqueda">
                  <tr >
                      <th scope="col">ID</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">DESCRIPCION</th>
                      <th scope="col">BORRAR</th>
                  </tr>
            </thead>
                  <tbody id="container" class="table-group-divider listaCate">

                  </tbody>
          </table>`;
          const container = document.querySelector('#container')
        categorias.forEach((categoria)=>{
            const {id,nombre,descripcion} = categoria
            const rows = document.createElement('tr')
            rows.innerHTML = `
            <th scope="row">${id}</th>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td><button id="listaCate" class="btn btn-danger borrarCate" data-categoria=${id}>Borrar</button></td>
            `
            container.appendChild(rows)
            
        })
    }

    function EliminarDetalle() {
        const cate = document.querySelector('#menuBarra')
        cate.addEventListener('click',confirmEliminarDetalle)
    }

    function EliminarCate() {
        const cate = document.querySelector('#menuBarra')
        cate.addEventListener('click',confirmEliminarCate)
    }
    
    function EliminarCompra() {
        const compra = document.querySelector('#menuBarra')
        compra.addEventListener('click',confirmEliminarCompra)
    }

    function EliminarProduc() {
        const produc = document.querySelector('#menuBarra')
        produc.addEventListener('click',confirmEliminarProduct)
    }
    
    function EliminarVenta() {
        const venta = document.querySelector('#menuBarra')
        venta.addEventListener('click',confirmEliminarVenta)
    }

    function confirmEliminarDetalle(e){
        e.preventDefault()
        if(e.target.classList.contains('borrarDetalle')){
            const idDetalle = parseInt(e.target.dataset.detalle)
            const confirmar = confirm('Deseas eliminar la compra de la lista')
            if (confirmar) {
                deleteDetalles(idDetalle)
            }
        }
    }

    
    function confirmEliminarCompra(e){
        e.preventDefault()
        if(e.target.classList.contains('borrarCompra')){
            const idCompra = parseInt(e.target.dataset.compra)
            const confirmar = confirm('Deseas eliminar la compra de la lista')
            if (confirmar) {
                deleteCompras(idCompra)
            }
        }
    }

    function confirmEliminar(e){
        e.preventDefault()
        if(e.target.classList.contains('borrar')){
            const idCliente = parseInt(e.target.dataset.cliente)
            const confirmar = confirm('Deseas eliminar el cliente de la lista')
            if (confirmar) {
                deleteCliente(idCliente)
            }
        }
    }

    function confirmEliminarVenta(e){
        e.preventDefault()
        if(e.target.classList.contains('borrarVenta')){
            const idVenta = parseInt(e.target.dataset.venta)
            const confirmar = confirm('Deseas eliminar la venta de la lista')
            if (confirmar) {
                deleteVenta(idVenta)
            }
        }
    }

    function confirmEliminarProduct(e){
        e.preventDefault()
        if(e.target.classList.contains('borrarPro')){
            const idProducto = parseInt(e.target.dataset.producto)
            const confirmar = confirm('Deseas eliminar el cliente de la lista')
            if (confirmar) {
                deleteProducto(idProducto)
            }
        }
    }






    function confirmEliminarCate(e){
        e.preventDefault()
        if(e.target.classList.contains('borrarCate')){
            const idCategoria = parseInt(e.target.dataset.categoria)
            const confirmar = confirm('Deseas eliminar la Categoria de la lista')
            if (confirmar) {
                delteCAtegoria(idCategoria)
            }
        }
    }


    document.addEventListener('DOMContentLoaded',()=>{
        showClientes()
    })

    async function showClientes(){
        const clientes = await getCliente()
        console.log(clientes);
        const container = document.querySelector('#container')
        clientes.forEach((cliente) => {
            const {id,imagen,nombre,direccion,telefono} = cliente
            const rows = document.createElement('tr')
            rows.innerHTML = `
            <th scope="row">${id}</th>
            <td><img src="/img/${imagen}" alt=""></td>
            <td>${nombre}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
            <td><button class="btn btn-warning">Detalles</button></td>
            <td><button class="btn btn-danger borrar" data-cliente=${id}>Borrar</button></td>
            `
            container.appendChild(rows)
        });

    }
})();