const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Form submitted successfully");

    form.reset();
});
const shopbtn=document.getElementById("shopbtn");
shopbtn.addEventListener("click" ,function(){

    window.location.href="shop.html";
});