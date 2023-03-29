/* 현재 시간을 1초마다 다시 화면에 출력 */
// 현재 시간 : 시간을 가져오는 Date() 객체 사용
// 현재 시간을 들고와도 자동으로 값이 바뀌진 않음
// => 그 값을 새로 들고 오면 바뀜
// => 1초마다 new Date() 값을 새로 할당
// => 타이머 함수인 interval 사용


// 1) 시간을 출력할 태그 가져오기
const clock = document.querySelector("#clock");

// 2) 시간을 Date()를 통해 값 수정 => 타이머 함수에 콜백함수로 사용하기 위해 함수로 작성
function getClock() {
    let date = new Date(); // 현재 시간을 가져옴
    // .padStart(자릿수, "채울 문자") : 문자열로만 값을 받아오기 때문에 String()과 함께 사용
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    // clock에 현재 시간을 출력
    // clock.innerHTML = `${hour}:${minute}:${second}`;
    // return을 통해 시간을 문자열로 돌려줄 수 있다
    // retirn값을 이용해서 clock.innerHTML = getClock();
    return `${hour}:${minute}:${second}`;
}

// 3) 타이머 함수를 통해서 1초마다 시간을 받아오게 작성
setInterval(function(){
    clock.innerHTML = getClock()
}, 1000);
// 타이머는 1초 뒤에 실행하기에, 화면에 바로 출력하기 위해 함수 호출
clock.innerHTML = getClock();


const day = document.querySelector("#day");
function getDay() {
    let date = new Date;
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednseday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
    return `${dayArray[day]}`;
}
day.innerHTML = getDay();



const date = document.querySelector("#date");
function getDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth()+1).padStart(2, "0");
    let yyyy = String(date.getFullYear()).padStart(4, "0");
    return `${yyyy}.${mm}.${dd}`;
}
date.innerHTML = getDate();