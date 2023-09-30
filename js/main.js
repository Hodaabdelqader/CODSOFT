let  display=document.getElementById("display");
let  buttons =document.querySelectorAll ("button");
let operators=["%","*","/","-","+","="];
let output="";

let calculate =(btnvalue) =>{
   if(btnvalue==="=" && btnvalue!==""){
      output=eval(output.replace("%","/100"))
   }else if(btnvalue==="Ac"){
      output="";
   }else if(btnvalue==="Del"){
      output=output.toString().slice(0,-1)
   }else{
      if(output===""&& operators.includes(btnvalue))return;
      output+=btnvalue;
   }
      display.value=output;
};
buttons.forEach((button) => {
      button.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});
   function calc(){
   try{
      display.eval(output.value)
   }
   catch(err){
      display.value="Error"
   }};