
let contents = document.querySelector('.contents');
let input = document.querySelector('.input');
let complete_task = document.querySelector('.complete-task');
let delete_areas=[];
let check_boxes = [];
let total_tasks = 0;
function delte_hover(){
    delete_areas.forEach((dee_area)=>{
        dee_area.addEventListener('mouseover',function(e){
            if(e.target.className == 'delete-area'){
                e.target.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
            }
        })
        dee_area.addEventListener('mouseout',function(e){
            if(e.target.className == 'delete-area'){
                e.target.innerHTML = ``;
            }
        })
    }
        
    )
}
function tasknumer(){
    let completetask = document.querySelector('.complete-remaining span');
    completetask.innerHTML=`${total_tasks} `;
}
function get_delete_areas(){
     delete_areas = document.querySelectorAll('.delete-area');
    check_boxes = document.querySelectorAll('.radio');
    
}
function deletes(){
    delete_areas.forEach((delete_area)=>{
        
        delete_area.addEventListener('click',function(e){
            let idss= delete_area.getAttribute('data-value');
        let selected = document.querySelector(`#${idss}`);
        console.log(selected);
        
        selected.remove();
        let elem = selected.querySelector('input');
        if(!elem.checked){
            total_tasks-=1;
            tasknumer();  
        }
       
        console.log(total_tasks);
        })
    })
    }
input.addEventListener('keyup',function add(e){
    
    if(e.keyCode == 13){
        console.log("Script is running2")
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('id' , `${e.target.value}`);
        
        content.innerHTML = ` <input class="radio" type="radio" value="${e.target.value}">
        <div class="content-text"> ${e.target.value}</div>
        <div class="delete-area" data-value=${e.target.value}></div>`
        console.log(content);
        contents.appendChild(content);
        total_tasks+=1;
        e.target.value = "";
        
        console.log(total_tasks);
        get_delete_areas();
        delte_hover();
        tasknumer();
        deletes();
    }
});

complete_task.addEventListener('click',function(e){
    console.log(check_boxes);
let current ;
 check_boxes.forEach((check_box)=>{
    if(check_box.checked){
        current =  check_box.value;
    }
})
    if(current){
        let compl_div = document.querySelector(`#${current}`);
        console.log(compl_div);
        compl_div.innerHTML=`<div class="task-added">
        <img class="tick-icon"src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt="checked_icon">
    </div>
    <div class="content-text"> ${compl_div.getAttribute('id')}</div>
    <div class="delete-area" data-value=${compl_div.getAttribute('id')}></div>`
    get_delete_areas();
    total_tasks-=1;
    delte_hover();
    tasknumer();
    deletes();
console.log(compl_div);

        
    }else{
        alert("Please select the task")
    }

})


