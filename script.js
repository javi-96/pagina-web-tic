
document.addEventListener('DOMContentLoaded', () => {
    const encabezadosAcordeon = document.querySelectorAll('.modulo-encabezado');

    encabezadosAcordeon.forEach(encabezado => {
        encabezado.addEventListener('click', () => {
            
            const modulo = encabezado.closest('.modulo-curso');
            const contenido = modulo.querySelector('.contenido-acordeon');
            const icono = encabezado.querySelector('.icono-acordeon');

            const estaActivo = contenido.classList.toggle('activo');

            if (estaActivo) {
                icono.textContent = '−'; 
            } else {
                icono.textContent = '+'; 
            }

            cerrarOtrosModulos(modulo); 
        });
    });

    function cerrarOtrosModulos(moduloActual) {
        document.querySelectorAll('.modulo-curso').forEach(mod => {
            if (mod !== moduloActual) {
                const contenido = mod.querySelector('.contenido-acordeon');
                const icono = mod.querySelector('.icono-acordeon');
                
                if (contenido.classList.contains('activo')) {
                    contenido.classList.remove('activo');
                    icono.textContent = '+';
                }
            }
        });
    }

});


// 1. Obtener los elementos del DOM usando sus IDs
const modal = document.getElementById('modal-inscripcion');
const btnAbrir = document.getElementById('btn-abrir-modal');
const btnCerrar = document.getElementById('btn-cerrar-modal');

// 2. Función para abrir el modal
btnAbrir.onclick = function() {
  modal.style.display = "block";
}

// 3. Función para cerrar el modal haciendo clic en la "X"
btnCerrar.onclick = function() {
  modal.style.display = "none";
}

// 4. Función para cerrar el modal haciendo clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Opcional: Manejar el envío del formulario (simplemente evita que recargue)
const form = document.getElementById('formulario-inscripcion');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional y la recarga
    alert("¡Solicitud enviada! Nos pondremos en contacto contigo pronto.");
    
    // Ocultar el modal después del envío
    modal.style.display = "none"; 
    
    // Aquí es donde típicamente enviarías los datos a un servidor (fetch API)
    // form.reset(); // Opcional: Limpiar los campos
});


// Script para el menú móvil
        document.querySelector('.menu-movil').addEventListener('click', function() {
            document.querySelector('.enlaces-navegacion').classList.toggle('activo');
        });
        
        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(enlace => {
            enlace.addEventListener('click', function (e) {
                e.preventDefault();
                
                const idDestino = this.getAttribute('href');
                if(idDestino === '#') return;
                
                const elementoDestino = document.querySelector(idDestino);
                if(elementoDestino) {
                    window.scrollTo({
                        top: elementoDestino.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

