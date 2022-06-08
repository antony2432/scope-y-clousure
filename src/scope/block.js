const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    };
    console.log(fruits1);
}
fruits();

if (true) {
    var antony = 'antony';
};
console.log(antony);

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);


var z = 1;
{
    var z = 2;
    console.log(z);
}
console.log(z);

const anotherFuction = () => {
    for (let i = 0; i < 10; i++ ){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};
anotherFuction();