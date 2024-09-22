function commit(){
    let a = (document.getElementById('a').value);
    let b = (document.getElementById('b').value);
    let c = (document.getElementById('c').value);
    let d = (document.getElementById('d').value);

    console.log("Name: " + a);
    console.log("Email: " + b);
    console.log("Subject: " + c);
    console.log("Message: " + d);

    // Điền nội dung vào modal
    document.getElementById('modal-body').innerHTML = 
        "<p><strong>Name:</strong> " + a + "</p>" +
        "<p><strong>Email:</strong> " + b + "</p>" +
        "<p><strong>Subject:</strong> " + c + "</p>" +
        "<p><strong>Message:</strong> " + d + "</p>";
}
