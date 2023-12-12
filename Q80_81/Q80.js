// 입력한 값들을 팝업에 출력		라디오 버튼의 경우	html input 의 name 속성에 같은 값을 주면 같은 그룹으로 묶이게 됨				ex.	<input type="radio" name="sex" value="M">남성			
// 			( input 태그 배열임 )					<input type="radio" name="sex" value="G" checked>여성			
// 							같은 그룹으로 묶여야 라디오버튼이 얘들 내에서 왔다갔다 한다.				
											
// 		js 에서 연결 시	getElementById	가 아닌	getElementsByName		로 배열 형태로 가져와야함				
// 			ex.	ipSexes=document.getElementsByName("sex");  // 주의							
// 		이후 배열에서 반복을 써서 순회하면서 체크 여부를 확인하고 처리									
// 			ex	for(var i=0;i<ipSexes.length;i++){							
// 					// ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻						
// 					if(ipSexes[i].checked == true){						
// 					sex = ipSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장						
// 					}						
// 				}										


var str_id = "";
var str_pw = "";

var input_id;
var input_pw;
var login_box;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    login_box = document.getElementById("login_box");

    str_id = input_id.value;
    str_pw = input_pw.value;

}


function login(){
    
    var local_id = input_id.value; 
    var local_pw = input_pw.value;
    
    if(local_id == "farm" && local_pw == "20231212"){
        login_box.innerHTML = local_id+"회원님 반갑습니다."
    }  else {
        alert("로그인 실패")
    }
}
