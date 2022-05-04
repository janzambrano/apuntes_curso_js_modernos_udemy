// Clase 1
//document.getElementById('app2').innerHTML = 'Hola Mundo, del segmento de código Javascript del archivo app.js';

// Clase 2
//let nombre = prompt('Cual es tu nombre?');
//let edad = prompt('Cual es tu edad?');
//document.getElementById('app3').innerHTML = `Bienvenido ${nombre} de ${edad} años`;

// Clase 3 enviar valores a la consola
console.log("Enviar a consola");
console.log(2*8);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,4]);
//ordena datos en una tabla
console.table([1,2,3,4]);

//como alerta de error 
console.error("algo salio mal");

//para comprobar cuanto tiempo tiene de ejecución un código
console.time('hola');
console.warn('hubo un error');
console.warn('hubo un error');
console.warn('hubo un error');
console.warn('hubo un error');
console.warn('hubo un error');
console.timeEnd('hola');

// Clase 5 Creación de variables var, let y const
// las variables no pueden tener números al inicio, ni caracteres especiales al inicio

//inicializando
var nombre = 'Juan';

//redifiniendo el valor de la variable creada, es decir la sobrescribe
nombre = 'Carlos';

console.log(nombre);

// formas de escribir variable
//Camelcase la segunda o siguientes palabras inician con mayúscula
//var
var nombreCompleto = 'Juan Perez';
var modeloDeAutosNuevos = 'Chevrolet Cruze';

//Underscore separando las palabras con guion bajo
var nombre_completo = 'Juan Perez';

//Pascal case desde la primera palabra usar primera letra mayúscula
var NombreCompleto = 'Juan Perez';

// aca vemos que usando var se puede volver a redeclarar una variable, por eso no es recomendada porque a lo largo de un código esto puede dar problemas
var producto1 = 'libro';
var producto1 = 'lapiz';
console.log(producto1);

// let no se puede volver a declarar como var
let producto2 = 'libro';
//let producto2 = 'lápiz'; // esto genera error porque ya esta redeclarada la variable no es necesaria volver a declarar si simplemente queremos cambiar su valor solo tendríamos que reinizializar con el nuevo valor
producto2 = 'lapiz';
console.log(producto2);

//const las constante siempre deben de tener un valor de inicio y no se pueden reasignar un valor a ellas después
const producto3 = 'cuaderno';
//producto3 = 'cartuchera'; aca vemos que no se puede colocar otro valor a la variable previamente definida
console.log(producto3);

// Tipos de datos
// String o cadenas de textos se identifican con comillas sencillas o doble

let nombre1 = 'Juan Pablo Perez';
let mensaje1 = 'Esto es una cita de teatro "ser o no ser"'; //aca se puede ver que podemos utilizar dentro de una frase comillas simples o sencillas dependiendo de lo requerido lo único es no intercalar porque no funciona
let mensaje2 = 'Esto es una cita de teatro \'ser o no ser\''; //otra forma de usar las mismas comillas para indicar que es un string y cita dentro es lo llamado escapar comillas con la barra signo \ en los extremos de la cita como se muestra
console.log(nombre1);
console.log(mensaje1);
console.log(mensaje2);

// los string pueden concatenarse aca un ejemplo
//aca uso la coma para inicial otra variable let sin colocar let nuevamente
let nombre2 = 'Jan ',
    mensaje = 'estas aprendiendo Javascript';

console.log(nombre2 + " " + mensaje);

//templete literal para mostrar cadenas
console.log(`${nombre2} ${mensaje}`);


// clase 8 string y sus métodos en JavaScript
//length este método devuelve la cantidad de caracteres que tiene un string también incluye espacios se puede ver en el segundo ejemplo
console.log(nombre2.length);

let mensajeCompleto = nombre2 + mensaje;
console.log(mensajeCompleto);
console.log(mensajeCompleto.length);

// concant es un método para concatenar pero de muy poco uso aca un ejemplo
console.log(nombre2.concat('esta aprediendo un leguaje JavaScript moderno'));

// toLocaleUpperCase convierte el texto en mayúscula
console.log(mensajeCompleto.toLocaleUpperCase());

// toLocaleLowerCase y toLowerCase convierte el texto en minúscula
console.log(mensajeCompleto.toLocaleLowerCase());

// indexOf traer el numero en donde comienza la palabra buscada
console.log(mensajeCompleto.indexOf('Javascript'));

//substring esto sustrae de izquierda a derecha la posición definida con los números
console.log(mensajeCompleto.substring(0,3));

//slice parecido al substring con la diferencia que inicia desde el final de la cadena
console.log(mensajeCompleto.slice(-10));

//split corta la cadena de texto usando como comodín el separador indicado en los paréntesis en este caso es el espacio y lo convierte en un arreglo el resultado
console.log(mensajeCompleto.split(" "));

//replace busca una palabra y la remplaza por otra en una cadena de texto
console.log(mensajeCompleto.replace('Javascript', 'JV'));

//includes busca dentro de una cadena de texto otro string y retorna un booleano true o false
console.log(mensajeCompleto.includes('Javascript'));

//repeat repite N cantidad de veces la cadena de texto 
console.log(mensajeCompleto.repeat('5'));

//clase 11
//operaciones con variables numéricas

const   numero1 = 30,
        numero2 = 20,
        numero3 = 20.20,
        numero4 = .1020,
        numero5 = -3;

let resultados;
//suma
resultados = numero1 + numero2;
console.log(resultados);

//resta
resultados = numero1 - nombre2;
console.log(resultados);

//multiplicar
resultados = numero1 * 2;
console.log(resultados);

//dividir
resultados = numero1 / numero2;
console.log(resultados);

//modulo o residuo 
resultados = numero1 % numero2;
console.log(resultados);

//Pi
resultados = Math.PI;
console.log(resultados);

//redondeo de cifras decimales
resultados = Math.round(numero3);
console.log(resultados);

//redondeo hacia arriba del valor
resultados = Math.ceil(numero3);
console.log(resultados);

//redondeo hacia abajo del valor
resultados = Math.floor(numero3);
console.log(resultados);

//funciones para raíz cuadrada de un numero
resultados = Math.sqrt(numero2);
console.log(resultados);

//convirtiendo un numero en absoluto (convirtiéndolo en positivo)
resultados = Math.abs(numero5);
console.log(resultados);

//multiplicar a la potencia
resultados = Math.pow(numero2,3);
console.log(resultados);

//devuelve el numero minima de varios
resultados = Math.min(numero1, numero2, numero4, numero4, numero5,);
console.log(resultados);

//devuelve el numero máximo de varios
resultados = Math.max(numero1, numero2, numero4, numero4, numero5,);
console.log(resultados);

//generar un numero aleatorio
resultados = Math.random();
console.log(resultados);

//orden de operaciones sin paréntesis multiplicaciones y divisiones primeros y luego restas y sumas
resultados = 10 + 20 * 5;
console.log(resultados);

//para hacer primero la suma la enceramos en paréntesis 
resultados = (10 + 20) * 5;
console.log(resultados);

//operador de incremento ++ para sumar en mas de 1 seria el valor +=X 
//operador de decremento -- para restar en mas de 1 seria el valor -=X

//clase 12 tipos de datos

let valor1   = 'Juan', //string o cadenas de textos
    valor2   = 20, //datos numéricos
    valor3   = true, //booleanos de true and false
    valor4   = null, //que no tiene ningún valor asociado
    valor5   = undefined, //que no tiene ningún valor definido
    valor10  = NaN; //que significa "no es un numero"
    //del valor1 hasta el 5 y 10 se les conoce como datos primitivos 
    valor6   = {
        nombre : 'Calós'
    }, //obejro literal
    valor7   =  ['Chevrolet', 'Mazda', 'Fiat'], //arreglo de datos
    valor8   = Symbol('id'), //datos tipos símbolos, son datos que no se pueden convertir y son únicos asi sean iguales es decir Symbol('id') === Symbol('id') da false
    valor9   = new Date(); // datos de fecha que también son objetos
    //desde el valor7 hasta el 9 todos estos se les conoce como de referencia o de tipo objeto 

console.log(typeof (valor1));
console.log(typeof (valor2));
console.log(typeof (valor3));
console.log(typeof (valor4));
console.log(typeof (valor5));
console.log(typeof (valor6));
console.log(typeof (valor7));
console.log(typeof (valor8));
console.log(typeof (valor9));
console.log(typeof (valor10));

// Clase 13 operadores de comparación
let num1 = 20,
    num2 = 50,
    num3 = "20",
    num4 = 20;
    num5 = 20.99434534532453;

    // pueba si num1 es mayor que num4  se utiliza estos signos <> retorna un booleano
console.log(num1 < num2);

//comparador de igualdad se asigna con == y para que sea estricto con ===
console.log(num1 == num3); // arroja true porque no es estricto y no compara el tipo de dato solo la cadena
console.log(num1 === num3);// da false porque es estricto y compra el tipo de dato que en este caso tenemos un string con un number

// != compara si los valores son diferentes, en caso que tengamos 2 uno string y otro number con los mismos texto arroja false porque no compara de forma estricta 
console.log(num1 != num3);

// !== para comparar de forma estricta y evaluá también el tipo de datos si es diferente 
console.log(num1 !== num3);

//Clase 14 convertir de string a number usan la palabra reservada "Number", "parseInt" o "parseFloat"
// convirtiendo Number este puede convertir enteros y flotantes 
console.log(num1 + Number(num3));

//convirtiendo con parseInt, es importante que este tipo de conversion no toma en cuenta los decimales o flotantes lo convierte en un entero
console.log(num1 + parseInt(num3));

//convirtiendo con parseInt, este si toma en cuenta los decimales o flotantes
console.log(num1 + parseFloat(num3));

//Clase 15 toFixed para trabajar solo con números flotantes y la cantidad de decimales a redondear o mostrar
//redondea
console.log(num5.toFixed());

//definiendo en el paréntesis la cantidad de decimales a mostrar
console.log(num5.toFixed(4));

//Clase 16 convertir de numero, arreglos o booleanos a string puede ser practico para conteo de caracteres y validación de datos
let codigoPostal = 90230;
codigoPostal = String(codigoPostal); // aca hacemos la conversion de number a string

console.log(typeof(codigoPostal)); // resultado tipo string

//ahora podemos contar la cadena caracteres de este string para hacer una validación
console.log(codigoPostal.length === 5); // si es igual a 5 caracteres mostrar true, si no se convierte string no puede hacer el conteo de caracteres

//booleanos
let booleano = true;
booleano = String(booleano);

console.log(typeof(booleano)); 

console.log(booleano.length);

//booleanos
let arreglo = [1, 3, 6, 8, 12, 20];
arreglo = arreglo.toString(); //otra forma de convertir 

console.log(typeof(arreglo)); 
console.log(arreglo);
console.log(arreglo.length);

//clase 17