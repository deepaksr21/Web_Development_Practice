

const input_text=document.querySelector('#input_text');
const add_button=document.querySelector('#add_button');

const items_container=document.querySelector('#items_container');

add_button.addEventListener("click",()=>{
  let task=input_text.value.trim();
  if(task!==""){
    let div=document.createElement("div");
    div.className="item";
    let p=document.createElement("p");
    p.innerText=task;
    let button=document.createElement("button");
    button.innerText="Remove";
    button.className="remove_button";
    let button2=document.createElement("button");
    button2.innerText="Completed";
    button2.className="completed_button";
    
    let button3=document.createElement("button");
    button3.innerText="Edit";
    button3.className="edit_button"
    div.appendChild(p);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);
    items_container.appendChild(div);

  }
  input_text.value="";



});
items_container.addEventListener("click", (event) => {

    if(event.target.tagName==="BUTTON" && event.target.classList.contains("remove_button")){
      let item=event.target.parentElement;
      item.remove();
    }

    else if(event.target.tagName==="BUTTON" && event.target.classList.contains("completed_button")){
      let item=event.target.parentElement;
      let p=item.querySelector('p');
      p.classList.toggle("completed");
    }

    else if(event.target.tagName==="BUTTON" && event.target.classList.contains("edit_button")){
      let item=event.target.parentElement;
      event.target.innerText="Save";
      event.target.classList.add("save_button");
      event.target.classList.remove("edit_button");
      let p=item.querySelector('p');
      let input=document.createElement("input");
      
      input.value=p.innerText;
      if(p.classList.contains("completed")) {
        input.classList.add("completed");
      }
      p.replaceWith(input);
    }

    else if(event.target.tagName==="BUTTON" && event.target.classList.contains("save_button")){
      
      let item=event.target.parentElement;
      let input=item.querySelector('input');

      
      if(input.value.trim()!==""){
        event.target.innerText="Edit";

      
        let p=document.createElement("p");
        p.innerText=input.value;
        if(input.classList.contains("completed")){
          p.classList.add("completed");
        }
         event.target.classList.remove("save_button");
        event.target.classList.add("edit_button");
        
        input.replaceWith(p);
      }

      
     
    }
});