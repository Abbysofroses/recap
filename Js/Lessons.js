const options = {
    name: 'bruce',
    Width: 2000,
    height: 3000,
    colors: {
        first: 'black',
        second: 'red',
        third: 'gray'
    }
};

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`option ${i} has value ${options[key] [i]}`);
        }
    } else {console.log(`option ${key} has value ${options[key]}`);
        }
}