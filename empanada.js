let etiquetaBoton = document.getElementById("boton")
etiquetaBoton.addEventListener("click", escuchar)
function escuchar(event) {
    event.preventDefault()
    console.log("Clicked");
    let empanada = document.getElementById("empanada").value
    let quantity = document.getElementById("cantidad").value
    let name = document.getElementById("nombre").value
    let id = document.getElementById("cedula").value
    let email = document.getElementById("correo").value
    console.log(empanada + ", " + quantity + ", " + nombre + ", " + cedula + ", " + correo)

    let carne = 3000
    let pollo = 3200
    let papa = 3200
    

    if (empanada == "carne") {
        console.log("estoy en 1")
        let ressult = quantity * carne
        alert("Su total es de: " + ressult)
    }
    else if (empanada == "pollo" || "papa") {
        let ressult = quantity * pollo
        alert("Su total es de: " + ressult)
    }

}