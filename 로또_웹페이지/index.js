var temp;
var lucky;
var bonusNumber;
var end;
var inputNumber1;
var inputNumber2;
var inputNumber3;
var inputNumber4;
var inputNumber5;
var inputNumber6;
var btn;

var lottoSet = [1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45];
var lottoNumber = [0, 0, 0, 0, 0, 0, 0];
var lottoPlayerNumber = [1, 2, 3, 4, 5, 6];



function lottoNumberSet() {   //당첨번호 설정함수
    lottoNumber = [0, 0, 0, 0, 0, 0, 0]; //일단 리셋
    for (j = 0; j < 7; j++) { 
        temp = Math.floor(Math.random() * 45 + 1);
        for (i = 0; i < 7; i++) {
            if (temp == lottoNumber[i]) {  //중복시에 번호 재설정
                temp = Math.floor(Math.random() * 45 + 1);
                continue;
            }

        }
        lottoNumber[j] = temp; //번호 입력
    }
}



function lottoMatch() { //맞은 번호 개수 확인
    lucky = 0;
    for (i = 0; i < 6; i++) {   
        for (k = 0; k < 6; k++) {
            if (lottoPlayerNumber[k] == lottoNumber[i]) {
                lucky++;  //맞은 개수만큼 +
            }
        }

    }
}

function bonus() {      //보너스 번호 맞았나 확인
    bonusNumber = 0;   //번호 없으면 0
    for (i = 0; i < 7; i++) {
        if (lottoPlayerNumber[i] == lottoNumber[6]) {
            bonusNumber++ //보너스번호 있으면 1
        }
    }

}

function lottoResult() {  //당첨 결과 출력
    switch (lucky) {
        case 6:
            end = "1등입니다.";
            break;
        case 4:
            end = "4등입니다.";
            break;
        case 3:
            end = "5등입니다.";
            break;
        case 1:
            end = "꽝 입니다.";
            break;
        case 0:
            end = "꽝 입니다.";
            break;
    }
    if ((lucky == 5) && (bonusNumber < 1)){  //5개 맞고 보너스 틀린경우
        end = "3등 입니다.";
    }
    if ((lucky == 5) && (bonusNumber >= 1)){ //5개 맞고 보너스 맞은경우
        end = "2등 입니다.";
    }
}

function btnClick() {
    lottoPlayerNumber[0] = inputNumber1.value;
    lottoPlayerNumber[1] = inputNumber2.value;
    lottoPlayerNumber[2] = inputNumber3.value;
    lottoPlayerNumber[3] = inputNumber4.value;
    lottoPlayerNumber[4] = inputNumber5.value;
    lottoPlayerNumber[5] = inputNumber6.value;

    lottoNumberSet() //당첨번호 설정
    lottoMatch() //맞은 개수 확인
    bonus() //보너스 맞았나 확인
    lottoResult() //등수 확인

    mid_text.innerHTML = "로또 번호 : " //결과 출력
        + lottoNumber[0] + ", "  
        + lottoNumber[1] + ", "
        + lottoNumber[2] + ", "
        + lottoNumber[3] + ", "
        + lottoNumber[4] + ", "
        + lottoNumber[5]
        + "<br>보너스 : "
        + lottoNumber[6]
        + "<br><br>내 번호 : "
        + lottoPlayerNumber[0] + ", "
        + lottoPlayerNumber[1] + ", "
        + lottoPlayerNumber[2] + ", "
        + lottoPlayerNumber[3] + ", "
        + lottoPlayerNumber[4] + ", "
        + lottoPlayerNumber[5]
        + "<br><br>"
        + end;
}

window.onload = function () {
    inputNumber1 = document.getElementById("number1");
    inputNumber2 = document.getElementById("number2");
    inputNumber3 = document.getElementById("number3");
    inputNumber4 = document.getElementById("number4");
    inputNumber5 = document.getElementById("number5");
    inputNumber6 = document.getElementById("number6");
    btn = document.getElementById("btn");
    btn.onclick = btnClick;
}








