let bt=document.querySelector("#Button");
bt.addEventListener("mouseover",(event)=>{
    const x=event.pageX-bt.offsetLeft;
    const y=event.pageY-bt.offsetTop;
    bt.style.setProperty("--x",x + "px");
    bt.style.setProperty("--y",y + "px")
})