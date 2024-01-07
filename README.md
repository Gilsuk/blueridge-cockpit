# Cockpit

Cockpit of Blueridge

## Usage

```bash
npm install
npm run dev
```

## TODO

* 버튼을 누르면 알림 권한을 요청
* 권한 비허용시 비허용 됐다는 알림 출력
* 권한 허용된 경우 메세지 토큰 발급하여 서버 전송
* 메세지 수신시 리스트에 알림 등록
* 메세지 수신시 알림 저장

## troubleshooting

vite 개발서버는 symlinks를 제대로 인식하지 못합니다. 서버구동시 pwd에 symlink가 포함되었는지 확인하세요

```bash
## run the dev server
npm run dev

## access the main page using browser...

## output
오후 10:07:39 [vite] Pre-transform error: Failed to load url /src/main.js (resolved id: E:/src/blueridge/blueridge-cockpit/src/main.js). Does the file exist? (x3)
```
