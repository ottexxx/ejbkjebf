//for(let i = 0; i < 10; i++){
//    console.log(i)
//}

//while = enquanto

//var i = 0;

//while(i < 10){
//    console.log(i)
//    i++;
//}

//do ... while

//var i = 0;

//do{
//    console;log(i)
//    i++;
//} while (i < 0)

//for ... of

//let esportes = ['futebol', 'basqute', 'vôlei', 'skate'];

//for(let esporte of esportes){
//    console.log(esporte);
//}

//for ... in

//let person = {
//        name: 'John',
//        age: 31,
//        weight: 60
//};

//for(let property in person){
//    console.log(property);
//    console.log(person[property]);
//}

let numberMax = 0;

for(let i = 0; i < 10; i++){
    const number = parseFloat(prompt('Digite um número'));

    numberMax = number > numberMax  ? number : numberMax;
}

document.getElementById('info').innerHTML = `O maior número digitado foi: ${numberMax}`;