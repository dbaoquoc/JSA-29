function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

// var a = document.getElementById("loginBtn");
// var b = document.getElementById("registerBtn");
// var x = document.getElementById("login");
// var y = document.getElementById("register");

// function login() {
//     x.style.left = "4px";
//     y.style.right = "-520px";
//     a.className += " white-btn";
//     b.className = "btn";
//     x.style.opacity = 1;
//     y.style.opacity = 0;
// }

// function register() {
//     x.style.left = "-510px";
//     y.style.right = "5px";
//     a.className = "btn";
//     b.className += " white-btn";
//     x.style.opacity = 0;
//     y.style.opacity = 1;
// }

let register = document.getElementById("register");
register.addEventListener("submit", (e) =>{
    e.preventDefault();
    // alert("ok")
    // console.log("ooooo")
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let number = /[0-9]/g;
    let lowerCaseletter = /[a-z]/g;
    let upperCaseletter = /[A-Z]/g;

    console.log(email.value.trim() + "" + username.value + "" + password.value);
    if(username.value.trim().length == 0 && password.value.trim().length == 0){
        alert("Please write username and email again")
    }else if(username.value.trim().length == 0){
        alert("Please write username again")
    }else if(password.value.trim().length == 0){
        alert("Please write password again")
    }else if(password.value.trim().length<8){
        alert("Please write password longer")
    }else if(!password.value.trim().match(number)){
        alert("Password need number")
    }else if(!password.value.trim().match(lowerCaseletter)){
        alert("Password need lowerCaseletter")
    }else if(!password.value.trim().match(upperCaseletter)){
        alert("Password need upperCaseletter")
    }else{
        if(localStorage.users){
            // alert("ok")
            let user = JSON.parse(localStorage.users);
            user.push({
                username: username.value.trim(),
                email: email.value.trim(),
                password: password.value.trim()
            })
            localStorage.setItem("users", JSON.stringify(user))
        }else{
            localStorage.setItem("users", JSON.stringify([{
                username: username.value.trim(),
                email: email.value.trim(),
                password: password.value.trim()
            }]))
        }
    }
    alert("Create account success")
    document.location.replace("login.html")


})


















// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.loginlink');
// const registerLink = document.querySelector('.registerlink');
// const btnPopup = document.querySelector('.btnLoginpopup');
// const iconClose = document.querySelector('.iconclose');

// registerLink.addEventListener('click', ()=>{
//     wrapper.classList.add('active')
// });

// loginLink.addEventListener('click', ()=>{
//     wrapper.classList.remove('active')
// });

// btnPopup.addEventListener('click', ()=>{
//     wrapper.classList.add('activepopup')
// });

// iconClose.addEventListener('click', ()=>{
//     wrapper.classList.add('activepopup')
// });