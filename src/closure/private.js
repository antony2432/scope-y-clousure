const person = () => {
    var saveName = 'NAme';
    return {
        mostrar: () => {
            return saveName;
        },
        agregar: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.mostrar());
newPerson.agregar('Oscar')
console.log(newPerson.mostrar());
newPerson.setName('Antony');
console.log(newPerson.getname());