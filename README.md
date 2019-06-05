# 프로젝트 진행순서

1. express
2. babel 처리
    - @babel/core, @babel/node, @babel/preset-env 설치
    - package.json > scripts 추가 및 start 하위 키 생성, babel-node 명령어 실행 처리
3. nodemon 설치
    - add nodemon, 파일 저장시 서버를 재시작해주는 라이브러리
    - 여기서 --exec 명령어를 같이 붙여줘야되는데 왜 해줘야되지? 찾는중..