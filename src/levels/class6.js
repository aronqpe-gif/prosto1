export const level6 = [
  {
    id: "6.1",
    title: "Знакомство с роботом",
    description: "Выведи на экран: Привет, я программист!",
    explanation: "Функция print() выводит текст на экран. Текст обязательно пишется в кавычках — одинарных ' ' или двойных \" \".",
    example: "print(\"Привет, мир!\")\n→ Привет, мир!",
    difficulty: "⭐",
    starter: 'print("...")',
    hints: ['Строка пишется в кавычках', 'print("текст")'],
    tests: [{ input: "", expected: "Привет, я программист!" }]
  },
  {
    id: "6.2",
    title: "Твоё имя",
    description: "Спроси имя и поздоровайся: Привет, <имя>!",
    explanation: "input() позволяет программе получить текст от пользователя. Результат input() — всегда строка. Строки можно соединять через +.",
    example: "name = input()        # пользователь ввёл: Аня\nprint(\"Привет, \" + name + \"!\")\n→ Привет, Аня!",
    difficulty: "⭐",
    starter: 'name = input()\nprint("Привет, " + ...)',
    hints: ["Используй input() для чтения", "Соединяй строки через +"],
    tests: [{ input: "Маша", expected: "Привет, Маша!" }]
  },
  {
    id: "6.3",
    title: "Калькулятор возраста",
    description: "Спроси год рождения, выведи возраст (2026 − год).",
    explanation: "input() возвращает строку. Чтобы из неё сделать число, используй int(). Потом можно вычитать.",
    example: "year = int(input())   # ввели 2010\nprint(2026 - year)\n→ 16",
    difficulty: "⭐",
    starter: "year = int(input())\n...",
    hints: ["Преобразуй ввод в число: int()", "2026 - year"],
    tests: [{ input: "2014", expected: "12" }]
  },
  {
    id: "6.4",
    title: "Площадь прямоугольника",
    description: "Даны стороны a и b. Найди площадь.",
    explanation: "Площадь прямоугольника = длина × ширина. Каждое число считывается отдельно через input().",
    example: "a = int(input())  # 3\nb = int(input())  # 4\nprint(a * b)\n→ 12",
    difficulty: "⭐",
    starter: "a = int(input())\nb = int(input())\n...",
    hints: ["Площадь = a * b"],
    tests: [{ input: "3\n4", expected: "12" }]
  },
  {
    id: "6.5",
    title: "Чётное или нечётное",
    description: "Определи чётность. Выведи 'чётное' или 'нечётное'.",
    explanation: "Оператор % возвращает остаток от деления. Если число делится на 2 без остатка (n % 2 == 0), оно чётное.",
    example: "n = 7\nif n % 2 == 0:\n    print(\"чётное\")\nelse:\n    print(\"нечётное\")\n→ нечётное",
    difficulty: "⭐",
    starter: 'n = int(input())\nif n % 2 == 0:\n    ...',
    hints: ["Оператор % даёт остаток от деления", "n % 2 == 0 — чётное"],
    tests: [
      { input: "4", expected: "чётное" },
      { input: "7", expected: "нечётное" }
    ]
  },
  {
    id: "6.6",
    title: "Сумма двух чисел",
    description: "Считай два числа и выведи их сумму.",
    explanation: "Считываем два числа с помощью int(input()) и складываем их обычным оператором +.",
    example: "a = int(input())  # 5\nb = int(input())  # 3\nprint(a + b)\n→ 8",
    difficulty: "⭐",
    starter: "a = int(input())\nb = int(input())\n...",
    hints: ["print(a + b)"],
    tests: [
      { input: "5\n3", expected: "8" },
      { input: "10\n20", expected: "30" }
    ]
  },
  {
    id: "6.7",
    title: "Периметр квадрата",
    description: "Дана сторона квадрата. Найди его периметр.",
    explanation: "У квадрата все стороны равны. Периметр = сторона × 4.",
    example: "a = int(input())  # 5\nprint(a * 4)\n→ 20",
    difficulty: "⭐",
    starter: "a = int(input())\n...",
    hints: ["Периметр = a * 4"],
    tests: [
      { input: "5", expected: "20" },
      { input: "7", expected: "28" }
    ]
  },
  {
    id: "6.8",
    title: "Больше или меньше",
    description: "Даны два числа. Выведи большее из них.",
    explanation: "Используй if-else, чтобы сравнить два числа и вывести то, которое больше.",
    example: "a = 5\nb = 3\nif a > b:\n    print(a)\nelse:\n    print(b)\n→ 5",
    difficulty: "⭐",
    starter: "a = int(input())\nb = int(input())\n...",
    hints: ["if a > b: print(a) else: print(b)"],
    tests: [
      { input: "5\n3", expected: "5" },
      { input: "2\n9", expected: "9" }
    ]
  },
  {
    id: "6.9",
    title: "Положительное или отрицательное",
    description: "Определи знак числа. Выведи 'положительное', 'отрицательное' или 'ноль'.",
    explanation: "Проверяем три случая с помощью if / elif / else: больше нуля, меньше нуля или равно нулю.",
    example: "n = -3\nif n > 0:\n    print(\"положительное\")\nelif n < 0:\n    print(\"отрицательное\")\nelse:\n    print(\"ноль\")\n→ отрицательное",
    difficulty: "⭐⭐",
    starter: "n = int(input())\n...",
    hints: ["Используй if / elif / else"],
    tests: [
      { input: "5", expected: "положительное" },
      { input: "-3", expected: "отрицательное" },
      { input: "0", expected: "ноль" }
    ]
  },
  {
    id: "6.10",
    title: "Повтори слово",
    description: "Считай слово и число N. Выведи слово N раз (каждый раз с новой строки).",
    explanation: "Цикл for позволяет повторить действие несколько раз. range(n) создаёт последовательность от 0 до n-1.",
    example: "word = \"привет\"\nn = 3\nfor i in range(n):\n    print(word)\n→ привет\n   привет\n   привет",
    difficulty: "⭐⭐",
    starter: "word = input()\nn = int(input())\n...",
    hints: ["Используй цикл for _ in range(n)"],
    tests: [
      { input: "привет\n3", expected: "привет\nпривет\nпривет" }
    ]
  },
  {
    id: "6.11",
    title: "Квадрат числа",
    description: "Считай число и выведи его квадрат.",
    explanation: "Квадрат числа — это число, умноженное само на себя. Можно написать n * n или n ** 2.",
    example: "n = 5\nprint(n * n)\n→ 25",
    difficulty: "⭐",
    starter: "n = int(input())\n...",
    hints: ["n * n или n ** 2"],
    tests: [
      { input: "5", expected: "25" },
      { input: "10", expected: "100" }
    ]
  },
  {
    id: "6.12",
    title: "Среднее арифметическое",
    description: "Даны три числа. Выведи их среднее арифметическое (целое).",
    explanation: "Среднее арифметическое = сумма чисел / количество. Для целого результата используй // (деление нацело).",
    example: "a, b, c = 3, 6, 9\nprint((a + b + c) // 3)\n→ 6",
    difficulty: "⭐⭐",
    starter: "a = int(input())\nb = int(input())\nc = int(input())\n...",
    hints: ["(a + b + c) // 3"],
    tests: [
      { input: "3\n6\n9", expected: "6" },
      { input: "10\n20\n30", expected: "20" }
    ]
  }
];
