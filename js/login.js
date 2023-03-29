/* form의 submit을 눌렀을 대 input의 값이 h1 태그에 할당 */
// id를 통해서 직접 접근
// form의 submit을 눌렀을 때 이벤트 발생 => form에 이벤트를 걸어야 함
// 실행할 함수 : input의 값이 h1태그에 할당 

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onLogin);

// 로그인 함수
function onLogin(e) {
    // submit 이벤트는 새로고침이 기본으로 들어가 있기 때문에 이 기본 설정을 막아야 함 
    e.preventDefault();

    // 값을 들고올 input 태그 가져옴
    const loginId = document.querySelector("#login-id");
    // 값을 넣어줄 h1 태그 가져옴
    const greeting = document.querySelector("#greeting");
    greeting.innerHTML = `${loginId.value}님, 환영합니다!`;
    // 화면에 글자를 보여주기 위해 class 제거
    greeting.classList.remove("hidden");
    // 로그인 창을 보이지 않게 하기 위해 class 추가
    loginForm.classList.add("hidden");
    // 로그인하면 투두리스트 입력창 보이게 class 제거
    const todoForm = document.querySelector("#todo-form");
    todoForm.classList.remove("hidden");
}