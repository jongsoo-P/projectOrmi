# 제주 이디저디
- 제주 이디저디(제주 방언/제주 여기저기)
- 제주도 여행 일정을 생성할 수 있는 서비스입니다.
- 오전, 점심메뉴, 오후, 저녁메뉴로 하루가 생성됩니다.
- 생성한 일정 중 마음에 들지 않는 항목만 재생성 가능합니다.
- chatGPT 특성상 생성된 일정은 정확한 정보가 아닐 수 있습니다.

[제주 이디저디 바로가기](https://jongsoo-p.github.io/projectOrmi/)


## 1. 목표와 기능

### 1.1 목표
- 제주 여행 계획을 세울 때, 참고할 일정을 생성하는 서비스를 제공합니다.

### 1.2 기능
- 최대 14일까지 제주 여행 일정 생성
- 특이사항을 입력 받아 일정에 반영 
- 마음에 들지 않는 일정 선택 후 재생성

## 2. 개발 환경 및 개발 기간
- 개발 환경 : HTML, CSS, JavaScript
- 개발 기간 : 2023년 5월 30일 ~ 2023년 6월 13일

## 3. 프로젝트 구조

```bash
├── index.html
├── README.md
│
├── css
│   └── main.css
├── images
│   ├── loading-ring.gif
│   ├── main-pic-1.jpg
│   └── readme
│       ├── readme-days.png
│       ├── readme-etc.png
│       ├── readme-home.png
│       ├── readme-result.png
│       ├── readme-td-select.png
│       └── readme-td-select2.png
└── js
    ├── btnEvent.js
    ├── createResultCard.js
    ├── data.js
    ├── fetch.js
    ├── loading.js
    └── selectDays.js
```

## 4. UI / 사용 에제

- 메인
- 여행 기간 선택, 특이사항 입력, 생성 버튼
<img src="/images/readme/readme-home.png" width="50%">

- 여행 기간 선택 & 특이사항 입력
<img src="/images/readme/readme-days.png" width="40%">
<img src="/images/readme/readme-etc.png" width="40%">

- 생성버튼 클릭 후 결과 화면
<img src="/images/readme/readme-result.png" width="50%">

- 테이블에서 일정 선택 후 재생성
<img src="/images/readme/readme-td-select.png" width="40%">
<img src="/images/readme/readme-td-select2.png" width="40%">


## 5. 추가 개선 사항
### HTML
- 시멘틱 태그 사용

### CSS & 디자인
- 사용자의 흥미를 유발할 수 있는 디자인으로 개선
- 모바일 화면 구성

### JS / 기능 구현
- chatGPT 답변 제어 개선(원하지 않는 답변 생성, 알맞지 않는 답변 생성)