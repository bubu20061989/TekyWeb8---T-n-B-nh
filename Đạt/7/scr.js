console.log("running")

let container= document.getElementById("khungchat")

let ssetting= document.getElementById("ssetting")


function connect(){
    console.log('script connect')
    khungchat.style.backgroundColor = "red"
}

function connect1(){
    console.log('script connect')
    khungchat.style.backgroundColor = "#f1f1f1"
}

let doiten= prompt("đặt tên")

function connect2(){
    console.log('script connect')
    ssetting.innerText = doiten
}