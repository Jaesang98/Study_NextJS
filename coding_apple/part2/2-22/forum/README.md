## 💡 part2-22 loading.js, error.js, not-found.js

### loading.js

- 파일 자체에 loading.js파일을 만들어 두면 라우팅 될 때 알아서 이 파일을 보여준다
- Suspense랑 같음
- app 상위폴더에 둬도 됨

### error.js

- 파일 자체에 error.js파일을 만들어 두면 라우팅 될 때 알아서 이 파일을 보여준다
- use client임
- props로 error와 reset의 값을 전달해준다
- app 상위폴더에 둬도 됨

### not-found.js

- 파일 자체에 not-found.js파일을 만들어 두면 라우팅 될 때 알아서 이 파일을 보여준다
- import { notFound } from "next/navigation"; notFound();
- app 상위폴더에 둬도 됨
