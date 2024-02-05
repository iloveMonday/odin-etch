let grid = document.getElementById("grid");
let resize = document.getElementById("grid-butt");
let reset = document.getElementById("reset-butt");
let item = document.querySelectorAll(".item");
let bw = document.querySelector("#bw");
let fun = document.querySelector("#fun");
let eraser = document.querySelector("#eraser");


let gridNum = 16;

function buildGrid(gridNum) {
  let divWidth = grid.offsetWidth;
  let itemSize = (divWidth / gridNum / divWidth) * 100 + "%";

  boxTotal = gridNum * gridNum;
  for (let i = 0; i < boxTotal; i++) {
    let newBox = document.createElement("div");
    newBox.className = "item";
    newBox.style.height = itemSize;
    newBox.style.width = itemSize;
    grid.appendChild(newBox);
  }
}

buildGrid(gridNum);


function getUserNum() {
  grid.innerHTML = "";
  let userNum = prompt("How many blocks we doin? (2-99)", 16);
  if (userNum > 100 || userNum < 2 || isNaN(userNum)) {
    getUserNum();
  }
  buildGrid(userNum);
}

function randomColor(){
  let letters='0123456789ABCDEF'
  let color='#'
  for(let i=0; i<6 ; i++){
      color+=letters[Math.floor(Math.random()*16)]
  }
  return color
}

resize.addEventListener("click", () => {
  getUserNum();
});

reset.addEventListener("click", () =>{
  grid.innerHTML = "";
  buildGrid(gridNum);
});

bw.addEventListener("click", () =>{
  fun.style.backgroundColor = "aqua";
  bw.style.backgroundColor = "blue";
  eraser.style.backgroundColor = "aqua"
  grid.onmouseover = (e) => {
    e.target.style.backgroundColor = "black";
  }
});

fun.addEventListener("click", () =>{
  fun.style.backgroundColor = "blue";
  bw.style.backgroundColor = "aqua";
  eraser.style.backgroundColor = "aqua"
  grid.onmouseover = (e) => {
    e.target.style.backgroundColor = randomColor();
}}
);

eraser.addEventListener("click", () =>{
  fun.style.backgroundColor = "aqua";
  bw.style.backgroundColor = "aqua";
  eraser.style.backgroundColor = "blue"
  grid.onmouseover = (e) => {
    e.target.style.backgroundColor = "blueviolet";
}}
);



  //  (e.target.style.backgroundColor = "black");

  //    if (parseInt(e.target.style.opacity) === 0){
  //     e.target.style.opacity = "0.1";
  //    }
  //    else {
  //     e.target.style.opacity = "0.5";
  //    }

  //    (e.target.style.opacity = 0.1);

  //  console.log(e.target.style.opacity);

// newBox.onMouseOver = (e) => changeColor(e);
// function changeColor(event){
//   event.target.style.background-color; "red";
// parseInt(event.target.style.opacity)
// })


// function randomRGB() {
//   let random = (min, max) =>
//     min + Math.floor(Math.random() * (max - min + 1));
//   let r = random(0, 255);
//   let g = random(0, 255);
//   let b = random(0, 255);

//   return `rgb ${r}, ${g}, ${b}`
// }