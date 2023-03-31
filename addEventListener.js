const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const resultado=document.querySelector('#resultado');

//btn.addEventListener('click',btnOnClick);
form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    //console.log({event})
    //para que no se recargue la pagina
    event.preventDefault();
    const sumaInputs=parseInt(input1.value)+parseInt(input2.value);
    resultado.innerText= "resultado:" + sumaInputs;
}