function a(){   
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let td = ((a*b))
    console.log(td);
}

function b(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let td2 = ((a*b)+ (a*b*c)/100)
    console.log(td2);
}