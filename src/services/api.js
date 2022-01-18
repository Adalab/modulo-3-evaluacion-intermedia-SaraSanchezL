// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos al API
  return fetch('https://swapi.dev/api/people/5') // Este 5 es el id de Leia Skywalker
    .then(response => response.json())
    .then(response => {
      // Cuando responde el API podemos limpiar los datos aquí
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color
      };
      return result;
    });
};

export default callToApi;

/* // Fichero src/services/api.js
const callToApi = (searchName) => {
  // Recibimos por parámetros searchName, que nos lo pasan desde App dentro del useEffect
  // Llamamos al fetch interpolando la URL del API más el nombre buscado
  return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
    .then(response => response.json())
    .then(response => {
      // La respuesta del API es un objeto que dentro tiene la propiedad results que es un array
      // Recorremos el array results obteniendo solo el nombre
      // Esto lo hacemos para limpiar la respuesta del API antes de devolverla al componente App
      // Esto es opcional pero recomendado
      const result = response.results.map(character => {
        return {
          name: character.name
        };
      });
      // Retornamos los resultados del API al componente App
      return result;
    });
};

export default callToApi; */