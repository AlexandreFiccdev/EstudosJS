async function somar(a,b){
    return a+b;
}
somar(2,4).then(value => console.log(value));

//await

function somarComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a+b);
        },4000);
    })

}

async function resSoma(a,b,c){

    let x = somarComDelay(a,b);
    let y = c;

    return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));