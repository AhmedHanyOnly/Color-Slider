let lis = document.querySelectorAll(".main .color ul li");
let bg = document.querySelector(".ground");

lis.forEach((li) => {
  
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    localStorage.setItem("selColor", e.currentTarget.classList);
    
    localStorage.setItem("bgColor", e.currentTarget.dataset.color);
    bg.style.backgroundColor = localStorage.getItem("bgColor");
    
    // function mainColor() {
    //   e.currentTarget.classList = localStorage.getItem("selColor");
    //   bg.style.backgroundColor = localStorage.getItem("bgColor");
    // }
  });
});
