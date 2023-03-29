/* 투두리스트 만들기 */
// 추가) 추가 버튼을 누르면 할 일 값을 input을 통해 받아와서 ul의 li로 출력
// 완료) 체크박스에 체크를 하면 완료 표시
// 삭제) X 버튼을 누르면 해당 할 일 삭제


const todoForm = document.querySelector("#todo-form");

// 할 일의 총 개수와 완료한 할 일의 개수를 출력할 DOM
const countPrint = document.querySelector("#count");

// 계산하는 방법 사용 시 전역으로 관리할 전체 할일 개수와 체크한 개수
// 계산할 때 마다 값이 바뀌게 되므로 let 사용
let allCount = 0;
let checkedCount = 0;
const countPrint2 = document.querySelector("#count2");


todoForm.addEventListener("submit", addTodo);
// 할 일을 추가하는 함수
function addTodo(e) {
    // count-box의 hidden 클래스 제거
    const countBox = document.querySelector("#count-box");
    countBox.classList.remove("hidden");
    // 1) 추가
    // 할 일 입력창에 값을 입력하고 submit햇을 때 이벤트 발생 => form에 이벤트 걸어야 함
    // 실행할 함수 : 작성한 할 일을 ul네 li로 추가
    e.preventDefault();
    // input:text의 값을 가져오기
    const todoValue = todoForm.firstElementChild.value;
    // li 값을 담을 변수 생성
    const li = document.createElement("li");
    // li 태그에 추가할 내용 : 체크박스, 텍스트노드, 생성시간, 버튼
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createElement("span");
    text.innerHTML = todoValue
    text.classList.add("spanText");
    const time = document.createElement("span"); // 투두리스트 생성 시간을 출력하기 위한 span 태그 추가
    time.innerHTML = getClock(); //clock에서 선언했던 함수 (다른 JS에서 작성한 함수를 가져와 쓸 수 있다)
    time.classList.add("spanTime");
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    // li 태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(btn);
    // 그 값을 ul에 li를 생성하여 추가하기
    document.querySelector("#todolist").appendChild(li);
    // ul의 hidden 클래스 제거
    li.parentNode.classList.remove("hidden");
    // input:text의 값 초기화
    todoForm.firstElementChild.value = "";
    
    // 2) 완료 - check에 클릭 이벤트 추가
    check.addEventListener("click", todoCheck);
    // 할일이 완료되었다면 그 수를 세어 출력 - getCheckedCount()를 들고오는 방식
    
    // 3) 삭제 - btn에 클릭 이벤트 추가
    btn.addEventListener("click", todoDelete);

    // 함수 사용 - 할일의 상태 변경 시 그 수를 세어 출력 - getAllCount()와 getCheckedCount()를 들고오는 방식
    countPrint.innerHTML = `함수 사용 : ${getAllCount()}개 중 ${getCheckedCount()}개 완료`;

    // 계산식 사용 - 전역변수에 접근해서 AllCount 개수 증가
    allCount++;
    countPrint2.innerHTML = `계산식 사용 : ${allCount}개 중 ${checkedCount}개 완료`;
}

// 2) 완료 - todoCheck 함수 작성
function todoCheck(e) {
    // 이벤트 객체를 통해서 이벤트가 실행된 태그 찾아서 그 값을 사용
    const checkBox = e.target;
    const span = checkBox.nextElementSibling;
    if (checkBox.checked == true) {
        span.style.color = "rgb(141, 140, 146)";
        span.style.textDecoration = "line-through"
        // 계산식 사용 - 조건문에 계산식 삽입
        checkedCount++;
    } else {
        span.style.color = "";
        span.style.textDecoration = "";
        // 계산식 사용 - 조건문에 계산식 삽입
        checkedCount--;
    }
    // 함수 사용 - 할일의 상태 변경 시 그 수를 세어 출력 - getAllCount()와 getCheckedCount()를 들고오는 방식
    countPrint.innerHTML = `함수 사용 : ${getAllCount()}개 중 ${getCheckedCount()}개 완료`;
    // 계산식 사용 - if문과 함께 사용
    countPrint2.innerHTML = `계산식 사용 : ${allCount}개 중 ${checkedCount}개 완료`;
}

// 3) 삭제 - todoDelete 함수 작성
function todoDelete(e) {
    // 선택된 li가 삭제되는 함수 작성 remove()
    const btnBox = e.target;
    const li = btnBox.parentNode;
    const ul = li.parentNode;
    // 계산식 사용 - 체크 되어있다면 checkedCount--
    if (li.firstElementChild.checked == true){
        checkedCount--;
    }
    li.remove();
    if (ul.childElementCount == 1) {
        ul.classList.add("hidden");
    }
    // 함수 사용 - 할일의 상태 변경 시 그 수를 세어 출력 - getAllCount()와 getCheckedCount()를 들고오는 방식
    countPrint.innerHTML = `함수 사용 : ${getAllCount()}개 중 ${getCheckedCount()}개 완료`;
    // 계산식 사용 - 전체 할 일의 감소를 위해 allCount의 값을 1씩 감소
    allCount--;
    countPrint2.innerHTML = `계산식 사용 : ${allCount}개 중 ${checkedCount}개 완료`;
}

// 4) 추가, 삭제, 완료할 때마다 개수 확인 - 함수 이용
// 전체 개수 확인
function getAllCount() {
    const todolist = document.querySelector("#todolist");
    // li 샘플 하나를 display:none으로 설정해놔서 -1 해줘야함
    // 1. return을 통해 값을 전달하는 방식
    // 2. DOM을 가져와서 출력
    // 둘 중에 편한 것으로 사용하면 됨
    return todolist.childElementCount-1;
}
// 할일을 완료 했다면 체크된 DOM의 수 가져오기
function getCheckedCount() {
    const checkedbox = document.querySelectorAll("#todolist li input[type='checkbox']:checked");
    return checkedbox.length;
}
// 계산하는 방법 사용
// 변수 : 전체 개수 (allCount), 체크한 개수 (CheckedCount)
// 추가할 때, 삭제할 때 => 전체 개수
// 체크할 때, 삭제할 때 => 체크 개수
// 체크 개수 조건 : 해제(-1), 체크(+1)
// 체크 개수 삭제 조건 : 체크 안 된 것은 (0), 체크 된 것은(-1)