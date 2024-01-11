const colors=["blue","red","green","rgba(133,122,200)","#f15025"];
const btn=document.querySelector(".btn");
const color=document.querySelector(".color");
btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[random];
    color.textContent=colors[random]
});