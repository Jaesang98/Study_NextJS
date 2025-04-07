## 💡 part1-6 Next.js에서 이미지 넣는 법 2개

### 🔹 이미지 최적화

- lazy loading
- 사이즈 최적화
- layout shift 방지 : 이미지 때문에 레이아웃 밀려나는 현상

### import Image

- `import Image from "next/image";`
- src는 {임포트해온것}을 넣는다
- 그 외 다른데이터는 width height를 프롭스로 넣어줘야하며, next.config에 셋팅을 해주어야한다
