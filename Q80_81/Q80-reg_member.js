var ipId;
var ipPw;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipEmail_add;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSexes; // 주의
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var user_name; 
var email;
var email_add;
var birth_y;
var birth_m;
var birth_d;
var tel_1;
var tel_2;
var tel_3;

var sex; 

window.onload = function () {
    ipId = document.getElementById("id");
    ipPw = document.getElementById("pw");
    ipPw_re = document.getElementById("pw_re");
    ipUser_name = document.getElementById("user_name");
    ipEmail = document.getElementById("email");
    ipEmail_add=document.getElementById("email_add");
    ipBirth_y = document.getElementById("birth_y");
    ipBirth_m = document.getElementById("birth_m");
    ipBirth_d = document.getElementById("birth_d");
    ipTel_1 = document.getElementById("tel_1");
    ipTel_2 = document.getElementById("tel_2");
    ipTel_3 = document.getElementById("tel_3");

    ipSexes = document.getElementsByName("sex");  // 주의
}

function check() {
    id = ipId.value;
    pw = ipPw.value;
    pw_re = ipPw_re.value;
    user_name= ipUser_name.value; 
    email = ipEmail.value;
    email_add=ipEmail_add.value;
    birth_y = ipBirth_y.value;
    birth_m = ipBirth_m.value;
    birth_d = ipBirth_d.value;
    tel_1 = ipTel_1.value;
    tel_2 = ipTel_2.value;
    tel_3 = ipTel_3.value;

    for (var i = 0; i < ipSexes.length; i = i + 1) {
        // / ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if (ipSexes[i].checked == true) {
            sex = ipSexes[i].value;
             // 해당 라디오 버튼의 값을 변수에 저장
        }
    }

    var userInfo =
        "id: " + id + "\n" +
        "pw: " + pw + "\n" +
        "pw_re: " + pw_re + "\n" +
        "user_namer: " + user_name + "\n" + 
        "email: " + email + "@"+ email_add+ "\n" +
        "birth_y: " + birth_y + "\n" +
        "birth_m: " + birth_m + "\n" +
        "birth_d: " + birth_d + "\n" +
        "tel_1: " + tel_1 + "\n" +
        "tel_2: " + tel_2 + "\n" +
        "tel_3: " + tel_3 + "\n" +
        "sex: " + sex;

    alert(userInfo);

    if (checkId() && checkPw() && checkPw_re() && checkEqualPwAndPwRe() && checkUserName() && checkEmail()) {
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId() {
    if (id.length >= 4 && id.length <= 12) {
        console.log("Ok ID");
        return true;
    } else {
        console.log("No ID");
        return false;
    }
}

function checkPw() {
    if (pw.length >= 4 && pw.length <= 12) {
        console.log("Ok Pw");
        return true;
    } else {
        console.log("No Pw");
        return false;
    }
}

function checkPw_re() {
    if (pw_re.length >= 4 && pw_re.length <= 12) {
        console.log("Ok Pw_re");
        return true;
    } else {
        console.log("No Pw_re");
        return false;
    }
}

function checkEqualPwAndPwRe() {
    if (pw === pw_re) {
        console.log("Ok 비번,비번확인 같음");
        return true;
    } else {
        console.log("No 비번,비번확인 다름");
        return false;
    }
}


function checkUserName(){
    if (_nlength >= 3 && _nlength <= 12) {
        console.log("Ok User_name");        
        return true;
    } else {
        console.log("User_name");_
        return false;
    }
}

function checkEmail() {
    if (email.length >= 4 && email.length <= 20) {
        console.log("Ok Email");
        return true;
    } else {
        console.log("No Email");
        return false;
    }
}

