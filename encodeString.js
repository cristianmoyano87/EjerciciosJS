/*
Problema de lógica 1A resolver en cualquier lenguajeEnunciado
Dada una cadena, devuelve su codificación definidade la siguiente manera:
●Primero, la cadena se divide en el menor número posible de subcadenas disjuntasque constan de caracteres idénticos por 
ejemplo, "aabbbc" se divide en ["aa","bbb", "c"]●A continuación, cada subcadena con una longitud mayorque uno se reemplaza con
una concatenación de su longitud y el carácter repetidopor ejemplo, la subcadena "bbb" se reemplazapor "3b"
●Finalmente, todas las cadenas nuevas se concatenanjuntas en el mismo orden y sedevuelve una cadena nueva.
EjemploPara s = "aabbbc", la salida debe serlineEncoding(s) = "2a3bc"

"abbcabb""a2bca2b"
"ssiiggkooo""2s2i2gk3o"
"adfaaa""adf3a"
"bbjaadlkjdl""2bj2adlkjdl"
*/
const cadena = 'bbjaadlkjdl'

let message = '' // Try edit me
let caracterControl = cadena[0]
let contador = 0

for(i=0; i<cadena.length; i++) {
  if(cadena[i]===caracterControl) {
    contador++
  }
  else {
    //console.log(contador, caracterControl)
    message += (contador>1 ? contador : '') + caracterControl
    caracterControl = cadena[i]
    contador = 1
  }
  //console.log(cadena[i])
}
//console.log(contador,caracterControl)
message += (contador>1 ? contador : '') + caracterControl

// Update header text
document.querySelector('#header').innerHTML = cadena + ' => ' + message

// Log to console
console.log(message)