function userdetails(){
    let loginuserdetails = JSON.parse(localStorage.getItem("loginuser"));
        document.getElementById('userid').innerHTML = loginuserdetails[0].loginemail;
        document.getElementById('userpassword').innerHTML = loginuserdetails[0].loginpassword;
}

document.getElementById('logoutbtn').addEventListener("click",() => {
    localStorage.removeItem("loginuser");
    document.getElementById("removerow").remove();
    window.location.href = "login.html";
});
