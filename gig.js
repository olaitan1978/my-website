let video=["video/mongo.mp4","video/node.mp4","video/python.mp4"," "]
let outy=document.getElementById("vo")
let outy2=document.getElementById("jim")

let mongo=document.getElementById("mo")
let nod=document.getElementById("no")
let py=document.getElementById("py")
let reset=document.getElementById("re")

mongo.addEventListener("click",()=>{
    // alert("God is great")
    outy.setAttribute("src",video[0])
    outy2.innerHTML="YOU ARE CURRENTLY WATCHING MONGO DB VIDEO CODED BY OLUWASEYI, HAPPY VIEWING"

})
nod.addEventListener("click",()=>{
    // alert("God is great")
    outy.setAttribute("src",video[1])
    outy2.innerHTML="YOU ARE CURRENTLY WATCHING NODE JS VIDEO CODED BY OLUWASEYI, HAPPY VIEWING"
})
py.addEventListener("click",()=>{
    // alert("God is great")
    outy.setAttribute("src",video[2])
    outy2.innerHTML="YOU ARE CURRENTLY WATCHING PYTHON VIDEO CODED BY OLUWASEYI, HAPPY VIEWING"
})
reset.addEventListener("click",()=>{
    // alert("God is great")
    outy.setAttribute("src",video[3])
    outy2.innerHTML="YOUR VIDEO HAS BEEN SUCCESSFULLY RESET. THANK YOU FOR WATCHING"
})