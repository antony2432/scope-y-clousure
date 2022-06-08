// con var puedo aceder en todo el proyecto
var hello = 'HELLO';
var hello = 'HELLO +'
let world = 'Hello Word'
const helloWorld = 'Hello world!'

const anotherFuction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
// el scode es el alcanze de las variables 
//let y const no se pueden reacicnar a otro numero

helloWorld = () => {
    glovalVar = 'im global'
}

helloWorld();
console.log(glovalVar)

// const anotherFuction = () => {
//     var localVar = glovalVar = 'Im  Global'
// }
console.log(glovalVar);