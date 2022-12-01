let contents = document.querySelector(".contents");
let input = document.querySelector(".input");
let complete_task = document.querySelector(".complete-task");
let delete_areas = [];
let check_boxes = [];
let total_tasks = 0;

function tasknumer() {
  let completetask = document.querySelector(".complete-remaining span");
  completetask.innerHTML = `${total_tasks} `;
}
function get_delete_areas() {
  delete_areas = document.querySelectorAll(".delete-area");
  check_boxes = document.querySelectorAll(".radio");
}
function deletes() {
  delete_areas.forEach((delete_area) => {
    delete_area.addEventListener("click", function (e) {
      let idss = delete_area.getAttribute("data-value");
      let selected = document.querySelector(`#${idss}`);
      console.log(selected);

      selected.remove();
      let elem = selected.querySelector("input");
      if (!elem.checked) {
        total_tasks -= 1;
        tasknumer();
      }

      console.log(total_tasks);
    });
  });
}
input.addEventListener("keyup", function add(e) {
  if (e.keyCode == 13) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("id", `${e.target.value}`);

    content.innerHTML = ` <input class="radio" type="radio" value="${e.target.value}">
        <div class="content-text"> ${e.target.value}</div>
        <div class="delete-area" data-value=${e.target.value}><i class="fa-solid fa-trash-can"></i></div>`;

    contents.appendChild(content);
    total_tasks += 1;
    e.target.value = "";

    get_delete_areas();
   
    tasknumer();
    deletes();
  }
});

complete_task.addEventListener("click", function (e) {
  console.log(check_boxes);
  let current;
  check_boxes.forEach((check_box) => {
    if (check_box.checked) {
      current = check_box.value;
    }
  });
  if (current) {
    let compl_div = document.querySelector(`#${current}`);

    compl_div.innerHTML = `<div class="task-added">
        <img class="tick-icon"src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt="checked_icon">
    </div>
    <div class="content-text"> ${compl_div.getAttribute("id")}</div>
    <div class="delete-area" data-value=${compl_div.getAttribute("id")}><i class="fa-solid fa-trash-can"></i></div>`;
    get_delete_areas();
    total_tasks -= 1;
    
    tasknumer();
    deletes();
  } else {
    alert("Please select the task");
  }
});
