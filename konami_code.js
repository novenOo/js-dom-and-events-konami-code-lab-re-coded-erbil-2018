const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


const index = 0;
function init() {
  // Write your JavaScript code inside the init() function
 document.body.addEventListener('keydown',e =>{
   const key = parseInt(e.which || e.detail);
   
   if(code[index] === key){
   index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}