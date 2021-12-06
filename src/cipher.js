const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = ()=> {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    const charsinCodificar = wordArray[currentLetterIndex];
    spanChar.innerHTML = alfabeto.includes(charsinCodificar) ? 
     alfabeto[(alfabeto.indexOf(charsinCodificar) +parseInt(rango.value)) %alfabeto.length] :
     charsinCodificar
    printChar(currentLetterIndex +1, wordArray);
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage();
}

cifrador.onsubmit = submit;

const cipher = {
    // ...
  }
  
  export default cipher