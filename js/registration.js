let data = [];
const usercheck = {
  check: () => {
    if (localStorage.getItem("users") != null) {
      let userinputemail = document.getElementById("useremail").value;
      let registereduser = JSON.parse(localStorage.getItem("users"));
      if (registereduser.length > 0) { 

        let error = 0;

        registereduser.find((item) => {
          return (item.useremail == userinputemail) ? error = 1 : error = 0;
        });
        if (error == 1) {
          document.getElementById('foremail').innerHTML = "* this email adress already exist"
          return false;
        } else {
          document.getElementById('foremail').innerHTML = ""
          return true;
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
function adddatatoarray(){
  data = JSON.parse(localStorage.getItem("users"));
}
function submitform(e) {
  e.preventDefault();
  if (fullname() && email() && password() && confirmpassword()) {
    const formdata = {
      "fullname": document.getElementById('username').value,
      "useremail": document.getElementById("useremail").value,
      "password": document.getElementById('userpassword').value,
    };
    if (usercheck.check()) {
      data.push(formdata);
      document.getElementById('form').reset();
      localStorage.setItem("users", JSON.stringify(data));
    }
  } else {
    return false;
  }
};


//---------------------------------------------------------registration data-------------------------------------------------- 


let registerddata = JSON.parse(localStorage.getItem("users"));
function addregisterdata() {
  let str = "";
  for (let x in registerddata) {
    let datastore = `<tr><td>${registerddata[x].fullname}</td><td>${registerddata[x].useremail}</td><td>${registerddata[x].password}</td><td><button class="btn-primary" onclick="editrow(${x})" id="edit">Edit</button></td><td><button class="btn-primary" onclick="deleterow(${x})" id="delete${x}">Delete</button></td></tr>`;
    str += datastore;
  }
  document.getElementById("addrows").innerHTML = str;
}
function editrow(index) {
  document.getElementById("form1").style.display = "block";
  if (index == null || index == undefined) {
    return false;
  } else {
    let updateusername = document.getElementById("username");
    let updateuseremail = document.getElementById("useremail");
    let updateuserpassword = document.getElementById("userpassword");
    let indexvalue = document.querySelector("input[name=index]");

    updateusername.value = registerddata[index].fullname;
    updateuseremail.value = registerddata[index].useremail;
    updateuserpassword.value = registerddata[index].password;
    indexvalue.value = index;
  }
}
function deleterow(index) {
  if (index == null || index == undefined) {
    return false;
  } else {
    registerddata.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(registerddata));
    adddatatoarray();
    addregisterdata();
  }
}
function updatedata() {
  if (fullname() && email() && password() && confirmpassword()) {
    let username = document.getElementById("username").value;
    let useremail = document.getElementById("useremail").value;
    let userpassword = document.getElementById("userpassword").value;
    let indexvalue = document.querySelector("input[name=index]").value;
    document.getElementById("form1").style.display = "none"

    if (indexvalue != null && indexvalue != undefined) {
      registerddata[indexvalue] = { "fullname": username, "useremail": useremail, "password": userpassword };
      document.getElementById("form1").reset();
      localStorage.setItem("users", JSON.stringify(registerddata));
      addregisterdata();
    }
  }
}