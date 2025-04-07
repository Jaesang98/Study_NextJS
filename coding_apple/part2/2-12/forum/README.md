## 💡 part2-12 삭제기능 만들기 3 (query string / URL parameter)

### query string

- 데이터많으면 더러움
- URL에 데이터 노출됨

```javascript
fetch("/api/test?name=kim&age=20");
```

### parameter

- 데이터많으면 더러움
- URL에 데이터 노출됨

```javascript
fetch("/api/test/ㅇㅁㄴㅇㅁ");

// api test
export default function handler(요청, 응답) {
  console.log(요청.qurery); // ㅇㅁㄴㅇㅁ
}

//directory
pages / api / test / [작명.js];
```
