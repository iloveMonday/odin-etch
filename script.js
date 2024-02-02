      let grid = document.getElementById('grid');
      let butt = document.querySelector("button");
      let item = document.querySelectorAll(".item");

      let gridNum = 16;

      function buildGrid(gridNum) {
        let divWidth = grid.offsetWidth;
        let itemSize = (((divWidth/gridNum)/divWidth)*100) + "%";
        grid.setAttribute("style", `height:${divWidth}px`);

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
        let userNum = prompt("How many blocks we doin?", 16);
        if (userNum > 100 || userNum < 2) {
          getUserNum();
        }
        buildGrid(userNum);
      }

      butt.addEventListener("click", () => {
        getUserNum();
      });

      // newDiv.onMouseOver = (e) => changeColor(e);
      // function changeColor(event){
      // parseInt(event.target.style.opacity)
      //}






// let grid = document.querySelector("#grid");
// let butt = document.querySelector("button");
// let item = document.querySelectorAll(".item");

// let gridNum = 16;

// function buildGrid(gridNum) {
//     boxTotal = gridNum*gridNum;
//   for (let i = 0; i < gridNum; i++) {
//     let newBox = document.createElement("div");
//     newBox.className = "item";
//     grid.appendChild(newBox);
//   }
// }

// function getUserNum() {
//   grid.innerHTML = "";
//   let userNum = prompt("How many blocks we doin?", 16);
//   if (userNum > 100 || userNum < 2) {
//     getUserNum();
//   }
//     buildGrid(userNum);
// }

// function setHeight() {
//   let divWidth = grid.offsetWidth;
//   grid.setAttribute("style", `height:${divWidth}px`);
// }

// setHeight();
// buildGrid(gridNum);

// butt.addEventListener("click", () => {
//   getUserNum();
// });

// newDiv.onMouseOver = (e) => changeColor(e);
// function changeColor(event){
// event.target.style.opacity
//}
