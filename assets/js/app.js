const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector("name"); //cambio de n a name
const $blog = document.querySelector("blog");//cambio ed b a blog
const $location = document.querySelector('.location');//cambio de l a location


//la funcion debe ser async porque usa await
async function displayUser(username) {
  $name.textContent = 'cargando...';
  //falta el bloque tryCatch
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    //falta variable await que reciba la respuesta de response
    const data = await response.json();
    console.log(data);
    $name.textContent = `${data.name}`; //las comillas deben ser invertidas
    $blog.textContent = `${data.blog}`; //las comillas deben ser invertidas
    $location.textContent = `${data.location}`;//las comillas deben ser invertidas
    
  } catch (error) {
    handleError(error);
  }

}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $name.textContent = `Algo salió mal: ${error}`;
}

displayUser('stolinski').catch(handleError);