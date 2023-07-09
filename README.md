# Ecommerce Proyecto React 

Ecommerce realizado para la aprobación del proyecto final del curso de React

## Características

- Componente `Navbar` para seleccionar distintas categorías de productos
- `CartWidget` en el `Navbar` que se actualiza dinámicamente al agregar productos al carrito
- Componente `ItemDetailContainer` para ajustar la cantidad del producto seleccionado
- Botón "Agregar al carrito" en `ItemDetailContainer` que lleva a una vista con los datos más relevantes del producto a comprar
- Carrito de compras con opciones para modificar la cantidad a comprar, remover todos los productos o continuar con el pago
- Completar un formulario para generar una orden de compra
- Almacenamiento de las órdenes de compra en una base de datos de Firebase
- Los productos se encuentra en una base de datos de Firebase.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio de GitHub:

        git clone https://github.com/fabianmntsns/ProyectoFinalReactAFMM.git

2. Navega hasta la carpeta principal del proyecto:

        cd ProyectoFinalReactAFMM


3. Instala las dependencias:

        npm install
        
        
4. Ejecuta el proyecto:

        npm run dev
## Uso

El proyecto cuenta con distintas funcionalidades, entre ellas la navegación entre categorías, donde podemos seleccionar productos y agregarlos al carrito de compras, una vez seleccionados los productos debemos completar un formulario, el cual generará una orden de compra con un ID para la autenticidad de la misma.


## Herramientas y Tecnologías

- React
- Vite (entorno de creación)
- React Router DOM (manejo de enrutamiento)
- Context  (gestión de estado global)
- Hooks (utilizados para funciones y componentes personalizados)
- CSS (estilos del proyecto)
