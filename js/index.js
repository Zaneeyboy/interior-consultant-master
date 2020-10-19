
let flag = (window.innerWidth < 400) ? true : false;


if(flag){
    const burger=document.getElementById("burger");
    const x=document.getElementById("x");
    const body=document.getElementById("body");

    burger.addEventListener("click",()=>{
        burger.style.display="none";
        x.style.display="inline-block";
        body.classList.add("opaque");
        

        x.addEventListener("click",()=>{
            burger.style.display="inline-block";
            x.style.display="none";
            body.classList.remove("opaque");
        });
    });
}
else{
    console.log("Screen too big");
}


