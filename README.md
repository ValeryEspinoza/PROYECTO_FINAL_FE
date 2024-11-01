# React + Vite
**Implementación del Front End de Monse Solutions**

**Descripción General**

La página web de Monse Solutions, dedicada a remodelaciones y acabados, ha sido desarrollada utilizando React para ofrecer una experiencia de usuario interactiva y fluida. La aplicación incluye un manejo efectivo de operaciones CRUD y está estructurada en diversos componentes que facilitan la navegación y gestión de la información.

Estructura de Componentes
Componente de Login:

Permite a los usuarios autenticarse en la plataforma. Incluye campos para el correo electrónico y la contraseña, junto con validaciones básicas. Al enviar el formulario, se gestionan las credenciales y se establece una sesión de usuario.

**Componente de Registro:**
Facilita el registro de nuevos usuarios. Solo el administrador puede acceder a el registro. Contiene un formulario que recoge datos como nombre, correo electrónico y contraseña. Utiliza el estado local para almacenar la información antes de enviarla a una base de datos temporal simulada.

**Componente de Base de Datos Temporal:**
Simula una base de datos en el front end utilizando un array de objetos. Aquí se almacenan los datos de los proyectos y usuarios, permitiendo operaciones CRUD. Se implementan funciones para añadir, leer, actualizar y eliminar datos dentro de este componente.

**Componente de Administración:**
Proporciona una interfaz para que los administradores  gestionen los servicios. Incluye tablas para mostrar datos y formularios para agregar o editar información. Utiliza la base de datos temporal para reflejar los cambios en tiempo real.

**Formulario de proforma para descarga en formato PDF:**

**Componente de Contacto:**
Permite a los usuarios enviar consultas y solicitudes mediante un formulario implementando la Email JS. El formulario incluye con campos para nombre, correo y mensaje. Al enviarlo, los datos se envian directamente a la direccion de correo programada y devuelve un mensaje de automatizado.

**Componente "About Us":**
Presenta información sobre la empresa, su misión, visión y valores. Utiliza un diseño atractivo con imágenes y texto, brindando a los usuarios una comprensión clara de quiénes somos y qué ofrecemos.

**Componente de Localización:**
Muestra la ubicación física de Monse Solutions mediante un mapa interactivo (usando Google Maps). Proporciona direcciones y detalles adicionales para facilitar la visita a la oficina.


**Manejo de CRUD**
**El manejo de operaciones CRUD se gestiona a través de hooks como useState y useEffect:**

**Crear:** Tanto en los formularios de registro como en la administración, los usuarios pueden agregar nuevos datos. Al enviar un formulario, se actualiza el estado local y se refleja en la base de datos temporal.

**Leer:** Los datos de proyectos y usuarios se cargan desde la base de datos temporal y se muestran en la interfaz utilizando componentes de lista y tablas.

**Actualizar:** Los usuarios y administradores pueden editar información existente. Al seleccionar un elemento, se cargan sus datos en un formulario que permite realizar cambios, que se guardan en el estado.

**Eliminar:** Cada entrada en las listas de servicios o usuarios incluye una opción para eliminarla, actualizando el estado y la visualización en la interfaz de manera dinámica.

**Estilos y Responsividad**
La aplicación emplea CSS modular y frameworks como Bootstrap o Material-UI para garantizar un diseño limpio y responsivo. Esto asegura que los usuarios tengan una experiencia agradable en cualquier dispositivo, ya sea móvil o de escritorio.

**Conclusión**
La implementación del front end de Monse Solutions en React proporciona una plataforma robusta y eficiente para la gestión de servicios de remodelación y acabados. Con componentes bien estructurados y un manejo efectivo de datos, la aplicación no solo es intuitiva, sino que también permite a los usuarios y administradores interactuar de manera efectiva con la información.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 npm install react-icons --save
 npm i react-icons
 npm i --save @fortawesome/fontawesome-svg-core
 npm install sweetalert2
 npm install react-router-dom
npm install -g json-server
npm install @emailjs/browser  
