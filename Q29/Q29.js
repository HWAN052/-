								

// 가위, 바위, 보 게임	플레이어	각각	prompt 로 가위, 바위, 보 입력		하는 방식으로 해서 구현		조건문..		자기 깃허브에 코드 올리시고 시트 o 에 링크하세요		
// v0.1.0	컴퓨터		랜덤		참고	가위바위보	영어로	Rock Paper Scissors			
var a = prompt("가위, 바위, 보 중 하나를 입력하세요");

var r = "바위";
var s = "가위";
var p = "보";

var cn = Math.floor(Math.random() * 3) + 1;
var c ;
if(cn == 1){
    c = r;
}
if(cn == 2){
    c = s;
}
if(cn == 3){
    c = p;
}

document.write("유저:"+a);
document.write("<br>");
document.write("컴:"+c);
document.write("<br>");

var winDrawLose ="";

switch(a){
    case r:
        switch(c){
            case s :
                winDrawLose="이겼다";
                break;
            case p :
                winDrawLose="졌다";
                break;
            case r :
                winDrawLose="비겼다";
                break;
            
        }
        break;
    case s:
        switch(c){
            case p :
                winDrawLose="이겼다";
                break;
            case r :
                winDrawLose="졌다";
                break;
            case s :
                winDrawLose="비겼다";
                break;
            
        }
        break;
    case p:
        switch(c){
            case r :
                winDrawLose="이겼다";
                break;
            case s :
                winDrawLose="졌다";
                break;
            case p :
                winDrawLose="비겼다";
                break;
            
        }
        break;
}

document.write(winDrawLose)