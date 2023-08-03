let listas = document.querySelectorAll('.items-azuis');
let listas2 = document.querySelectorAll(".items-vermelhos")


console.log(listas);
console.log(listas2);
for(i = 0; i < 3;i++){
    listas[i].style.color = 'blue';
}
for(i = 0; i < 3;i++){
    listas2[i].style.color = 'red';
}
