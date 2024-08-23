const nombreProductos = document.querySelector('#nombreProducto')
const precioProductos = document.querySelector('#precioProducto')
const guardarProductos = document.querySelector('#guardarProducto')
const limpiarProductos = document.querySelector('#limpiarProducto')
const mensajeError = document.querySelector('#mensajeError')




guardarProductos.addEventListener('click', () => {
   const nombre = nombreProductos.value;
   const precio = precioProductos.value;
   if (nombre.trim() === '' || precio.trim() === ''){
       // alert("Por favor, complete todos los campos.");
       mensajeError.textContent = "Por favor, complete todos los campos.";
       mensajeError.style.display = 'block';
       return;
   }
       mensajeError.style.display = 'none';
       console.log('Nombre Producto', nombreProductos.value);
       console.log('Precio Producto', precioProductos.value);


nombreProductos.value = "";
       precioProductos.value = "";


});

limpiarProductos.addEventListener('click', () => {
   nombreProductos.value = "";
   precioProductos.value = "";
});

