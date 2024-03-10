
let a = document.querySelector(".motivations");
let l1 = document.querySelector(".loader-right-1");
let l2 = document.querySelector(".loader-right-2");
let l3 = document.querySelector(".loader-right-3");
let l4 = document.querySelector(".loader-right-4");
let l5 = document.querySelector(".loader-right-5");
let photo_loader = document.querySelector(".photo-loader");
let photo = document.querySelector(".photo");


bool = true;
    a.addEventListener("click", ()=>{
        let arr = [l1,l2,l3,l4,l5];
        for(let i=0;i<=4;i++){
        if(bool){
            arr[i].style.animationIterationCount = "0";
            console.log(i);
        }
        else {
            arr[i].style.animationIterationCount = "infinite";
        }
    }
     if(bool == true) bool = false;  
     else bool = true; 
    });


    let b = document.querySelector(".personality-center");
    let L1 = document.querySelector(".loader1");
    let L2 = document.querySelector(".loader2");
    let L3 = document.querySelector(".loader3");
    let L4 = document.querySelector(".loader4");
    let namee = document.querySelector(".namee");
    bool = true;
        b.addEventListener("click", ()=>{
            let brr = [L1,L2,L3,L4];
            for(let i=0;i<=3;i++){
            if(bool){
                brr[i].style.animationIterationCount = "0";
                console.log(i);
            }
            else {
                brr[i].style.animationIterationCount = "infinite";
            }
        }
         if(bool == true) bool = false;  
         else bool = true; 
        });
        let flag = 1;
        photo.addEventListener("click",() =>{
            if(flag == 1){
                photo_loader.style.display = "block";
                flag =0;
            }
            else{
                photo_loader.style.display = "none";
                flag = 1;
            }
        });


    

