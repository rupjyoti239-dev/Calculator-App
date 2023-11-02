const allBtn = document.querySelectorAll('.btn');
let input = document.querySelector('input');
const equal = document.querySelector('.equal');
const clr = document.querySelector('.clr');
const del = document.querySelector('.del');


let string ="";
allBtn.forEach(el=>{
  el.addEventListener('click', (e)=>{
    // if(e.target.textContent === 'x'){
    //  e.target.textContent = '*';
    // }
    string += e.target.textContent;
    input.value = string;
    
    equal.addEventListener('click', calculate)
    clr.addEventListener('click', clear )
    del.addEventListener('click', dele)

  })
})





function calculate(){
   string = eval(string);
     input.value = string;
}


function clear(){
  input.value = "";
  string = ""
}


function dele(){
  if(typeof string !== 'number'){
    string = string.slice(0,string.length-1);
    input.value = string
  }else{
    string = string + '';
    console.log(typeof string);
    string = string.slice(0,string.length-1);
    input.value = string
  }
  
}







