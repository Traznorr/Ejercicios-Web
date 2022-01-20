
let divRoca = document.querySelector("#rocapicuda");//div de la roca






function printMousePos(event) {

  console.log(event);

  let y = event.clientY;
  let x = event.clientX;



  console.log(divRoca.style.top);

   

   
   if (event.clientY <= 100) {
    divRoca.style.top = `0`;
    } else {
      divRoca.style.top = `calc(${event.clientY}px - 50px)`;
    }
      

}

//Usamos el add event listener para llamar a la funcion printMousePos con un click.
//sin necesidad de usar el onclick en el archivo index.html
//de esta forma tenemos los archivos js y html mas independientes
document.addEventListener("click", printMousePos);

    