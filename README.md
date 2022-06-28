## Prueba de Ingreso Front Developer Aeroméxico

### Instalación
Clonar el repositorio y ejecutar `npm i` enla raíz del proyecto.

El proyecto consiste de 3 partes importantes:
- **Storybook**: Esta heramienta se utilizó para maquetar los componentes y probar su visualización en distintos tamaños de pantalla. Se ejecuta con el comando `npm run storybook`
- **API**: La API se implementa usando el paquete `json-server` para tener una versión fake que se puede consultar sobre `http://localhost:4000`. Se ejecuta con el comando `npm run api`
- **Proyecto en React**: Se implementa usando react-create-app, se instala Redux, SASS y otros paquetes de utilidad. Se ejecuta con el comando `npm start`

Es importante ejecutar primero la API y al final el proyecto en React para poder obtener los datos.

### ¿Qué es lo que más te gustó de tu desarrollo?
Hace tiempo que no volvia a usar Redux y volver a implementarlo fue muy bueno para ver el funcionamiento del que nos dota esta libreria, anclar todas las piezas y verlo funcionar sin duda fue lo mejor.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
Implementar las pruebas unitarias ya que no pude hacerlas, también mejoraría el funcionamiento de la API ya que no incluí subida de archivos.
Otro punto que mejoraría es la estructura de componntes para bajar la carga en algunos archivos.

### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
Me costó hacer funcionar Storybook con los estilos SASS, nunca había usado SASS con Storbook ya que usaba PostCSS por TailwindCSS, no agarraba los estilos hasta que me di cuenta que se tenía que instalar una dependencia de storybook para SCSS.