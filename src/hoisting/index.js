a = 2;
var a;
console.log(a); // 2

// solo se utiliza el hoisting en declaracion y no en las incializaciones
console.log(a);
var a = 2;



nameOfDog('Elmo')
function nameOfDog(name) {
    console.log(name);
};


const moneyBox = () => {
    debugger
    let saveCoins = 0;
    const counCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    }
    return counCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10); 