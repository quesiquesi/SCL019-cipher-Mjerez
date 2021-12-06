const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = ()=> {
const wordArray = [...inputOriginal.value.toUpperCase()]
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}
cifrador.onsubmit = submit;

const cipher = {
    // ...
  }
  
  export default cipher
 
