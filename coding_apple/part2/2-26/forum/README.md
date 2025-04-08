## 💡 part2-26 Dark mode 기능 1 (cookies / localStorage)

### localStorage

- 로컬저장
- 클라에서만 실행가능

```javascript
localStorage.setItem("자료이름", "값");
localStorage.getItem("자료이름");
localStorage.removeItem("자료이름");
```

### cookie

- cookie컬저장

```javascript
document.cookie = "쿠키이름=값";
document.cookie = "쿠키이름=값; max-age=3600";

import { cookies } from "next/headers";

export default function 서버컴포넌트() {
  let result = cookies().get("쿠키이름");
  console.log(result);
}
```
