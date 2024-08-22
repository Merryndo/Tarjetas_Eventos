document.getElementById("tarjeta-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Previene el envío tradicional del formulario
    
    let nombre = document.getElementById("nombre").value;
    let evento = document.getElementById("evento").value;
    
    // Verificamos que se haya ingresado un nombre y un evento
    if (nombre && evento) {
        let url;
        
        // Determinamos la URL basada en el tipo de evento
        switch (evento) {
            case "cumpleaños":
                url = `paginas/cumpleaños/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "ascenso":
                url = `paginas/ascenso/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "despido":
                url = `paginas/despido/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "funeral":
                url = `paginas/funeral/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "graduacion":
                url = `paginas/graduacion/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "matrimonio":
                url = `paginas/matrimonio/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            case "nacimiento":
                url = `paginas/nacimiento/${evento}.html?nombre=${encodeURIComponent(nombre)}`;
                break;
            // Agrega más casos para otros eventos aquí
            default:
                alert("Tipo de evento no reconocido.");
                return;  // Detiene la ejecución si el evento no está en la lista
        }
        
        // Redireccionamos a la página correspondiente
        window.location.href = url;
    } else {
        alert("Por favor, ingresa un nombre y selecciona un evento.");
    }
});
