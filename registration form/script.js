let signup = document.querySelector(".div5");
let div0 = document.querySelector(".div0");
let div3 = document.querySelector(".div3");
let h1 = document.getElementsByTagName("h1");
let flag = true;


signup.addEventListener('click', () => {
    if (flag) {
        div0.classList.remove("none");
        h1[0].innerHTML = "Sign Up";
        div3.innerHTML = "Sign Up";
        signup.innerHTML = "Login";
        alert("ram ram");
        flag = false;
    } else {
        div0.classList.add("none");
        h1[0].innerHTML = "Login";
        div3.innerHTML = "Login";
        signup.innerHTML = "Sign Up";
        alert("rom rom");
        flag = true;
    }
});
// if(flag){
//     signup.addEventListener('click',()=>{
//         div0.classList.remove("none");
//         h1[0].innerHTML = "Sign Up";
//         div3.innerHTML = "Sign Up";
//         signup.innerHTML = "Login";
//         alert("ram ram");
//         flag = false;
//     });
// }
// if(!flag){
//     signup.addEventListener('click',()=>{
//         div0.classList.add("none");
//         h1[0].innerHTML = "Login";
//         div3.innerHTML = "Login";
//         signup.innerHTML = "Sign Up";
//         alert("rom rom");
//         flag = true;
//     });
// }
