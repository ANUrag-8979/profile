let input = document.querySelector(".subjects");
let button = document.querySelector("button");
let right_container = document.querySelector(".right-container");
let left_container = document.querySelector(".left-container");
let max = document.querySelector(".Max");
let percentage = document.querySelector(".percentage");
let total = document.querySelector(".total");
let grade = document.querySelector(".grade");
let statuss = document.querySelector(".status");
// button.addEventListener("click",()=>{
    
// });
// let val = input.value;

// console.log("radhe radhe");

button.addEventListener("click",()=>{
    let val = Number(input.value);
    console.log(typeof Number(val));

    let max_marks = Number(max.value);
    for(let i=1;i<=val;i++){
        let crt = document.createElement("input");
        crt.type = "number";
        crt.setAttribute("class","marks");
        // crt.className = "marks";
        crt.placeholder = "enter the marks";
        right_container.append(crt);
        console.log("ram ram");

    }
    button.remove();
    input.remove();
    max.remove();
    let btn = document.createElement("button");
    btn.innerHTML = "Result";
    right_container.append(btn);

    btn.addEventListener("click",() =>{
        console.log("inside btn");
        let marks = document.querySelectorAll(".marks");
        let sum = 0;
        marks.forEach(element => {
            sum = sum + Number(element.value);
        });
    let perc = Math.ceil((sum/(max_marks*val))*100);
    console.log(perc);
    percentage.innerHTML = 'Percentage=' + perc + '%';
    total.innerHTML = 'Maximum = ' + max_marks*val;
    statuss.innerHTML = "PASS";
    // left_container.style.display = "block";
    left_container.classList.remove("none");
    left_container.classList.add("display");
    if(perc >= 95) grade.innerHTML = 'Grade ='  + 'A+';
    else if(perc >= 90 && perc < 95) grade.innerHTML = 'Grade ='  + 'A';
    else if(perc >= 85 && perc < 90) grade.innerHTML = 'Grade ='  + 'B+';
    else if(perc >= 80 && perc < 85) grade.innerHTML = 'Grade ='  + 'B';
    else if(perc >= 70 && perc < 80) grade.innerHTML = 'Grade ='  + 'C+';
    else if(perc >= 60 && perc < 70) grade.innerHTML = 'Grade ='  + 'C';
    else if(perc >= 50 && perc < 60)grade.innerHTML = 'Grade ='  + 'D';
    else if(perc >= 33 && perc < 50)grade.innerHTML = 'Grade ='  + 'E';
    
    else {
        grade.innerHTML = 'Grade ='  + 'F';
        statuss.innerHTML = "FAIL";
    }
    
    });
});


// let marks = document.querySelectorAll(".marks");
// let sum = 0;
// marks.array.forEach(element => {
//     sum = sum + Number(element.value);
// });
// let perc = sum/100;
// console.log(perc);

