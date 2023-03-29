/* body의 이미지가 새로고침할 때마다 바뀜 */
// 이미지가 새로고침 할 때마다 바뀐다는 것은 body를 새로 부를 때마다 바뀐다는 것 
// 1) 이미지가 여러개 필요
// 2) 이미지는 랜덤으로 바뀜 : Math.random()함수 사용, 원하는 횟수 값을 곱해주고 랜덤값의 정수값을 위해 Math.floor()함수 사용


const body = document.querySelector("body");

// 랜덤한 문자열을 사용하기 위해 배열과 함께 사용
// 배열의 인덱스를 랜덤하게 접근
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg","9.jpg"];

// 랜덤한 숫자값 0~3까지 생성
const randomIndex = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randomIndex]})`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "norepeat";