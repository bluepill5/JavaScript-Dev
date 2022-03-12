# Javascript - Servidor con Express

## Descripción del proyecto

1) ealizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:
    - GET '/api/productos' -> devuelve todos los productos.
    - GET '/api/productos/:id' -> devuelve un producto según su id.
    - POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
    - PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
    - DELETE '/api/productos/:id' -> elimina un producto según su id.

2) Tener las siguientes consideraciones:
    - Para el caso de que un producto no exista, se devolverá el objeto:
    { error : 'producto no encontrado' }
    - Implementar los métodos de la API en una clase separada, utilizando para la persistencia de sus productos un contenedor de los desarrollados en clases anteriores.
    - Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
    - Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
    - El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
    - Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.


## Ejecución [serverExpress.js](https://github.com/bluepill5/JavaScript-Dev/blob/master/work_03/serverExpress.js)

    * Para levantar el servidor: **npm run work_03**

## Funcionalidades:
### GET -> '/api/productos':
![get_productos](/work_03/images/get_productos.png)

### GET -> '/api/productos/:id':
![get_productos_id](/work_03/images/get_productos_id.png)

### POST -> '/api/productos':
![post_producto](/work_03/images/post_producto.png)

![post_producto_after](/work_03/images/post_producto_after.png)

### PUT -> '/api/productos/:id':
![put_productos_id](/work_03/images/put_producto.png)

### DELETE -> '/api/productos/:id': 
![delete_producto_id](/work_03/images/delete_producto_id.png)




