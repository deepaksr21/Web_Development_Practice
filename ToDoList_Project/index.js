const user_area =document.querySelector("#user_area");
const input_text = user_area.querySelector('#input_text');
const add_button = user_area.querySelector('#add_button');
const items_container=document.querySelector('#items_container');
const stats_container=document.querySelector('#stats_container');
let filter_container=document.querySelector('#filter_container');


let tasks = [];
let currentFilter="all";

loadTasks();
function loadTasks(){
    let tasks_array=localStorage.getItem("tasks_array");
    if(tasks_array){
        tasks=JSON.parse(tasks_array);
        currentFilter=localStorage.getItem("currentFilter");
        updateUI();
    }
}


input_text.addEventListener("keydown",(event)=>{
    if(event.key==="Enter" ){
        addButton();
    }
})

add_button.addEventListener("click", () => {
    addButton();
    
});


function addTask(newTask){
      tasks.push(newTask);
}

function removeTask(itemId){
    tasks=tasks.filter(task => task.id!==itemId);
}

function toggleTask(itemId){
    tasks.forEach((task)=>{
        if(itemId===task.id){
            task.completed=!task.completed; 
            
        }
    })
}

function clearTasks(){
    tasks.length=0;
}

function modifyTask(itemId,modifiedText){
    tasks.forEach(task=>{
        if(task.id===itemId){
            task.text=modifiedText;
        }
    })
}

function saveTasks(){
    localStorage.setItem("tasks_array",JSON.stringify(tasks));
    localStorage.setItem("currentFilter",currentFilter);

}

function getFilteredTasks(){
    if(currentFilter==="all") return tasks;
    else if(currentFilter==="active"){
        let filteredTasks=tasks.filter(task=> !task.completed);
        return filteredTasks;
    }else{
        let filteredTasks=tasks.filter(task=> task.completed);
        return filteredTasks;
    }

}

function updateUI(){
    renderstats();
    rendertasks(getFilteredTasks());
    
}

function addButton(){
    let task = input_text.value.trim();

    if(task !== "") {

        let newTask = {
            id: Date.now(),
            text: task,
            completed: false
        }; 
        addTask(newTask);
        saveTasks();
        updateUI();
        input_text.value = "";

    }
}

function renderstats(){
    stats_container.innerHTML="";
    if(tasks.length!==0){
        
        let totalTasks=tasks.length;
        let completedTasks=0;
        let remainingTasks=0;
        
        tasks.forEach(task=>{
            if(task.completed) completedTasks++;
            else remainingTasks++;
        })
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");
        let hr=document.createElement("hr");

        p1.id="totalTasks";
        p2.id="completedTasks";
        p3.id="remainingTasks";

        p1.innerText=`Total Tasks : ${totalTasks}`;
        p2.innerText=`Completed : ${completedTasks}`;
        p3.innerText=`Remaining : ${remainingTasks}`;

        stats_container.appendChild(hr);
        stats_container.appendChild(p1);
        stats_container.appendChild(p2);
        stats_container.appendChild(p3);
    }
}


filter_container.addEventListener("click",event =>{
    if(event.target.classList.contains("show_all")){
        currentFilter="all";
        updateUI();
       
    }else if(event.target.classList.contains("show_active")){
        currentFilter="active";
        updateUI();
    }else if(event.target.classList.contains("show_completed")){
        currentFilter="completed";
        updateUI();
    }
    
})

function rendertasks(displayTasks){
    items_container.innerHTML = "";
    if(tasks.length!==0){
        let hr=document.createElement("hr");
        items_container.appendChild(hr);
    }
    if(!user_area.querySelector("#clear_button")){
        if(tasks.length!==0){
            let clear_button=document.createElement("button");
            clear_button.id="clear_button";
            clear_button.innerText="Clear";
            user_area.appendChild(clear_button);
        }
    }else{
        if(tasks.length===0){
            let clear_button=user_area.querySelector("#clear_button");
            clear_button.remove();
        }
    }

    if(tasks.length!==0){
        filter_container.innerHTML="";
        let bt1=document.createElement("button");
        let bt2=document.createElement("button");
        let bt3=document.createElement("button");
        bt1.innerText="All";
        bt2.innerText="Active";
        bt3.innerText="Done";
        bt1.classList.add("show_all");
        bt2.classList.add("show_active");
        bt3.classList.add("show_completed");
        filter_container.appendChild(bt1);
        filter_container.appendChild(bt2);
        filter_container.appendChild(bt3);
    }else{
        let bt1=filter_container.querySelector(".show_all");
        let bt2=filter_container.querySelector(".show_active");
        let bt3=filter_container.querySelector(".show_completed");
        bt1.remove();
        bt2.remove();
        bt3.remove();
    }

    displayTasks.forEach((task) => {

        let div=document.createElement("div");
        div.className="item";
        div.dataset.id=task.id;
        let p=document.createElement("p");
        p.innerText=task.text;
        if(task.completed) p.classList.add("completed");
        
        let button1=document.createElement("button");
        button1.innerText="Remove";
        button1.className="remove_button";
        let button2=document.createElement("button");
        if(!task.completed){
            button2.innerText="Completed";
            button2.className="completed_button";
        }else{
            button2.innerText="Undo";
            button2.className="undo_button";
        }
        
        let button3=document.createElement("button");
        button3.innerText="Edit";
        button3.className="edit_button";
        div.appendChild(p);
        div.appendChild(button1);
        div.appendChild(button2);
        div.appendChild(button3);
        items_container.appendChild(div);  
   });
}

user_area.addEventListener("click",event=>{
    if(event.target.id==="clear_button"){
        clearTasks();
        saveTasks();
        updateUI();

    }})

items_container.addEventListener("click",(event)=>
{
    if(event.target.tagName==="BUTTON" && event.target.classList.contains("remove_button")){
        let item=event.target.parentElement;
        let itemId=Number(item.dataset.id);
        removeTask(itemId);
        saveTasks();
        updateUI();        
    }
    else if(event.target.tagName==="BUTTON" && (event.target.classList.contains("completed_button") || event.target.classList.contains("undo_button"))){
        let item=event.target.parentElement;
        let itemId=Number(item.dataset.id);
        toggleTask(itemId);
        saveTasks();
        updateUI();    
    }
     else if(event.target.tagName==="BUTTON" && event.target.classList.contains("edit_button")){
        let item=event.target.parentElement;
        event.target.innerText="Save";

        event.target.classList.add("save_button");
        event.target.classList.remove("edit_button");
        let p=item.querySelector("p");
        let input=document.createElement("input");
        input.value=p.innerText.trim();
        let button4=document.createElement("button");
        button4.innerText="Cancel";
        button4.classList.add("cancel_button");
        item.appendChild(button4);
        p.replaceWith(input);

    }
    else if(event.target.tagName=="BUTTON" && event.target.classList.contains("cancel_button")){
        let item=event.target.parentElement;
        let input=item.querySelector("input");
        let p=document.createElement("p");
        let save_button=item.querySelector(".save_button");
        save_button.innerText="Edit";
        save_button.classList.add("edit_button");
        save_button.classList.remove("save_button");
        let itemId=Number(item.dataset.id);
        tasks.forEach(task=>{
            if(task.id===itemId){
                p.innerText=task.text;
                if(task.completed===true){
                    p.classList.add("completed");
                }
            }
            
        })

        input.replaceWith(p);
        event.target.remove();
        
    }
    else if(event.target.tagName==="BUTTON" && event.target.classList.contains("save_button")){
        let item=event.target.parentElement;
        let itemId=Number(item.dataset.id);
        let input=item.querySelector("input");

        let modifiedText=input.value.trim();
        if(modifiedText!==""){
            event.target.innerText="Edit";
            event.target.classList.remove("save_button");
            event.target.classList.add("edit_button");
            
            modifyTask(itemId,modifiedText);
            
            saveTasks();
            let cancel_button=item.querySelector(".cancel_button");
            if(cancel_button){
                cancel_button.remove();
            }
                
        }else if(modifiedText===""){
            removeTask(itemId);
            saveTasks();
        }
        updateUI();
    }
})