const helloWorld = () => {
    const hello = 'Hello word';
    console.log(hello);
}

helloWorld();
console.log(hello);

var scope = "i am global";

const functionScope = () => {
    var scope = "i am just a local"
    const fenc = () => {
        return scope
    }
    console.log(fenc());
}

functionScope();
console.log(scope);