const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const done = document.querySelector("#done");
const close = document.querySelector("#close");
const list = document.querySelector(".list");

console.log(input, addBtn, done, close, list);

let tasksToRender = [];

const taskCard = (task) => {
  return `<div class="task-container">
    <div class="dot"></div>
    <p class="task">${task}</p>
    <div class="btn-container">
      <button class="btn done" id="done">
        &#9989;
      </button>
      <button class="btn close" id="close">
        &#10060;
      </button>
    </div>
  </div>`;
};

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    console.log("incorect task");
  } else {
    tasksToRender.push(input.value);
  }

  list.innerHTML = tasksToRender
    .map((task) => {
      return taskCard(task);
    })
    .join("");
});

// close.addEventListener("click", () => {});
