const all = document.querySelector('#all');
const dorost = document.querySelector('#true');
const ghalat = document.querySelector('#false');
const btn = document.querySelector('button');
const p = document.querySelector('p');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input'); 


function test(){
    let a = 0;
    a = 3 * Number(dorost.value)  -  Number(ghalat.value) ;
    return a ;
}

function test2(){
    let b = 0;
    b = Number(all.value) * 3;
    return b ;
}

function total(){
    let total;
    total = Number(dorost.value) + Number(ghalat.value);
    return total; 
}

form.addEventListener('submit' , handler);
function handler(event){
    event.preventDefault();
    for (let input of inputs) {
        if(input.value==""){
            alert('همه فیلد هارا پر کنید');
            return;
        }
    }
    if(total() > Number(all.value)){
        alert('مجموع سوالات درست و غلط بیشتر از کل سوالات است')
    }else{
        let resulat;
        resulat = test() / test2();
        p.innerHTML = resulat * 100 + ' %';

        console.log(total())
    }
   
}
    
