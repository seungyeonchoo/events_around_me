## 프로젝트 실행방법

```
git clone https://github.com/wanted-pre-onboarding-fe-6-10/pre-onboarding-assignment-week-4-1-team-10-TenKeyLess.git
cd pre-onboarding-assignment-week-4-1-team-10-TenKeyLess

- json server 시작(json server의 _expand 속성을 활용하기 위해 server 파일 일부 수정으로 해당 폴더에서 json server 구동 필요)
cd server
npm install
npm run gen
npm start

- react 프로젝트 시작
cd ..
yarn install
yarn start

- postman이나 기타 툴을 활용해서 http://localhost:4000/users/signup 으로 회원가입 진행 후 접속
```

<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [기능별 설명](#기능별-설명)
- [회고](#회고)

<br>

> ## 프로젝트 개요

- Next.js를 활용한 습관 만들기 및 다이어리 작성 서비스 구현을 통한 Next.js 학습
- json-server/json-server-auth를 활용해 사용자 로그인, 습관, 다이어리 CRUD 구현
- 웹/태블릿/모바일 환경에 따른 반응형 웹사이트 구현

<br>

> ## 기술 Stack

- Next
- React
- Typescript
- tailwindcss
- react-query
- redux-toolkit

<br>

> ## 폴더 구조

```

```

> ## 기능별 설명

  <details>
    <summary>1. 로그인</summary>

    1. 등록되어 있는 email과 password로 로그인 하도록 구현
    2. 미등록 회원의 경우 회원가입 버튼을 통해 회원가입 페이지로 이동
    3. 로그인 실패 - 화면에 에러코드와 에러메세지 출력
    4. 로그인 성공 - 반환되는 accessToken을 sessionStorage에 저장하여 로그인이 유지 및 메인 페이지로 이동

  </details>

  <details>
    <summary>2. 회원가입 </summary>

    1. 회원정보 (email, password, 성, 이름) 및 프로필이미지 입력을 통한 회원가입 구현
    2. 이미 등록된 회원의 경우 로그인 버튼을 통해 로그인 페이지로 이동
    3. 회원가입 실패 - 화면에 에러코드와 에러메세지 출력
    4. 회원가입 성공 - post 메서드를 활용해 /user 경로에 회원 정보 저장 후 로그인 페이지로 이동

  </details>
    <details>
    <summary>3. 메인페이지 </summary>

    1. 메인페이지에서는 현재 시간, 날씨 정보 및 해당 유저가 진행중인 습관 만들기 리스트를 get 메서드를 통해 받아와 출력하도록 구현
    2. 현재 시간 정보
        - useEffect 내부 setInterval 함수를 활용 1000ms 마다 시간 정보가 업데이트 될 수 이도록 구현
    3. 현재 날씨 정보
        - geolocation의 getCurrentPosition으로 현재 위치의 latitude 및 longitude를 state에 저장
        - 현재 위치 불러오기에 실패할 경우 지정된 latitude 및 longitude로 state 초기화
        - openweathermap api 활용, 현재 위치를 parameter로 전달하여 현재 위치 날시 데이터 화면에 출력
    4. 습관 만들기 리스트
        - 유저 데이터 fetch시 parameter(_embed)로 user의 habit 데이터도 fetch
        - map 메서드를 활용하여 리스트를 화면에 출력
        - default 값으로 전체 리스트 출력 -> 완료 / 아직 버튼을 통해 오늘 날짜 기준 완료여부로 리스트 필터링
        - show only ongoing 토글을 통해 현재 진행중인 습관만들기 리스트만 on/off
        - createHabit 버튼 클릭 -> 새로운 습관 만들기 화면 출력 (습관 이름 / 기간 / 설명)
    5. 습관
        - 습관 만들기 정보 출력 (남은 기간, 시작/종료일자, 습관 제목)
        - 더보기 버튼 클릭 -> 습관 상세 페이지로 이동

  </details>
    <details>
    <summary>4. 습관 페이지 </summary>

    1. /habit/[id] 경로로 해당 습관에 대한 상세 데이터 fetch
    2. 습관 기본 정보
        - 습관 기본 정보 (제목, 기간, 설명) 및 뒤로가기, 삭제 버튼
        - 삭제 버튼 클릭 -> delete 메서드 이용하여 DB에서 해당 습관 정보 삭제 후 메인 페이지로 이동
    3. 습관 진행 정보
        - 습관 진행 일차 및 남은 기간 표시하도록 구현
        - 오늘 기준 습관 달성률 및 전체 기간 기준 습관 달성률 구현
    4. 일별 달성 정보
        - 달성한 습관은 primary 색상으로 변경 / 미달성 습관은 secondary 색상
        - 오늘 달성 완료 버튼 클릭 -> 현재 날짜의 정보 색상 변경

  </details>

  <details>
    <summary>5. 다이어리 페이지 </summary>

    1. 캘린더
        - useGetCalendar 커스텀 훅을 활용해 현재 날짜 기준 캘린더 구현
        - 날짜 클릭 시 /diaries 경로로 로그인된 유저의 현재 날짜 다이어리 data fetch
        - 테두리를 활용 오늘 날짜 및 선택된 날짜 표시
    2. 다이어리 노트
        - 해당 날짜의 회원 다이어리 내용 출력 구현
        - 삭제 및 수정 버튼을 통해 데이터 삭제 및 수정 구현
        - 색상 버튼을 통해 다이어리 노트 색상 커스텀 기능 구현

  </details>

<br>

> ## 회고
