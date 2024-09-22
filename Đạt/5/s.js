console.log("Starting")


function a(){

    let ay= parseFloat(document.getElementById("ay").value);
    

    let bi= parseFloat(document.getElementById("bi").value);


    let xi= parseFloat(document.getElementById("xi").value);



    let dt  = (bi*bi - 4 * ay * xi);
    
    if (dt < 0) {
        console.log('vo nghiem')
    if (dt >0){
        console.log((-bi + Math.sqrt(dt)/2*ay));
        console.log((-bi - Math.sqrt(dt)/2*ay));


    }
    if (dt == 0){
        console.log((-bo/ay))
    }
}
}
