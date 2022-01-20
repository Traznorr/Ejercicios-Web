
let divRoca = document.querySelector("#rocapicuda");//div de la roca
let body = document.querySelector("#body");





function printMousePos() {

console.log("holaaaaaaa");

    
  document.onclick = function(event) {


        y = event.clientY
        x = event.clientX;

        if (event.clientY <= 100) {
          divRoca.style.top = `0`;
          } else {
            divRoca.style.top = `calc(${event.clientY}px - 50px)`;
          }

      



      console.log(divRoca.style.top);

   
  }         

}




 