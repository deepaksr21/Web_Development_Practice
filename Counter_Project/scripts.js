let ele=document.querySelector('#track-count');
let count=0;
let bt1=document.querySelector('#bt1');
let bt2=document.querySelector('#bt2');
let bt3=document.querySelector('#bt3');
bt1.addEventListener("click",()=>{performOperation('+')});
bt2.addEventListener("click",()=>{performOperation('-')});
bt3.addEventListener("click",()=>{performOperation('Reset')});

document.addEventListener("keydown",(event)=>{ 
  if(event.key==='ArrowUp') performOperation('+');
  else if(event.key==='ArrowDown') performOperation('-');
  else if(event.key.toLowerCase()==='r') performOperation('Reset');
});


function performOperation(op){
  if(op==='+' ){
    if(count<10) count++;
  }
  else if(op==='-' ){
    if(count>0) count--;
    
  }else if(op==='Reset' ){
    count=0;
  }
  if(count===0){
   ele.classList.add('zero');
   ele.classList.remove('normal','ten');
   
  }
  else if(count>0 && count<10){
   ele.classList.add('normal');
   ele.classList.remove('zero','ten');
   
  }
  else if(count===10) {
    ele.classList.add('ten');
    ele.classList.remove('zero','normal');
   
  }
  ele.innerText=count;
}