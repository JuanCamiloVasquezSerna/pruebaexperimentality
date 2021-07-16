# Prueba Experimentality
Prueba Experimentality

#### Por: Juan Camilo Vasquez Serna
#### Fecha creación: 2021/07/13
#### Fecha actualización: 2021/07/16

### Apreciaciones iniciales

1. Versión de NodeJS en que se contruyó la prueba: 16.1.0.

2. Se contruyó el código por medio del comando create-react-app.

3. Se instalaron módulos específicos para realizar algunas acciones:
	- Módulo (react-number-format) para formatear el valor numérico a precio.
	- Módulo (swiper) para funcionalidad de carrousel.
	- Módulo (axios) para el consumo de peticiones http.
	- Módulo (node-sass) para usar sass en los estilos.

4. Para ejecutar el proyecto se usa el comando npm start.

5. Para ejecutar las pruebas se usa el comando npm test.

### Funcionalidades

1. la sección PRODUCTOS MÁS BUSCADOS tiene funcionalidad de carrousel.
	- Para obtener dichos productos se consume el api: https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&discount=20-100

2. Al hacer clic en el botón "Agregar al carrito" se añade el producto al carrito de compras y se procede a la apertura visual del mismo.
	- Si se le da clic al botón del mismo producto varias veces, este aumentará en su cantidad y por ende su precio.

3. Una vez en el carrito de compras, se puede aumentar o disminuir la cantidad de productos (afectando de igual forma el precio) y realizar la eliminación del mismo.
	- Si la cantidad del producto es igual a uno, el botón de restar se deshabilita.

4. Para ver el carrito de compras sin necesidad de agregar un nuevo producto, se puede hacer click en el ícono de carrito de compras ubicado en el header del sistema.
	- Si no hay productos agregados se muestra el mensaje "¡El carrito de compras está vacío!"

5. Para salir en cualquier momento del carrito de compras se da clic en la "X" ubicada en la parte superior derecha.

6. Al copiar una palabra en el buscador, se muestran los productos que coinciden con dicha palabra.
	- Para obtener dichos productos se consume el api: https://api.mercadolibre.com/sites/MCO/search?q=Camiseta&category=MCO1430&limit=20&offset=0

7. Si la respuesta del buscador NO tiene productos, aparece el mensaje "Sin resultados".

8. Si la respuesta del buscador SI tiene productos, se procede a listarlos en una paginación de 20 productos por página.

9. Para salir de la lista de la respuesta de búsqueda basta con borrar el valor del input de búsqueda.

6. El sistema es responsive.
	- En la vista de movil, en la sección de footer, al darle click a los títulos POLÍTICAS y SOBRE NOSOTROS se despliega el contenido correspondiente.
