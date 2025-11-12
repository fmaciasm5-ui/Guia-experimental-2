/*BLOQUE 1: Ejercicios individuales (un solo número)
1. Serie de Fibonacci */
function serieFibo(){
    let n=0, ant=0, act=1, nuevo=0, serie=ant + ", " + act;
    n=parseInt(prompt("Ingrese un numero de terminos:"));
    for  (let i=3; i <= n; i++){
        nuevo=ant+act;
        serie += ", " + nuevo;
        ant= act;
        act= nuevo;
    }
    alert (`Serie de Fibonacci: ${serie}`);
}
serieFibo()

/*2. Divisores de un número */
function divisor(){
    let n=0, divisores="";
    n=parseInt(prompt("Ingrese un numero: "));
    for (let i=1; i <= n; i++){
        if (n % i == 0){
            divisores += i+ ", ";
        }
    }
    alert (`Divisores: ${divisores}`);
}
divisor()

/*3. Suma de los divisores de un número */
function sumaDivisor(){
    let n=0, suma=0;
    n=parseInt(prompt("Ingrese un numero: "));
    for (let i=1; i <= n; i++){
        if (n % i == 0){
            suma += i;
        }
    }
    alert (`Suma de divisores: ${suma}`);
}
sumaDivisor()

/*4. Verificar si un número es perfecto */
function numerosPerfectos(){
    let n=0, sumadi=0;
    n=parseInt(prompt("Ingrese un numero: "));
    for (let i=1; i < n; i++){
        if (n % i == 0){
            sumadi += i;
        }
    }
    if (sumadi == n){
        alert (`${n} es Perfecto`);
    } else {
        alert (`${n} no es Perfecto`);
    }
}
numerosPerfectos()

/*5. Verificar si un número es primo */
function numerosPrimos(){
    let n=0, primo=0;
    n=parseInt(prompt("Ingrese un numero: "));
    for (let i=1; i <= n; i++){
        if (n % i == 0){
            primo ++;
        }
    }
    if (primo == 2){
        alert (`${n} es un número Primo`);
    } else {
        alert (`${n} no es un número Primo`);
    }
}
numerosPrimos()

/*6. Invertir los dígitos de un número */
function numerosInvertidos(){
    let n=0, invertido=0;
    n=parseInt(prompt("Ingrese un numero: "));
    while ( n > 0){
        digito= n % 10;
        invertido= invertido * 10 + digito;
        n= (n - digito) / 10;
    }
    alert (`Número invertido: ${invertido}`)
}
numerosInvertidos()

/*7. Contar dígitos de un número */
function contarDigito(){
    let n=0, c=0;
    n=parseInt(prompt("Ingrese un numero: "));
    while ( n > 0){
        n= (n - (n % 10)) / 10;
        c++;
    }
    alert (`Cantidad de digitos: ${c}`)
}
contarDigito()

/*8. Factorial de un número */
function numeroFactorial(){
    let n=0, fact=1;
    n=parseInt(prompt("Ingrese un numero: "));
    for (let i=1; i <= n; i++){
        fact= fact * i;
    }
    alert (`${n}!: ${fact}`)
}
numeroFactorial()

/*9. Sumas sucesivas */
function sumasSucesivas(){
    let n=0, v=0, resultado=0;
    n=parseInt(prompt("Ingrese un número: "));
    v=parseInt(prompt("Ingrese el número de veces a sumar: "))
    for (let i=1; i <= v; i++){
        resultado += n;
    }
    alert (`Resultado: ${resultado}`)
}
sumasSucesivas()

/*10. Restas sucesivas */
function restasSucesivas(){
    let n=0, v=0;
    n=parseInt(prompt("Ingrese un número: "));
    v=parseInt(prompt("Ingrese el número de veces a restar: "))
    while (n >= v){
        n= n - v;
    }
    alert (`Resultado final: ${n}`)
}
restasSucesivas()