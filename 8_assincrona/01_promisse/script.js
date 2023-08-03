let p = Promise.resolve(5);

p.then((value) => {return value + 5})
    .then((value) => {console.log(`o valor é ${value}`)});

