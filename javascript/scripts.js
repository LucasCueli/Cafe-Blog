// Eventos Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // Validar formulario 
    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
       mostrarAlerta('Todos los campos son obligatorios', true)
         

        return; //Corta la ejecucion del codigo
    }
    
    // Crear alerta de enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente');
})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

//Muestra alerta de si se envio correctamente o si falta completar algun cuadro

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 1500);
}
