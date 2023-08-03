let num = 4;
let num2 = 2;
let num3 = 3;
let num5 = 1;
let num4 = 8;

function imrprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imrprimirNumeros(num, num2, num3);
imrprimirNumeros(2,3,4,1,2,4,54,12);
