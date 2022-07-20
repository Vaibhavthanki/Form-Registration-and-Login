let logindata = [];
const loginuserdata = {
    logincheck: () => {
        let loginemail = document.getElementById('loginemail').value;
        let loginpassword = document.getElementById('loginpassword').value;
        let logindetails = JSON.parse(localStorage.getItem("users"));
        let error = 0;
        if (loginemail == "" || loginpassword == "") {
            document.getElementById("loginerror").innerHTML = "* Please enter valid input";
        } else {
          const finalResult =  logindetails.find(value => {
                return ((value.useremail == loginemail) && (value.password == loginpassword));
            })
            if (finalResult == undefined) {
                document.getElementById("loginerror").innerHTML = "* Email and Password does not match";
                return false;
            } else {
                document.getElementById("loginerror").innerHTML = "";
                return true;
            }
        }
    }
}
document.getElementById('loginform').addEventListener('submit', function (e) {
    e.preventDefault();
    const userlogindata = {
        "loginemail": document.getElementById('loginemail').value,
        "loginpassword": document.getElementById('loginpassword').value,
    };
    if (loginuserdata.logincheck()) {
        logindata.push(userlogindata);
        document.getElementById('loginform').reset();
        localStorage.setItem("loginuser", JSON.stringify(logindata));
        window.location.href = 'logindetails.html';
    } else {
        return false;
    }
});


