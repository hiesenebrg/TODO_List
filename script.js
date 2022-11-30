
let contents = document.querySelector('.contents');
let input = document.querySelector('.input');
let complete_task = document.querySelector('.complete-task');
let delete_areas=[];
let check_boxes = [];
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
        get_delete_areas();
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
    if(current){
        let compl_div = document.querySelector(`#${current}`);
        console.log(compl_div);
        compl_div.innerHTML=`<div class="task-added">
        <img class="tick-icon"src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt="checked_icon">
    </div>
    <div class="content-text"> ${compl_div.getAttribute('id')}</div>
    <div class="delete-area" data-value=${compl_div.getAttribute('id')}></div>`
    get_delete_areas();
    deletes();
console.log(compl_div);

        
    }else{
        alert("Please select the task")
    }
})
})


