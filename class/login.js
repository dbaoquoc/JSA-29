let login = document.getElementById('login');
login.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = JSON.parse(localStorage.users)
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    for(let index = 0; index < user.length; index++){
        if(username.value.trim() == user[index].username && password.value.trim() == user[index].password){
            alert("ok")
            window.location.href="test.html";
        }
    }
})