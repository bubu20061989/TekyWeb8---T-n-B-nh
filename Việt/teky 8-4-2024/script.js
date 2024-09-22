function a(){   
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let dt = (b*b - 4*a*c)
    if(dt > 0){
        console.log(-b + Math.sqrt(dt)) / (2*a);
        console.log(-b - Math.sqrt(dt)) / (2*a);
    }

    if(dt == 0){
        console.log(-b) / (2*a);
    }

    if (dt < 0){
        console.log("No real roots");
    }
}



