let etiquetaBoton= document.getElementById ("boton")
etiquetaBoton. addEventListener("click", escuchar)
function escuchar (event){
    event.preventDefault()
    console.log("Hizo click")

    let ciudad= document.getElementById("lugar").value

    if (ciudad== "medellin") {
        alert("El concierto es el 8 de Agosto")  
    } 
    else if (ciudad=="bogota") {
        alert("El concierto es el 11 de Agosto")
    } 
    else if (ciudad=="cali"){
        alert("El concierto es el 15 de Agosto")
    }
    else if (ciudad=="barranquilla") {
        alert("Aun no se registra fecha")
    }{
        
    }
}