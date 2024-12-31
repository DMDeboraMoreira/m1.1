// Explicación del Código:JavaScript:
// Crear tarjeta:
// Se usa createElement para crear un div con la clase card que representa la tarjeta del producto.
// Se crean elementos internos: un h3 para el nombre del producto y un p para el precio.
// Se añaden estos elementos como hijos de la tarjeta usando appendChild.
// Agregar tarjeta al DOM:
// La tarjeta completa se agrega al contenedor productContainer.


// 1. Crear la clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre; // Nombre del producto
    this.precio = precio; // Precio del producto
  }
}

// 2. Seleccionar elementos del DOM
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productContainer = document.getElementById('productContainer');

// 3. Gestionar el evento de clic
document.getElementById('addProductButton').addEventListener('click', () => {
  const nombre = productNameInput.value; // Leer el nombre del producto
  const precio = productPriceInput.value; // Leer el precio del producto

  // Validar que los campos no estén vacíos
  if (!nombre || !precio) {
    alert('Por favor, completa ambos campos');
    return;
  }

  // Crear una nueva instancia del producto
  const nuevoProducto = new Producto(nombre, precio);

  // Crear la tarjeta para el producto
  const productCard = document.createElement('div'); // Contenedor principal
  productCard.classList.add('card'); // Añadir la clase 'card' para estilos

  // Título del producto
  const productTitle = document.createElement('h3');
  productTitle.textContent = nuevoProducto.nombre; // Añadir el nombre

  // Precio del producto
  const productPrice = document.createElement('p');
  productPrice.textContent = `Precio: $${nuevoProducto.precio}`; // Añadir el precio

  // Añadir elementos a la tarjeta
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);

  // Agregar la tarjeta al contenedor de productos
  productContainer.appendChild(productCard);

  // Limpiar los campos del formulario
  productNameInput.value = '';
  productPriceInput.value = '';
});


//   //Comprobación del ejercicio:
// Interacción esperada: Al escribir un nombre y un precio en los campos y hacer clic en el botón, se debería mostrar una tarjeta con el texto: Producto: [nombre], Precio: $[precio].
// Ejemplo visual: Si llenas los campos con "Manzana" y "10", deberías ver en el DOM:
// yaml
//Producto: Manzana, Precio: $10
