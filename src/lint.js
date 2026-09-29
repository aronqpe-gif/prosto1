export function lintCode(code) {
  const w = [];
  if (/\bwhile\s+True\b/.test(code) && !/break/.test(code)) {
    w.push("⚠️ while True без break — программа может зависнуть");
  }
  if (
    /input\(\)/.test(code) &&
    !/int\(input\(\)\)|float\(input\(\)\)|input\(\)\.split/.test(code)
  ) {
    w.push("💡 input() возвращает строку. Для числа оберни в int()");
  }
  if (/print\([^)]*\+[^)]*\)/.test(code) && /input\(\)/.test(code)) {
    w.push("💡 Не соединяй строку и число через +, используй f-строку");
  }
  if (/for\s+i\s+in\s+range\(len\(/.test(code)) {
    w.push("💡 В Python можно: for x in arr — без индексов");
  }
  return w;
}
