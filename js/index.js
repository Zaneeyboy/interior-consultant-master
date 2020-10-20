const navOpener=document.getElementById("navbar-opener");
const navCloser=document.getElementById("modal-closer");
const modal=document.getElementById("menu-modal");

navOpener.addEventListener("click",()=>{
    console.log("Modal Opened");
    modal.style.display="block";
});

navCloser.addEventListener("click",()=>{
    console.log("Modal Closed")
    modal.style.display="none";
});
