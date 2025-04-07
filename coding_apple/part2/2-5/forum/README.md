## 💡 part2-5 상세페이지 만들기 2 (useRouter)

### 🔹 client router

- router.prefetch : 미리 로드
- usePathname : url
- useSearchParams : query

```javascript
"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    ></button>
  );
}
```
