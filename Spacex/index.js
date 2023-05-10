//Tarjetas//

document.addEventListener('DOMContentLoaded',()=>{
    api();
})

async function api(){
    const url='https://api.spacexdata.com/v3/launches';
    try {
        const respuesta= await fetch(url);
        const result= await respuesta.json();
        injectCohetes(result);
    } catch (error) {
        console.log(error);
    }
}

const contenedor=document.querySelector('.contenedor')

function injectCohetes(cohetes){
    cohetes.forEach((cohete)=>{
        const {mission_name,launch_year,links,flight_number,rocket,launch_success}=cohete
        const tarjeta=document.createElement('p')
        tarjeta.innerHTML=`
            <div class="card">
                <img src="${links.mission_patch}">
                <div class="contenido">
                    <p class="nombre">${mission_name}</p>
                    <p class="anio">${launch_year}</p>
                    <button class="boton" id="${flight_number}" rocket="${rocket.rocket_name}" estado="${launch_success}" link="${links.youtube_id}"data-bs-toggle="modal" data-bs-target="#exampleModal" rocketId="${rocket.rocket_id}">More Detail (Video)</button>
                    </div>
            </div>
        `
        contenedor.appendChild(tarjeta)
    })
}

contenedor.addEventListener('click',sacarBoton)

function sacarBoton(e){
    if(e.target.classList.contains('boton')){
        modal(e)
    }

}


function modal(e){
    const tbodie=document.querySelector('.tbodie')
    tbodie.innerHTML=""
    const video=e.target.getAttribute('link')
    const nombre=e.target.getAttribute('rocket')
    const estado=e.target.getAttribute('estado')
    const id=e.target.getAttribute('rocketId')
    console.log(video);
    tbodie.innerHTML=`
    <tr>
        <td colspan="2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
        </td>  
    </tr>

    <tr>
        <td>
            <p style="font-weight:bolder">Rocket ID</p>
        </td>   
        <td>
            <p>${id}</p>
        </td>
    </tr>

    <tr>
        <td style="font-weight:bolder">
            <p>Nombre Cohete</p>
        </td>       
        <td>
            <p>${nombre}</p>
        </td>
    </tr>

    <tr>
        <td>
            <p style="font-weight:bolder">Estado</p>
        </td>   
        <td>
            <p>${estado}</p>
        </td>
    </tr>
    
    `
}