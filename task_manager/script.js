let item = document.querySelectorAll(".item");
let done = document.querySelector(".done");
let plus = document.querySelectorAll(".plus");
let container = document.querySelector(".container");
plus.forEach(element => {
    element.addEventListener("click",()=>{
    let len = item.length;
    let clone = item[len-1].cloneNode(true);
    item[len-1].after(clone);
    // let crt_input = document.createElement("input");
    // let crt_done = document.createElement("div");
    // let crt_plus = document.createElement("div");
    // crt_input.type = "text";
    // crt_input.className = "box";
    // crt_done.className = "done";
    // crt_plus.className = "plus";
    // console.log("ram ram");
    // item.after(crt_input);
    // item.after(crt_done);
    // item.after(crt_plus);
});
});
// plus.addEventListener("click",()=>{
//     let len = item.length;
//     let clone = item[len-1].cloneNode(true);
//     item[len-1].after(clone);
//     // let crt_input = document.createElement("input");
//     // let crt_done = document.createElement("div");
//     // let crt_plus = document.createElement("div");
//     // crt_input.type = "text";
//     // crt_input.className = "box";
//     // crt_done.className = "done";
//     // crt_plus.className = "plus";
//     // console.log("ram ram");
//     // item.after(crt_input);
//     // item.after(crt_done);
//     // item.after(crt_plus);
// });