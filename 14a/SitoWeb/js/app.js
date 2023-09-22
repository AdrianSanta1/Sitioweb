'use strict';
const buscando = document.getElementById('buscando');
const inputBuscar = document.getElementById('input_buscar');
const listado = document.getElementById('listPrice');
const tem = document.getElementById('template').content;
const btnEnviar = document.getElementById('btnSend');
const form = document.getElementById('form');

//objeto validacion

const formValid = {
    nombres: false,
    apellidos: false,
    mail: false,
    celphone: false,
    politica: false
 }
 btnEnviar.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validInputsForm(formValid)===-1){
        alert("Formulario Invalido");
    }else{
        alert("Formulario Enviado");
    }
 });
 const validInputsForm =(objeto)=>{
    const values = Object.values(objeto);
    let response = values.findIndex(e=>e===false);
    return response;
 }
 
 form.addEventListener("change",(e) =>{
    const inputId = e.target.id;
    console.log(inputId);
    const valueInput = e.target.value;
    console.log(valueInput);
    const classInput = e.target.classList;
    console.log(classInput);
    //funciones para agregar estilos y quitar estilos
    const isValidClass =  () => {
       classInput.add("is-valid");
       classInput.remove("is-invalid"); 
    }
    const isInvalidClass = () => {
       classInput.remove("is-valid");
       classInput.add("is-invalid"); 
    }
    switch (inputId)   {
       case "names":
          const nombresRx =
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        formValid.nombres= valueInput.match(nombresRx) ? true : false;
        formValid.nombres ? isValidClass() : isInvalidClass();
        console.log(Object.values(formValid));

        break;
        case "lastNames":
            const lastNamesRx =
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        formValid.lastNames= valueInput.match(lastNamesRx) ? true : false;
        formValid.lastNames ? isValidClass() : isInvalidClass();
        console.log(Object.values(formValid));

        break;
        case "mail":
            const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
            formValid.mail= valueInput.match(mailRx) ? true : false;
            formValid.mail ? isValidClass() : isInvalidClass();
            console.log(Object.values(formValid));
        break;
        case "celphone":
            const celphoneRx = /^[0-9]{10}$/;
            formValid.celphone= valueInput.match(celphoneRx) ? true : false;
            formValid.celphone ? isValidClass() : isInvalidClass();
            console.log(Object.values(formValid));
        break;
    }
 } ) ;


//const fragment = document.createDocumentFragment();
const fragment = new DocumentFragment();
buscando.addEventListener('click',(e)=>{
    if(input_buscar.classList.contains('buscar0culto')){
        input_buscar.classList.remove('buscar0culto');
        input_buscar.classList.add('buscarVisible');
    }else if(input_buscar.classList.contains('buscarVisible')){
        input_buscar.classList.remove('buscarVisible');
        input_buscar.classList.add('buscar0culto');
        }
    }
);

async function obtenerLista(){
    const respuesta =  await axios
                        .get("https://pokeapi.co/api/v2/pokemon")
                        .then((response) => {
                            const resultado = response.data.results;
                            let poke = [];
                            for(const i in resultado){
                                poke.push(resultado[i]);  
                            }
                            console.log(poke);
                            return poke;
                        })
                        .catch((error) => {
                            console.error(error);
                            return 0;
                        });
    return respuesta;
}
const data = await obtenerLista();
console.log(data);
const comprobarTem = "content" in document.createElement("template");
if (comprobarTem){
    data.forEach(element =>{
        tem.querySelector('#code').innerHTML = `Codigo${element.name}`;
        tem.querySelector('a').innerHTML = `${element.url}` ;
        const myElemet = tem.cloneNode(true);
        fragment.appendChild(myElemet);
    }
    );
}
listado.appendChild(fragment);
