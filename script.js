const custo = document.querySelector('.total-conta');
const tips = document.querySelector('.service');
const pessoas = document.querySelector('.pessoas');

const buttonTip = document.querySelector('.tip')



buttonTip.addEventListener('click', calcular);

function calcular(){
    let cost = Number(custo.value);
    let tip = Number(tips.value) / 100;
    let people = Number(pessoas.value);

    let total = cost * tip / people;

    let totalTip = document.querySelector('.totalTip');
    
    totalTip.innerText = 'R$' + total.toFixed(2) + ((people > 1) ? ' cada' : '');
}

