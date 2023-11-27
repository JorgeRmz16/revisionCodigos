const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); // agregar selector # para ID
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //agregar async
  $n.textContent = 'cargando...';

  try { // agregar try catch
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // convertir a json con variante data que no estaba
    console.log(data);
    $n.textContent = `${data.name}`; // cambio de comillas por acento circunflejo(algo asi)
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    handleError(error) // llamar la funcion error
  }
}
function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $n.textContent = `Algo salió mal: ${error}` // le faltaba $ como en la linea 8
}

displayUser('stolinski').catch(handleError);