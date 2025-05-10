async function cargarContenido(pagina) {
    try {
        const response = await fetch(pagina);
        const data = await response.text();
        document.getElementById('contenido').innerHTML = data;
    } catch (error) {
        document.getElementById('contenido').innerHTML = '<p class="text-danger">Error cargando contenido.</p>';
        console.error('Error al cargar contenido:', error);
    }
}