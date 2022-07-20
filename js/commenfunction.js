function inputfield(e) {
    e.value = e.value.replace(/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '')
  }
  function fullname() {
    let username = document.getElementById("username").value;
    let regexforname = /^[A-Za-z. ]{3,30}/img;
    if (!regexforname.test(username)) {
      document.getElementById('forname').innerHTML = "* Please enter valid name"
      return false;
    } else {
      document.getElementById('forname').innerHTML = ""
      return true;
    }
  }
  function email() {
    let useremail = document.getElementById("useremail").value;
    let regexforemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/img;
    if (!regexforemail.test(useremail)) {
      document.getElementById('foremail').innerHTML = "* Please enter valid e-mailid";
      return false;
    } else {
      document.getElementById('foremail').innerHTML = "";
      return true;
    }
  }
  function password() {
    let userpassword = document.getElementById('userpassword').value;
    let regexforpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/img;
    if (!regexforpassword.test(userpassword)) {
      document.getElementById('forpassword').innerHTML = "* Password must contain 8 digits";
      return false;
    }
    else {
      document.getElementById('forpassword').innerHTML = "";
      return true;
    }
  }
  function confirmpassword() {
    let upsidepassword = document.getElementById('userpassword').value;
    let checkpassword = document.getElementById("repeatpassword").value;
    if (checkpassword == "") {
      document.getElementById('forrepeatpassword').innerHTML = "* Confirmpassword does not match";
      return false;
    }
    else if (upsidepassword == checkpassword) {
      document.getElementById('forrepeatpassword').innerHTML = "";
      return true;
    } else {
      document.getElementById('forrepeatpassword').innerHTML = "* Confirmpassword does not match";
      return false;
    }
  }