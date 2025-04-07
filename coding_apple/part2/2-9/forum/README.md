## 💡 part2-9 수정기능 만들기 2

### 🔹업데이트

```javascript
await db
  .collection("post")
  .updateOne({ _id: new ObjectId(요청.body.id) }, { $set: 바꿀꺼 });
```

### 🔹redirect

- `return` 없이 `응답.status(302).redirect("/list");`
