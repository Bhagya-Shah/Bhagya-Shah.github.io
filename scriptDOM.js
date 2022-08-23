console.log("Helloo")
let title = document.getElementById('title')
console.log(title)
title.innerText='Hello Night!'
// title.innerHTML='Hello Nigt!'
// title.innerHTML='<h6 style: style="color: red">Night</h6>'
// title.style.backgroundColor='pink'

// let red=document.getElementById('red')
// let yellow=document.getElementById('yellow')
// let green=document.getElementById('green')
// red.onclick = () => {console.log('red')}
// yellow.onclick = () => {console.log('yellow')}
// green.onclick = () => {console.log('green')}

let all=document.querySelectorAll('.box')
const count={'red':0,'yellow':0,'green':0}
all.forEach(element => {
    // element.onclick = () =>console.log(element.value)
    element.onclick = () => {
        count[element.value]+=1
        element.innerHTML=count[element.value]
    }    
});
let reset=document.getElementById('reset')
reset.onclick = () => {
    count.red=0
    count.yellow=0
    count.green=0
    all.forEach(element=>{
        element.innerHTML=element.value
    })
}

console.log(all)