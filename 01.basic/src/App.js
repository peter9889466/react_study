import './App.css';

// App 컴포넌트
// - React 애플리케이션 루트 컴포넌트
// - 화면 UI를 정의하는 컴포넌트 + 다른 컴포넌트 포함 가능
// - JSX 문법을 사용해서 THML+JS를 작성
// - CSS 스타일 정의

// JSX 문법
// - JS와 HTML을 결합한 문법
// - document 객체 x
// - 사용문법 : {변수}
function App() {
  let name = "김승혁";
  let isLogin = true;
  // CSS 스타일 정의 3가지 
  // 1. 요소 내부에 style 속성으로 적용 -> 값의 형태 : 객체
  // ex) <div style={{ color: "red" }}></div>
  // 2. style값을 변수에 선언
  // 3. css 파일 분리


  // 여러 조건을 사용해야 하는 경우
  let temp = prompt("오늘의 기온을 입력하세요");
  let result = "";
  if (temp > 25) {
    result = "너무 덥다";
  } else if (temp > 20) {
    result = "조금 덥다";
  } else if (temp > 14) {
    result = "선선하다";
  }

  // JSX 문법
  // - JS와 HTML을 결합한 문법
  // - document 객체 x
  // - 사용문법 : {변수}

  // 화면에 보여줄 html
  // 부모 요소는 반드시 하나

  return (
    <div className="AppCss">
      <div className="App">
        이름 : {name} <br />
        나이 : {25}
      </div><br />
      <div className="App">
        {/* 
          조건부 렌더링
            -조건이 하나일 때 사용하는 문법
            -EX) 클래스 OR 스타일 이름 추가/ 삭제, 상태값과 연계
        */}
        로그인 상태 : {isLogin && "로그인 된 상태"} <br />
        이름 : {name} <br />
        나이 : {25}<br />
        {/* 
          조건부 렌더링
            - 삼항연산자를 활용하는 방법 { 조건 ? true : false }
            {30 > 10 ? ("성인") : ("미성년자")}
        */}
        {30 > 10 ? ("성인") : ("미성년자")} <br />
      </div>
      <p>오늘의 날씨 : {temp}℃ {result}</p>
    </div>
  );
}

export default App;
