# 프로젝트 문서
* [구글문서 링크](https://docs.google.com/document/d/1rY_ywXSd1Abno15JVa72QmcR4r9YwqU5h9jAoR6UHCU/edit?usp=sharing)

### git commit 기록 체계화
* master commit 형식
    * **master** : [version] - 내용 입력
        * ex) v 1.0.0 - 정식 버전 판올림
* branch commit 형식
    * **[version]-branch-name** : 내용 입력
        * ex) [v 0.9.4]branch-user_board : 신규 회원가입 화면 추가
* new branch 추가 규칙
    * **[version]-branch name** : 내용 입력

### version 규칙 - [링크](http://seorenn.blogspot.com/2012/02/version.html)
- v 1.2.3 일 때,
    - 1 : Release update
    - 2 : Major update
    - 3 : Miner update

# 프로젝트 진행과정 기록

1. express
2. babel 처리
    - @babel/core, @babel/node, @babel/preset-env 설치
    - package.json > scripts 추가 및 start 하위 키 생성, babel-node 명령어 실행 처리
3. nodemon 설치
    - add nodemon, 파일 저장시 서버를 재시작해주는 라이브러리
    - 여기서 --exec 명령어를 같이 붙여줘야되는데 왜 해줘야되지? 찾는중..
4. mvc 구조 잡기
    - 전체 구조 설명
        - app.js로 부터 시작
        - router -> controller -> model -> view -> controller -> model -> controller -> view
    - router 설정
        - express.router 함수 이용 ([링크](https://expressjs.com/en/guide/routing.html))
    - view 구조 설정
    - controller 설정