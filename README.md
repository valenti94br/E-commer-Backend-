**Proyecto de backend para un e-commerce** 🖥️

*Descripción* 📜

El objetivo del proyecto era crear un backend para una tienda on-line imaginaria utilizando Node.js, Express, MySQL y Sequelize. Todo ello usando una APIs REST.

*Tabla de contenidos*

- Objetivos
- Arquitectura del proyecto
- Seeders
- Tecnología
- Autor


*Objetivos* 🎯

Para completar el ejercicio se debía incluir:

1. Crear al menos cuatro tablas con asociaciones uno a muchos y muchos a muchos (Usuarios, Productos, Categorías, Pedidos) y proporcionar un diagrama para visualizar las relaciones.

2. Implementar registro de usuarios y encriptación de contraseñas utilizando Bcrypt.

3. Habilitar inicio de sesión con tokens JSON Web y el uso de middleware.

4. Crear una variedad de puntos finales CRUD.
Realizar validación de datos.

5. Utilizar sembradores para crear datos.


*Diagrama y Arquitectura*

El proyecto parte del siguiente diagrama visual creado en MySQL Workbench

![Diagrama de la base de datos](../Diagrama/Captura%20Diagrama%20del%20e-commerce.png)

Para llevarla a cabo, he aplicado la siguiente arquitectura de carpetas:

- *CONFIG* 📁

Define la base de datos en el entorno de desarrollo, así como la contraseña para autenticar tokens. Este archivo no se sube a GitHub; ahí se sube una plantilla de ejemplo.

- *CONTROLLERS* 📁

Código para diferentes puntos finales CRUD para interactuar con la base de datos. Cada tabla tiene su propio archivo.

- *MIDDLEWARE* 📁

Métodos de autenticación para verificar si un usuario ha iniciado sesión o es un administrador. Estas verificaciones son necesarias para definir las acciones que el usuario puede realizar en la base de datos.

- *MIGRATIONS* 📁

Las migraciones son un registro de cambios en la base de datos. Aquí se pueden definir las columnas de las tablas y sus propiedades antes de realizar la migración, es decir, crear o modificar una tabla.

- *MODELS* 📁

Los modelos guardan la estructura de las tablas. Como los métodos de los puntos finales hacen referencia a estos modelos, las asociaciones de las tablas, las propiedades y las validaciones.

- *NODE_MODULES* 📁

Nodemodules es una carpeta creada automáticamente por Node JS y es donde se almacenan los paquetes. Esto va también en el .gitignore

- *ROUTES* 📁

Las rutas definen el método CRUD y la URL para realizar acciones con la base de datos.

- *SEEDERS* 📁

Los seeders se utilizan para crear datos a granel en la base de datos con fines de prueba.

- *index.js*

Este es el archivo que maneja el servidor local.

- *package-lock.json y package.json*

Aquí se enumeran las dependencias.

*.gitignore*

Es el archivo que evita que se suba a GitHub la información sensible.