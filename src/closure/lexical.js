const buildCuont = (i) => {
    let count = i;
        const displaycount = () => {
            console.log(count++);
        };
    return displaycount;
};

const myCount = buildCuont(1);

myCount();
myCount();
myCount();

const myOtherCount = buildCuont(10);

myOtherCount();
myOtherCount();
myOtherCount();