export class formPersona extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
        <div class="card">
        <h5 class="card-header">profesion</h5>
        <div class="card-body">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12">
                        <form id = "frmData">
                            <div class="row g-3">
                                
                                <div class="col-3">
                                    <label for="nroIdentificacion" class="form-label">Documento del Cliente</label>
                                    <input type="text" class="form-control" id="nroIdentificacion" name="nroIdentificacion">
                                </div>
                                <div class="col-3">
                                    <label for="nombres" class="form-label">Nombres</label>
                                    <input type="text" class="form-control" id="nombres" name="nombres">                  
                                </div>
                                <div class="col-3">
                                    <label for="apellidos" class="form-label">Apellidos</label>
                                    <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col-4">
                                    <label for="email" class="form-label">Email cliente</label>
                                    <input type="email" class="form-control" id="email" name="email">
                                </div>
                                <div class="col-4">
                                    <label for="telefono" class="form-label">Nro Movil</label>
                                    <input type="text" class="form-control" id="telefono" name="telefono">                  
                                </div>
                                <div class="col-4">
                                    <label for="fechanac" class="form-label">Fecha Nacimiento</label>
                                    <input type="date" class="form-control" id="fechanac" name="fechanac">                  
                                </div>

                                    <div class="col-3">
                                    <label for="ciudadOrigen" class="form-label">Ciudad de origen</label>
                                    <input type="text" class="form-control" id="ciudadOrigen" name="ciudadOrigen">                  
                                </div>
                                    </div>
                                    <div class="col-3">
                                    <label for="paisOrigen" class="form-label">pais de origen</label>
                                    <input type="text" class="form-control" id="paisOrigen" name="ciudadOrigen">                  
                                </div>
                                    <div class="container mt-4 text-center" >
                                    <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar Clientes">
                                </div>
                            </div>
                        </form>                         
                </div>
            </div>
        </div>
        </div>
    </div>     
        `
    }
}    
customElements.define("form-persona",formPersona);