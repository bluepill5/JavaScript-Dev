# Javascript - Servidor con Express

## Descripción del proyecto

1) Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
    - Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
    
    - Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
2) Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

## Ejecución

1) Para levantar el servidor: **npm run work_02** 
2) Los distintos **end points**:
    * '/':
    * '/productos_Objet': Muestra los productos de un objecto
    * '/productoRandom_Object': Muestra un producto de forma aleatoria de un objecto
    * '/productos': Muestra los productos de un archivo
    * '/productoRandom': Muestra un producto de forma aleatoria de un archivo


