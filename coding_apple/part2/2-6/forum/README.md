## 💡 part2-6 글 작성기능 만들기 1 (서버기능 개발은)

### 🔹 서버개발발

- pages/api/test.js 구조로 개발

```javascript
// test.js
export default function handler(요청, 응답) {
  if (요청.method == "POST") {
    return 응답.status(200).json("처리완료");
  }
}
```
