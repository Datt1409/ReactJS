import { React, useEffect } from "react";

// 1. useEffect(callback)
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])

// ------------
// 1. Call luôn được gọi sau khi component mounted

export default function Content() {
  return <h1>Hi anh em F8</h1>;
}
