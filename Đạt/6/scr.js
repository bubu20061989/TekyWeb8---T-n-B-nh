
console.log('starting')

function tinh0thue(){
    const a= parseFloat(document.getElementById("a").value);
    const b= parseFloat(document.getElementById("b").value);
    let ketqua= a*b
    console.log((ketqua))
}

function tinhcthue(){
    const a= parseFloat(document.getElementById("a").value);
    const b= parseFloat(document.getElementById("b").value);
    const c= parseFloat(document.getElementById("c").value);
    let ketqua=(a*b)+((a*b)*c/100)
    console.log((ketqua))
}


