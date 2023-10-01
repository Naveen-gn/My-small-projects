const btn=document.getElementById("button")
const colorcode=document.getElementById("c1")
const bd=document.getElementById("bd")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    let hexcolor='#'
    for(let i=1;i<=6;i++){
        hexcolor += randhexvalue()
    }
    bd.style.backgroundColor=hexcolor
    colorcode.innerHTML=hexcolor
}
)


function randhexvalue(){
let ranindex=Math.floor(Math.random()*16)
return hex[ranindex]

}
