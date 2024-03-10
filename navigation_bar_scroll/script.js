let body = document.getElementsByTagName("body");
let nav_bar = document.querySelector(".nav-bar");

window.addEventListener("scroll",() =>{
    // nav_bar.setAttribute("class","flex");
    if (window.scrollY > 10) { // Change 100 to the scroll position where you want the navbar to appear
        nav_bar.classList.remove("none");
        nav_bar.classList.add('flex');
      }
    else {
        nav_bar.classList.add("none");
        nav_bar.classList.remove('flex');
      }
    // nav_bar.classList.remove("none");
    // nav_bar.classList.add("flex");
    console.log("ram ram");
});