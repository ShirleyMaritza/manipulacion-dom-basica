//h1 {color:red}
//.parrafito{..}
//#pid{...}

const h1=document.querySelector('h1');
const p=document.querySelectorAll('p');
const parrafito=document.querySelector('.parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML='Patito <br> feo';
h1.innerText='Patito <br> feo';
h1.getAttribute('pantalla');
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));
//para modificar la clase
h1.setAttribute('class', 'rojo')
//para agregar una clase
h1.classList.add('azul');
//para eliminar la clase
h1.classList.remove('rojo');

input.value="123";

//Crear elemento desde cero
document.createElement('img');
console.log(document.createElement('img'));
//Dar propiedades a una imagen
const img=document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/357141/pexels-photo-357141.jpeg?auto=compress&cs=tinysrgb&w=400');
console.log(img);

//insertar la imagen
pid.append(img);



