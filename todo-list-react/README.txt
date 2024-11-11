Este proyecto consiste en una aplicación de lista de tareas (Todo List) construida con React. La aplicación permite a los usuarios agregar, completar y eliminar tareas de forma sencilla y modular, aprovechando las ventajas de React para gestionar el estado y los efectos secundarios


____________________________________________________________________________________________________________________________________________________________________________
Instalación
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/todo-list-react.git
Instalar las dependencias:

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
Copiar código
cd todo-list-react
npm install
Levantar el servidor de desarrollo:

Para iniciar la aplicación en modo desarrollo, ejecuta:

bash
Copiar código
npm run dev
Esto abrirá la aplicación en tu navegador en la dirección http://localhost:3000.

Levantar el servidor de JSON Server (opcional para simular un backend):

Si necesitas un backend falso para almacenar las tareas, puedes iniciar json-server con el siguiente comando. Asegúrate de tener un archivo db.json con los datos de las tareas.

bash
Copiar código
npm install -g json-server
json-server --watch db.json
Esto pondrá en marcha un servidor local para manejar las tareas.

____________________________________________________________________________________________________________________________________________________________________________

Como utilizalo
Agregar nuevas tareas, llenando los campos y clicando en "Agregar tarea"
Marcar tareas como completadas en el campo de Check a la Izquierda
Eliminar tareas en el botón de "Borrar"
____________________________________________________________________________________________________________________________________________________________________________

Requisitos
Node.js y npm instalados en tu máquina.
Vite como entorno de desarrollo rápido.
React como librería principal