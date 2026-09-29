export const level7 = [
  {
    id: "7.1",
    title: "Максимум из трёх",
    description: "Даны 3 числа. Выведи наибольшее.",
    explanation: "Можно сравнить числа через if-elif-else или использовать встроенную функцию max().",
    example: "a, b, c = 3, 7, 5\nprint(max(a, b, c))\n→ 7",
    difficulty: "⭐",
    starter: "a, b, c = map(int, input().split())\n...",
    hints: ["Используй if/elif", "Или функцию max()"],
    tests: [{ input: "3 7 5", expected: "7" }]
  },
  {
    id: "7.2",
    title: "Сумма 1..N",
    description: "Найди сумму чисел от 1 до N через цикл.",
    explanation: "Создаём переменную-накопитель s = 0. В цикле for прибавляем к ней каждое число от 1 до N.",
    example: "n = 5\ns = 0\nfor i in range(1, n+1):\n    s += i\nprint(s)\n→ 15",
    difficulty: "⭐",
    starter: "n = int(input())\ns = 0\n...",
    hints: ["for i in range(1, n+1): s += i"],
    tests: [{ input: "10", expected: "55" }]
  },
  {
    id: "7.3",
    title: "Таблица умножения",
    description: "Выведи таблицу умножения на N (от 1 до 10) в формате 'N x i = результат'.",
    explanation: "Цикл от 1 до 10. Для красивого вывода удобно использовать f-строку: f'{n} x {i} = {n*i}'.",
    example: "n = 2\nfor i in range(1, 4):\n    print(f'{n} x {i} = {n*i}')\n→ 2 x 1 = 2\n   2 x 2 = 4\n   2 x 3 = 6",
    difficulty: "⭐⭐",
    starter: "n = int(input())\nfor i in range(1, 11):\n    ...",
    hints: ["Используй f-строку: f'{n} x {i} = {n*i}'"],
    tests: [{
      input: "2",
      expected: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20"
    }]
  },
  {
    id: "7.4",
    title: "Факториал",
    description: "Вычисли N! через цикл.",
    explanation: "Факториал N! = 1 × 2 × 3 × ... × N. Начинаем с 1 и последовательно умножаем.",
    example: "n = 5\nf = 1\nfor i in range(1, n+1):\n    f *= i\nprint(f)\n→ 120",
    difficulty: "⭐⭐",
    starter: "n = int(input())\nf = 1\n...",
    hints: ["for i in range(1, n+1): f *= i"],
    tests: [{ input: "5", expected: "120" }]
  },
  {
    id: "7.5",
    title: "Угадай число",
    description: "Программа загадала 42. Считывай числа, пока не угадаешь. Выведи 'Угадал!'.",
    explanation: "Цикл while True работает бесконечно, пока не встретит break. Как только ввели 42 — выходим из цикла.",
    example: "while True:\n    x = int(input())\n    if x == 42:\n        print('Угадал!')\n        break",
    difficulty: "⭐⭐",
    starter: "while True:\n    x = int(input())\n    ...",
    hints: ["Сравнивай x с 42 и делай break"],
    tests: [{ input: "10\n50\n42", expected: "Угадал!" }]
  },
  {
    id: "7.6",
    title: "Ёлочка",
    description: "Выведи пирамиду из звёздочек высотой N.",
    explanation: "На каждой строке i: сначала печатаем (n-i) пробелов, потом (2*i-1) звёздочек.",
    example: "n = 3\nfor i in range(1, n+1):\n    print(' '*(n-i) + '*'*(2*i-1))\n→   *\n   ***\n  *****",
    difficulty: "⭐⭐⭐",
    starter: "n = int(input())\nfor i in range(1, n+1):\n    ...",
    hints: ["Пробелов: n-i, звёздочек: 2*i-1"],
    tests: [{ input: "3", expected: "  *\n ***\n*****" }]
  },
  {
    id: "7.7",
    title: "Сумма чётных",
    description: "Найди сумму всех чётных чисел от 1 до N.",
    explanation: "В цикле проверяем каждое число: если оно чётное (i % 2 == 0), прибавляем к сумме.",
    example: "n = 10\ns = 0\nfor i in range(1, n+1):\n    if i % 2 == 0:\n        s += i\nprint(s)\n→ 30",
    difficulty: "⭐⭐",
    starter: "n = int(input())\ns = 0\n...",
    hints: ["if i % 2 == 0: s += i"],
    tests: [
      { input: "10", expected: "30" },
      { input: "5", expected: "6" }
    ]
  },
  {
    id: "7.8",
    title: "Количество цифр",
    description: "Считай число и выведи количество цифр в нём.",
    explanation: "Самый простой способ — превратить число в строку и взять её длину: len(str(n)).",
    example: "n = 12345\nprint(len(str(n)))\n→ 5",
    difficulty: "⭐⭐",
    starter: "n = int(input())\n...",
    hints: ["Можно через len(str(n)) или цикл с делением на 10"],
    tests: [
      { input: "12345", expected: "5" },
      { input: "7", expected: "1" }
    ]
  },
  {
    id: "7.9",
    title: "Степень двойки",
    description: "Выведи все степени двойки от 2^0 до 2^N (через пробел).",
    explanation: "2**i вычисляет 2 в степени i. Печатаем числа через пробел с помощью end=' '.",
    example: "n = 3\nfor i in range(n+1):\n    print(2**i, end=' ')\n→ 1 2 4 8",
    difficulty: "⭐⭐",
    starter: "n = int(input())\n...",
    hints: ["for i in range(n+1): print(2**i, end=' ')"],
    tests: [
      { input: "4", expected: "1 2 4 8 16" },
      { input: "3", expected: "1 2 4 8" }
    ]
  },
  {
    id: "7.10",
    title: "Обратный отсчёт",
    description: "Выведи числа от N до 1 в строку (через пробел).",
    explanation: "range(n, 0, -1) идёт от n вниз до 1 с шагом -1.",
    example: "n = 5\nfor i in range(n, 0, -1):\n    print(i, end=' ')\n→ 5 4 3 2 1",
    difficulty: "⭐",
    starter: "n = int(input())\n...",
    hints: ["for i in range(n, 0, -1)"],
    tests: [
      { input: "5", expected: "5 4 3 2 1" },
      { input: "3", expected: "3 2 1" }
    ]
  },
  {
    id: "7.11",
    title: "Произведение 1..N",
    description: "Найди произведение чисел от 1 до N.",
    explanation: "Похоже на факториал. Начинаем с p = 1 и умножаем все числа от 1 до N.",
    example: "n = 4\np = 1\nfor i in range(1, n+1):\n    p *= i\nprint(p)\n→ 24",
    difficulty: "⭐⭐",
    starter: "n = int(input())\np = 1\n...",
    hints: ["for i in range(1, n+1): p *= i"],
    tests: [
      { input: "4", expected: "24" },
      { input: "6", expected: "720" }
    ]
  },
  {
    id: "7.12",
    title: "Квадраты чисел",
    description: "Выведи квадраты чисел от 1 до N (каждый с новой строки).",
    explanation: "В цикле от 1 до N печатаем квадрат текущего числа.",
    example: "n = 4\nfor i in range(1, n+1):\n    print(i * i)\n→ 1\n  4\n  9\n  16",
    difficulty: "⭐",
    starter: "n = int(input())\n...",
    hints: ["for i in range(1, n+1): print(i*i)"],
    tests: [
      { input: "4", expected: "1\n4\n9\n16" }
    ]
  }
];
