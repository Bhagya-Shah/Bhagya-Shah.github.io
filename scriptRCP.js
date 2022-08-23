const randomGenerate = (array) => {
    let random = Math.floor(Math.random()*array.length)
    return array[random]
}
let score={'user':0,'computer':0}
let arr=['rock','paper','scissors']
let scoreUser=document.getElementById('scoreUser')
let scorePc=document.getElementById('scorePc')
let selection=document.getElementById('selection')
const game = (user) => {
    let pcChoice=randomGenerate(arr)
    console.log(pcChoice)

    if(user=='reset'){
        score.computer=0
        score.user=0
        scorePc.innerText=score.computer
        scoreUser.innerText=score.user
        selection.innerHTML=`<br><p style="text-align: center; font-size: larger;">Start New Game</p>`
    }
    else if(user==pcChoice){
        selection.innerHTML=`<p style="text-align: center;"><b>Its Draw</b><br><br>You both selected ${user}<p>`
        return
    }
    else if(user=='rock' && pcChoice=='paper' || user=='scissors' && pcChoice=='rock' || user=='paper' && pcChoice=='scissors'){
        score.computer+=1
        scorePc.innerText=score.computer
        selection.innerHTML=`<p style="text-align: center;"><b>PC wins</b><br><br>You selected = ${user} and PC selected = ${pcChoice}</p>`
    }
    else{
        score.user+=1
        scoreUser.innerText=score.user
        selection.innerHTML=`<p style="text-align: center;"><b>You win</b><br><br>You selected = ${user} and PC selected = ${pcChoice}</p>`
    }
    
}
