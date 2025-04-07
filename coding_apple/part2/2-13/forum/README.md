## 💡 part2-13 static rendering, dynamic rendering, cache

### 배포

- npm run build 후 npm run start시 배포환경보여줌

### static rendering

- Next.js에서 페이지를 하나 만들면 기본적으로 static rendering 식으로 페이지를 보여줌
- 유저가 접속할 때 마다 npm run build시 생성한 html을 그대로 보내주는 것을 말함
  (페이지 안에 별 기능이 없어서 매번 html 페이지를 새로 만들 필요가 없으니까 그냥 그대로 보내는 것임)
- ㅇ로 표시되면 static rendering

### dynamic rendering

- 데이터 가져오는 문법 등 유저가 페이지 접속시 html에 변동사항이 들어가야할 때 적용용
- λ로 표시되면 dynamic rendering

### 렌더링 바꾸는법

- 서버가 부담될 수 있음

```javascript
export const dynamic = "force-dynamic";

export const dynamic = "force-static";
```

### cache

- 재사용

```javascript
fetch("/URL", { cache: "force-cache" });
fetch("/URL", { cache: "no-store" });

// 그 외
fetch("/URL", { next: { revalidate: 60 } });

export const revalidate = 60;
```
