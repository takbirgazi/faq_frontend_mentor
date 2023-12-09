let click1 = document.querySelector(".toggle1");
let img1 = document.querySelector(".tgl_img1");
let desc1 = document.querySelector(".toggle_desc1");

let click2 = document.querySelector(".toggle2");
let img2= document.querySelector(".tgl_img2");
let desc2 = document.querySelector(".toggle_desc2");

let click3 = document.querySelector(".toggle3");
let img3 = document.querySelector(".tgl_img3");
let desc3 = document.querySelector(".toggle_desc3");

let click4 = document.querySelector(".toggle4");
let img4 = document.querySelector(".tgl_img4");
let desc4 = document.querySelector(".toggle_desc4");


click1.addEventListener("click", (e)=>{

    desc1.classList.toggle("active");

    if (img1.src.endsWith("assets/images/icon-plus.svg")) {
        img1.src = "assets/images/icon-minus.svg";
      } else {
        img1.src = "assets/images/icon-plus.svg";
      }
})

click2.addEventListener("click", (e)=>{

    desc2.classList.toggle("active");

    if (img2.src.endsWith("assets/images/icon-plus.svg")) {
        img2.src = "assets/images/icon-minus.svg";
      } else {
        img2.src = "assets/images/icon-plus.svg";
      }
})

click3.addEventListener("click", (e)=>{

    desc3.classList.toggle("active");

    if (img3.src.endsWith("assets/images/icon-plus.svg")) {
        img3.src = "assets/images/icon-minus.svg";
      } else {
        img3.src = "assets/images/icon-plus.svg";
      }
})

click4.addEventListener("click", (e)=>{

    desc4.classList.toggle("active");

    if (img4.src.endsWith("assets/images/icon-plus.svg")) {
        img4.src = "assets/images/icon-minus.svg";
      } else {
        img4.src = "assets/images/icon-plus.svg";
      }
})