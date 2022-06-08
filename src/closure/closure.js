// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);


const moneyBox = () => {
    let guardar = 0;
    const counCoins = (coins) => {
        guardar += coins;
        console.log(`moneyBox: ${guardar}`);
    }
    return counCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10); 
