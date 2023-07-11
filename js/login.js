function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let i = 0;
    let readed = localStorage.getItem("account");
    let arr = JSON.parse(readed);
    while(true) {
        if (username === arr[i].accountNumber && password === arr[i].password) {
            alert("登陆成功！")
            self.location = "index.html";
            break;
        } else {
            i++;
            if(arr[i] == undefined) {
                alert("账号或密码错误！")
                break;
            }
        }
    }
}

function sginUp() {
    self.location = "register.html"
}
let account = {
};
let arr = [];

let account2 = null;

function read() {
    while (true) {
       let readed = localStorage.getItem("account");
       localStorage.removeItem("account");
        if (readed != null) {
            account2 = JSON.parse(readed);
            alert(account2)
        } else {
            break;
        }
    }
}