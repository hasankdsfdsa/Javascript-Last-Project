let allPost = document.querySelector(".allpost");
let inputName = document.querySelector(".inputName");
let post = document.querySelector(".post");
let errorName = document.querySelector(".error");
let update = document.querySelector(".update");
let scrarhInput = document.querySelector(".scrarhInput");
let scarchBtn = document.querySelector(".scarchBtn");
let demo = [];

//Post Btn Start

post.addEventListener("click", () => {
  if (inputName.value) {
    allPost.innerHTML = ``;
    demo.push({
      names: inputName.value,
    });
    display();
    typeIng();
    postCounter();
  } else {
    errorName.innerHTML = `!invalid`;
  }
});
//Post Btn End

//Type Js Start
function typeIng() {
  let type = document.querySelectorAll(".type");
  let typeArry = Array.from(type);
  typeArry.map((item) => {
    let count = 0;
    let text = item.innerHTML;
    item.innerHTML = ``;
    function typeJs() {
      item.innerHTML += text.charAt(count);
      count++;
      if (count == text.length) {
        clearInterval(stop);
      }
    }
    let stop = setInterval(() => {
      typeJs();
    }, 200);
  });
}
//Type Js End
// Counter Post Start
function postCounter() {
  let count = 0;
  let countPost = document.querySelector(".conterNumber");
  countPost.innerHTML = `Total Post : ${count}`;
  let stop = setInterval(() => {
    count++;
    countPost.innerHTML = `Total Post : ${count}`;
    if (count == demo.length) {
      clearInterval(stop);
    }
    if (demo.length == 0) {
      count = 0;
      countPost.innerHTML = `Total Post : ${count}`;
    }
  }, 200);
}
// Counter Post End

// update Btn Start
let updateIndex;
update.addEventListener("click", () => {
  allPost.innerHTML = ``;
  demo[updateIndex].names = inputName.value;
  display();
  typeIng();
  update.style.display = "none";
  post.style.display = "inline-block";
  inputName.value = ``;
});
// update Btn End


function display() {
  demo.map((item) => {
    inputName.value = "";
    if (item.names) {
      allPost.innerHTML += `<div class="card" style="width: 15rem">
              <div class="card-body">
                <h1 class="card-title mb-4 type">${item.names}</h5>
                <button class="btn btn-primary edit">${
                  isNaN(item.names) ? "Edit" : "Play"
                }</button>
                <button class="btn btn-danger delete">Delete</button>
              </div>
            </div>`;
      errorName.innerHTML = ``;
      deleteArry();
      editArray();
    }
  });
}



//Scarch Start
scrarhInput.addEventListener("input", updateValue);

function updateValue() {
  allPost.innerHTML = ``;
  demo.map((item) => {
    let text = ""
    for (let i = 0; i < scrarhInput.value.length; i++) {
      text += item.names.toLowerCase().split("")[i];
    }
  
    if (text == scrarhInput.value) {
      allPost.innerHTML += `<div class="card" style="width: 15rem">
      <div class="card-body">
        <h1 class="card-title mb-4 type">${item.names}</h5>
        <button class="btn btn-primary edit">${
          isNaN(item.name) ? "Edit" : "Play"
        }
        </button>
        <button class="btn btn-danger delete">Delete</button>
      </div>
    </div>`;
      deleteArry();
      editArray()
    }
  });
}
//Scarch End


//Delete btn Start
function deleteArry() {
  let deleteBtn = document.querySelectorAll(".delete");
  let deleteArry = Array.from(deleteBtn);
  deleteArry.map((item, index) => {
    item.addEventListener("click", () => {
      allPost.innerHTML = ``;
      demo.splice(index, 1);
      display();
      postCounter();
    });
  });
}
//Delete btn End

//Edit Btn start
function editArray() {
  let edit = document.querySelectorAll(".edit");
  let editArray = Array.from(edit);
  editArray.map((item, index) => {
    item.addEventListener("click", () => {
      updateIndex = index;
      if (item.innerHTML == "Play") {
        console.log("Start Game");
      } else {
        inputName.value = demo[index].names;
        post.style.display = "none";
        update.style.display = "inline-block";
      }
    });
  });
}
//Edit Btn End
