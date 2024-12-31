//Enunciado:
//Usa el código del ejercicio 1.
//Modifica la funcionalidad para que cada tarjeta tenga un botón que permita eliminarla del DOM.

document.getElementById('addProductButton').addEventListener('click', () => {
    const nombre = productNameInput.value;
    const precio = productPriceInput.value;
    const nuevoProducto = new Producto(nombre, precio);
  
    const productCard = document.createElement('div');
    productCard.textContent = `Producto: ${nuevoProducto.nombre}, Precio: $${nuevoProducto.precio}`;
  
    // Crear un botón para eliminar la tarjeta
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      productCard.remove(); // Eliminar la tarjeta del DOM
    });
  
    productCard.appendChild(deleteButton); // Agregar el botón a la tarjeta
    productContainer.appendChild(productCard);
  
    productNameInput.value = '';
    productPriceInput.value = '';
  });
  