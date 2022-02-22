# Listado de Adalabers

El ejercicio consiste en desarrollar una página web sencilla con React, que muestra un listado de alumnas que se obtendrá a partir de un archivo JSON
(El API ya no está disponible).
Las funcionalidades principales son mostrar el listado en una tabla, filtrar alumnas por nombre o tutor, añadir nuevas alumnas y guardar toda la información en el local storage.

## Para poder trabajar sobre este ejercicio necesitamos el Starter Kit de React.

### Descripción

Vamos a llevar la cuenta de las compañeras que somos en esta promo y a apuntar la especialidad de cada
una. Queremos crear una aplicación para gestionar alumnas de Adalab.

1.  Pintar el listado de Adalabers.

- Pintar una cabecera con un título que ponga Adalabers.

- Pintar el listado de Adalabers inicial. Para ello os facilitamos los datos en la siguiente API:
  https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json \*\*

  \*\* El API ya no está disponible. Se obtienen los datos de un archivo JSON.

- Después, generar el HTML de la página con los datos que habéis obtenido.

2. Añadir a una nueva Adalaber.

- Crear un formulario con los campos:
  - Nombre de la compañera
  - Nombre de su tutora
  - Especialidad en la que destaca
  - Un botón para Añadir una nueva Adalaber.
  - Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta aparezca en la tabla.

### BONUS

#### BONUS 1: Filtrar el listado de Adalabers.

Queremos filtrar las alumnas por nombre y por tutora.
Para filtrar por nombre:

1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
2. Añade la funcionalidad para que, cuando la usuaria escriba en ese <input>, el listado de Adalabers se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria (aplicando también el filtrado por tutora, si ya lo tuvieras implementado).
   Para filtrar por tutora:
3. Añade un <select> a la cabecera que tenga las siguientes opciones:

- Cualquiera (es la opción por defecto)
- Yanelis
- Dayana
- Iván

4. Añade la funcionalidad para que, cuando la usuaria cambie ese <select>, el listado de Adalabers se
   re-pinte mostrando solo las que coincidan con la opción seleccionada (aplicando también el filtrado
   por nombre, si procede).

#### BONUS 2: Mostrar redes sociales.

1. Añade una columna más en la cabecera de la tabla.
1. Añade una celda más a cada fila.
1. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber.
   Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
1. Añade un enlace <a> al nombre de la red social que abra la URL (o dirección) de la misma.

#### BONUS 3: Maqueta a tu gusto.

### Mejoras A Realizar :

- Guardar el listado y las nuevas alumnas en el local storage.
- Revisar funcionamiento condicionales y código repetido.
- Identar código.
- Revisar metadatos en index.html
