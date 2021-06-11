let target = document.querySelector("#dynamic");

//random 으로 5가지 문자열 중 하나를 반환.
function randomString(){
    let stringArr =["Learn to HTML", "Learn to CSS", 
    "learn to Javascript", "Learn to Python", "learn to Ruby"];
    //randing 효과
    let selectString= stringArr[Math.floor(Math.random()*stringArr.length)];
    //split("") 해당 문자열을 "" 기준으로 ,즉 단어 하나하나가 쪼개져서 배열로 변경된다.
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

//타이핑 리셋 
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

//typing 효과를 내기 위한 재귀함수.
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent+= randomArr.shift();//앞에 있는 것부터 빼낸다. 
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping,3000);
    }
}
//맨 처음 호출 .
dynamic(randomString());
//커서 깜박임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);

