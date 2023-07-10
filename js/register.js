function sginUp() {
    checkName();
    checkUserName();
    checkemail();
    checkPassword();
    okPassword();
    if (checkName()) {
        if (checkUserName()) {
            if (checkemail()) {
                if (checkPassword()) {
                    if (okPassword()) {
                        alert("注册成功！");
                        self.location = "login.html";
                    }
                }
            }
        }
    }
}

function store() {
    let
}

function back() {
    self.location = "login.html"
}

function checkName() {
    let name = document.getElementById("name").value;
    let str = /^[\u4e00-\u9fa5a-zA-Z0-9]{3,20}$/;
    if (name == "") {
        document.getElementById("cw1").innerText = "*昵称不能为空！"
    } else {
        if (!str.test(name)) {
            document.getElementById("cw1").innerText = "*昵称不符合要求！"
        } else {
            document.getElementById("cw1").innerText = ""
            return true;
        }
    }

}

function checkUserName() {
    let username = document.getElementById("username").value;
    let str = /^[0-9a-zA-Z]{3,15}$/;
    if (username == "") {
        document.getElementById("cw2").innerText = "*用户名不能为空！"
    } else {
        if (!str.test(username)) {
            document.getElementById("cw2").innerText = "*用户名不符合要求！"
        } else {
            document.getElementById("cw2").innerText = ""
            return true;
        }
    }
}

function checkemail() {
    let email = document.getElementById("email").value;
    let str = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == "") {
        document.getElementById("cw3").innerText = "*邮箱不能为空！";
    } else {
        if (!str.test(email)) {
            document.getElementById("cw3").innerText = "*请输入正确的邮箱！";
        } else {
            document.getElementById("cw3").innerText = "";
            return true;
        }
    }
}

function checkPassword() {
    let pas1 = document.getElementById("password1").value;
    let str = /^[a-zA-Z0-9]{6,20}$/;
    if (pas1 == "") {
        document.getElementById("cw4").innerText = "*密码不能为空！";
    } else {
        if (!str.test(pas1)) {
            document.getElementById("cw4").innerText = "*密码不符合要求！";
        } else {
            document.getElementById("cw4").innerText = "";
            return true;
        }
    }
}

function okPassword() {
    let pas1 = document.getElementById("password1").value;
    let pas2 = document.getElementById("password2").value;
    if (pas2 == "") {
        document.getElementById("cw5").innerText = "*请再次输入密码！";
    } else {
        if (pas2 == pas1 && pas2 != "") {
            document.getElementById("cw5").innerText = ""
            return true;
        } else {
            document.getElementById("cw5").innerText = "两次密码输入不一致！"
            return false;
        }
    }
}