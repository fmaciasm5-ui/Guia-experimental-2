//Bloque 1: Ejercicios con Cadenas (10 ejercicios)
//1. Contar caracteres de una palabra Entrada: "Manzana" Salida: "La palabra tiene 7 letras."
function contarCaracteres() {
  let palabra= prompt("Ingresa una palabra:");
  alert("La palabra tiene " + palabra.length + " letras.");
}
contarCaracteres()

//2. Contar apariciones de una letra específica Entrada: "Me encanta el café" Salida: "La letra 'e' aparece 4 veces."
function contarApariciones() {
  let texto= prompt("Ingresa un texto:");
  let letra= prompt("Ingresa la letra que deseas contar:");
  let contador= 0;
  for (let i= 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      contador= contador + 1;
    }
  }
  alert("La letra " + letra + " aparece " + contador + " veces.");
}
contarApariciones()

//3. Invertir un texto Entrada: "Quito" Salida: "otiuq"
function invertirTexto() {
  let text= prompt("Ingresa un texto:");
  let invertido = "";
  for (let i= text.length-1; i >= 0; i--) {
    invertido= invertido + text[i];
  }
  alert("Texto invertido:"+invertido);
}
invertirTexto()

//4. Comparar longitudes de cadenas Entrada: "García" y "Pérez" Salida: "El apellido 'García' tiene más letras."
function compararLongitud() {
    let ape1= prompt("Ingrese el primer apellido:");
    let ape2= prompt("Ingrese el segundo apellido:");
    if (ape1.length > ape2.length) {
    alert("El apellido "+ape1+" tiene más letras.");
  } else if (ape2.length > ape1.length) {
    alert("El apellido "+ape2+" tiene más letras.");
  } else {
    alert("Ambos tienen la misma cantidad de letras.");
  }
}
compararLongitud()

//5. Iniciales de un nombre completo Entrada: "Ana María Torres" Salida: "A.M.T."
function iniciales() {
    let nombre= prompt("Ingrese tu nombre completo:");
    let iniciales= nombre[0];
    for (let i= 0; i < nombre.length; i++) {
    if (nombre[i] == " ") {
      iniciales= iniciales+nombre[i + 1];
    }
  }
  alert("Iniciales: "+iniciales);
}
iniciales()

//6. Reemplazo de caracteres Entrada: "Programador" Salida: "Pr#gramad#r"
function reemplazoCaracter() {
    let texto= prompt("Ingrese un texto:");
    let letra= prompt("Ingrese la letra que sea cambiar:");
    let nueva= prompt("Ingrese que letra desea poner:");
    let nuevoTexto= "";
  for (let i= 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      nuevoTexto = nuevoTexto + nueva;
    } else {
      nuevoTexto = nuevoTexto + texto[i];
    }
  }
  alert("Nuevo texto: " + nuevoTexto);
}
reemplazoCaracter()

//7. Palabra palíndroma Entrada: "radar" Salida: "La palabra 'radar' es un palíndromo."
function esPalindromo() {
  let palabra= prompt("Ingresa una palabra:");
  let invertido= "";
  for (let i= palabra.length - 1; i >= 0; i--) {
    invertido= invertido+palabra[i];
  }
  if (palabra == invertido) {
    alert("La palabra es palíndroma.");
  } else {
    alert("La palabra no es palíndroma.");
  }
}
esPalindromo()

//8. Frase con mayor cantidad de caracteres Entrada: "Me gusta el fútbol" y "Prefiero el baloncesto" Salida: "La frase 'Prefiero el baloncesto' tiene más caracteres."
function fraseMayor() {
  let frase1= prompt("Ingresa la primera frase:");
  let frase2= prompt("Ingresa la segunda frase:");
  if (frase1.length > frase2.length) {
    alert("La primera frase es más larga.");
  } else if (frase2.length > frase1.length) {
    alert("La segunda frase es más larga.");
  } else {
    alert("Las dos frases tienen la misma cantidad de letras.");
  }
}
fraseMayor()

//9. Contar apariciones de un carácter elegido Entrada: Texto: "Examen de programación", Carácter: "m" Salida: "La letra 'm' aparece 3 veces."
function contarCaracter() {
  let texto= prompt("Ingresa un texto:");
  let letra= prompt("Ingresa la letra que deseas contar:");
  let contador= 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      contador= contador+1;
    }
  }
  alert("La letra "+letra+" aparece "+contador+" veces.");
}
contarCaracter()

//10. Dividir oración en palabras Entrada: "Me gusta aprender programación" Salida:• Me • gusta • aprender • programación
function dividirOracion() {
  let oracion = prompt("Ingresa una oración:");
  let palabra = "";
  for (let i = 0; i < oracion.length; i++) {
    if (oracion[i] != " ") {
      palabra = palabra + oracion[i];
    } else {
      alert(palabra);
      palabra = "";
    }
  }
  alert(palabra);
}
dividirOracion()

//Bloque 2: Ejercicios con Arreglos (16 ejercicios)
//Arreglos con propiedades numéricas (6 ejercicios)
//11. Divisores de números en un arreglo Entrada: [6, 10] Salida: o Divisores de 6: 1, 2, 3, 6 o Divisores de 10: 1, 2, 5, 10
function divisoresDeArreglo() {
  let numeros = [6, 10];
  for (let i = 0; i < numeros.length; i++) {
    let num=numeros[i];
    alert("Divisores de "+num+":");
    for (let c = 1; c <= num; c++) {
        r=num%c;
      if (r == 0) {
        alert(c);
      }
    }
  }
}
divisoresDeArreglo()

//12. Suma de divisores en un arreglo • Entrada: [6, 12] • Salida: o Suma divisores de 6 = 12 o Suma divisores de 12 = 28
function sumaDivisoresArr() {
  let numeros= [6, 12];
  for (let i= 0; i < numeros.length; i++) {
    let suma= 0;
    for (let c= 1; c <= numeros[i]; c++) {
        num= numeros[i] % c;
      if (num == 0) {
        suma= suma + c;
      }
    }
    alert("Suma de divisores de " + numeros[i] + " = " + suma);
  }
}
sumaDivisoresArr()

//13. Números perfectos en un arreglo • Entrada: [6, 10, 28] • Salida: "Números perfectos: 6, 28"
function numerosPerfectos() {
  let numeros= [6, 10, 28];
  for (let i= 0; i < numeros.length; i++) {
    let suma= 0;
    for (let c= 1; c < numeros[i]; c++) {
        num=numeros[i] % c;
      if (num == 0) {
        suma= suma + c;
      }
    }
    if (suma == numeros[i]) {
      alert(numeros[i] + " es perfecto.");
    }
  }
}
numerosPerfectos()

//14. Números primos en un arreglo • Entrada: [7, 8, 13] • Salida: "Números primos: 7, 13"
function numerosPrimos() {
  let numeros= [7, 8, 13];
  for (let i= 0; i < numeros.length; i++) {
    let divisores = 0;
    for (let c= 1; c <= numeros[i]; c++) {
        num=numeros[i] % c;
      if (num == 0) {
        divisores = divisores + 1;
      }
    }
    if (divisores == 2) {
      alert(numeros[i] + " es primo.");
    }
  }
}
numerosPrimos()

//15. Factorial de números en un arreglo • Entrada: [3, 5] • Salida: o 3! = 6 o 5! = 120
function factorialesDeArreglo() {
  let numeros = [3, 5];
  for (let i = 0; i < numeros.length; i++) {
    let f = 1;
    for (let c = 1; c <= numeros[i]; c++) {
      f =f*c;
    }
    alert("El factorial de " + numeros[i] + " es " + f);
  }
}
factorialesDeArreglo()

//16. Invertir números en un arreglo • Entrada: [123, 450] • Salida: [321, 54]
function invertirNumerosArr() {
  let numeros= [123, 450];
  for (let i= 0; i < numeros.length; i++) {
    let texto= "" + numeros[i];
    let invertido= "";
    for (let c= texto.length-1; c >= 0; c--) {
      invertido= invertido+texto[c];
    }
    alert("Invertido: "+invertido);
  }
}
invertirNumerosArr();

//Arreglos clásicos de práctica (10 ejercicios)
//17. Promedio de un arreglo • Entrada: [5, 7, 9, 3, 6] • Salida: "El promedio es 6."
function promedio() {
  let numeros = [5, 7, 9, 3, 6];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  promedio = suma / numeros.length;
  alert("El promedio es " + promedio);
}
promedio()

//18. Contar impares en un arreglo • Entrada: [2, 5, 7, 8, 10] • Salida: "Cantidad de impares: 2"
function contarImpares() {
  let numeros = [2, 5, 7, 8, 10];
  let contar = 0;
  for (let i = 0; i < numeros.length; i++) {
    num= numeros[i];
    imp= num % 2;
    if (imp != 0) {
      contar = contar + 1;
    }
  }
  alert("Cantidad de impares: " + contar);
}
contarImpares()

//19. Mayores de edad en un arreglo • Entrada: [15, 22, 18, 30, 12] • Salida: "Mayores de edad: 3"
function mayoresDeEdad() {
  let edades = [15, 22, 18, 30, 12];
  let contar = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      contar = contar + 1;
    }
  }
  alert("Mayores de edad: " + contar);
}
mayoresDeEdad()

//20. Buscar valor en un arreglo • Entrada: [4, 8, 15, 23], valor = 15 • Salida: "El valor 15 sí existe en el arreglo."
function buscarValor() {
  let numeros = [4, 8, 15, 23];
  let buscar = parseInt(prompt("Ingresa el número que deseas buscar:"));
  let encontrado = false;
  for (let i = 0; i < numeros.length; i++) {
     n=numeros[i]
    if (n == buscar) {
      encontrado = true;
      valoren=n;
    }
  }
  if (encontrado) {
    alert("El valor "+valoren+" sí existe en el arreglo.");
  } else {
    alert("El valor no existe en el arreglo.");
  }
}
buscarValor()

//21. Concatenar palabras de un arreglo • Entrada: ["Me", "gusta", "programar"] • Salida: "Me gusta programar"
function concatenarPalabras() {
  let palabras = ["Me", "gusta", "programar"];
  let texto = "";
  for (let i = 0; i < palabras.length; i++) {
    texto = texto + palabras[i] + " ";
  }
  alert(texto);
}
concatenarPalabras()

//22. Cubo de elementos de un arreglo • Entrada: [2, 3, 4] • Salida: [8, 27, 64]
function cuboElementos() {
  let numeros = [2, 3, 4];
  for (let i = 0; i < numeros.length; i++) {
    let cubo = numeros[i] * numeros[i] * numeros[i];
    alert("Cubo de " + numeros[i] + " = " + cubo);
  }
}
cuboElementos()

//23. Tabla de multiplicar de elementos • Entrada: [3, 5] • Salida: o Tabla de 3: 3, 6, 9, …, 30 o Tabla de 5: 5, 10, 15, …, 50
function tablasDeMultiplicar() {
  let nums= [3, 5]; 
  for (let i= 0; i < nums.length; i++) {
    let mensaje= "Tabla del "+nums[i]+":\n"; 
    for (let mult = 1; mult <= 10; mult++) {
      mensaje= mensaje + nums[i] + " x " + mult + " = " + (nums[i] * mult) + "\n";
    }
    alert(mensaje); 
  }
}
tablasDeMultiplicar();

//24. Factorial de cada número en un arreglo • Entrada: [4, 6] • Salida: [24, 720]
function factorialesEnArreglo() {
  let nums= [4, 6];
  let resultados= [];
  for (let i= 0; i < nums.length; i++) {
    let n= nums[i];
    let f= 1;
    for (let c = 1; c <= n; c++) {
      f= f * c;
    }
    resultados[i] = f;
  }
  let mensaje = "Factoriales:\n";
  for (let i = 0; i < resultados.length; i++) {
    mensaje = mensaje + "El factorial de " + nums[i] + " es " + resultados[i] + "\n";
  }
  alert(mensaje);
}
debugger;
factorialesEnArreglo()

//25. Copiar pares a otro arreglo • Entrada: [3, 8, 11, 14, 25] • Salida: [8, 14]
function copiarPares() {
  let a= [3, 8, 11, 14, 25];
  let pares= [];
  for (let i= 0; i < a.length; i++) {
    p= a[i] % 2;
    if (p == 0) {
      pares[pares.length] = a[i]; 
    }
  }
  let mensaje = "Números pares copiados:\n";
  for (let i = 0; i < pares.length; i++) {
     mensaje = mensaje + pares[i] + "\n";
  }
  alert(mensaje);
}
copiarPares()

//26. Suma de dos arreglos en un tercero • Entrada: A = [2, 4, 6], B = [1, 3, 5] • Salida: C = [3, 7, 11]
function sumaArreglos() {
  let A= [2, 4, 6];
  let B= [1, 3, 5];
  let C= [];
  for (let i = 0; i < A.length; i++) {
    C[i]= A[i] + B[i];
  }
   let mensaje = "Suma de los dos arreglos:\n";
  for (let i = 0; i < C.length; i++) {
    mensaje= mensaje + "Posición " + i + ": " + C[i] + "\n";
  }
  alert(mensaje)
}
sumaArreglos()
