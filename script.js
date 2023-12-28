
let btn = document.getElementById('btn')
let pad = document.getElementById('pad')

let isActive = false;

btn.addEventListener('click', function(){

    isActive = !isActive;
    if (isActive){
        btn.style.backgroundColor = 'white';
        pad.style.width = '100%';

    }

    else{
        btn.style.backgroundColor = '';
        pad.style.width = '';
    }
   
});