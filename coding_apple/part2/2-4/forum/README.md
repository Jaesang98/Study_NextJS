## 💡 part2-4 상세페이지 만들기 1 (Dynamic route)

### 🔹 상세폴더

- [작명]을 통해 url뒤에오는 값을 정할 수 있다

```javascript
// Next.js 15버전
export default async function Detail({ params }) {
  const { id } = await params;
  return()
}


// 14이하
export default async function Page({ params }) {
  const id = params.id;
  return <p>{id}</p>;
}
```
