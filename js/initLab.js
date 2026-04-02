const btn=document.getElementById("themeToggle")
const icon=btn.querySelector("i")
const saved=localStorage.getItem("theme")
if(saved){
document.documentElement.setAttribute("data-theme",saved)
icon.className=saved==="dark"?"fa-solid fa-sun":"fa-solid fa-moon"
}
btn.onclick=()=>{
const dark=document.documentElement.getAttribute("data-theme")==="dark"
document.documentElement.setAttribute("data-theme",dark?"light":"dark")
localStorage.setItem("theme",dark?"light":"dark")
icon.className=dark?"fa-solid fa-moon":"fa-solid fa-sun"
}

const menuBtn=document.getElementById("menuBtn")
const mobileMenu=document.getElementById("mobileMenu")

menuBtn.onclick=()=>{
mobileMenu.classList.toggle("active")
menuBtn.innerHTML=mobileMenu.classList.contains("active")
?'<i class="fa-solid fa-xmark"></i>'
:'<i class="fa-solid fa-bars"></i>'
}

setInterval(()=>{document.getElementById("time").innerText=new Date().toLocaleString()},1000)

const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");


document.querySelector(".logo-wrap").addEventListener("click", function () {
  this.classList.toggle("active");
});


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  document.body.style.overflow = "hidden";
  
  setTimeout(() => {
    loader.classList.add("fade-out");
    document.body.style.overflow = "auto";
  }, 2000);
});
