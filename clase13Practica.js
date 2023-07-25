// Crear una función map que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// obtenga el resultado
// lo pushee a un nuevo array
// devuelva el array final con el resultado de cada una de las llamadas al callback.

const numeros = [1, 2, 3]
const duplicar = x => x * 2
function map(numeros, duplicar){
  let array=[];
  numeros.map((element)=>{
  array.push(duplicar(element));
  })
  return array
}
console.log(map(numeros,duplicar))


// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".

const numeros2= [10,2,3,40,33,50];
const multiploDe10=x=> x%10===0;

function filter(numeros2,multiploDe10){
  let array=[];
  numeros2.map((element)=>{
    if(multiploDe10(element)){
    array.push(element);  
    }
  })
  return array;
}
console.log(filter(numeros2,multiploDe10));


// Hacer una promesa encadenada que sume 2 numeros pasados por parametro
function promise(number){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(number)
    },500);
  })
};

promise(2).
then((number)=>{
  return promise(3 + number);
}).
then((number)=>{console.log(number)}).finally(()=>{
  console.log("Promesa terminada")
})


/*
  Tardo 4s en responder la pregunta 1,
  una vez resuelta tardo 2s en responder la pregunta 2
  y finalmente 3s en responder la pregunta 3
  TIEMPO TOTAL: 9s
*/

const examen = (tiempo, pregunta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pregunta());
    }, tiempo);
  });
};

examen(4000, () => console.log('Pregunta 1 respondida'))
  .then((res) => {
    return examen(2000, () => console.log('Pregunta 2 respondida'));
  })
  .then((res) => {
    return examen(3000, () => console.log('Pregunta 3 respondida'));
  });
