export const level8 = [
  {
    id: "8.1",
    title: "Функция суммы",
    description: "Напиши функцию sum_range(a, b), возвращающую сумму чисел от a до b включительно.",
    explanation: "Функция объявляется через def. range(a, b+1) создаёт числа от a до b. sum() складывает их.",
    example: "def sum_range(a, b):\n    return sum(range(a, b+1))\nprint(sum_range(2, 5))\n→ 14",
    difficulty: "⭐",
    starter: "def sum_range(a, b):\n    ...\nprint(sum_range(2, 5))",
    hints: ["Используй sum(range(a, b+1))"],
    tests: [{ input: "", expected: "14" }]
  },
  {
    id: "8.2",
    title: "Переворот строки",
    description: "Считай строку и выведи её задом наперёд.",
    explanation: "Срез [::-1] разворачивает строку или список. Это самый короткий способ.",
    example: "s = \"python\"\nprint(s[::-1])\n→ nohtyp",
    difficulty: "⭐",
    starter: "s = input()\nprint(s[...])",
    hints: ["Срез s[::-1] переворачивает строку"],
    tests: [
      { input: "python", expected: "nohtyp" },
      { input: "abc", expected: "cba" }
    ]
  },
  {
    id: "8.3",
    title: "Палиндром",
    description: "Проверь, является ли строка палиндромом. Выведи 'да' или 'нет'.",
    explanation: "Палиндром читается одинаково слева направо и справа налево. Сравниваем строку с её перевёрнутой версией.",
    example: "s = \"шалаш\"\nif s == s[::-1]:\n    print(\"да\")\nelse:\n    print(\"нет\")\n→ да",
    difficulty: "⭐⭐",
    starter: "s = input().lower()\n...",
    hints: ["Сравни s и s[::-1]"],
    tests: [
      { input: "шалаш", expected: "да" },
      { input: "привет", expected: "нет" }
    ]
  },
  {
    id: "8.4",
    title: "Список чисел",
    description: "Считай числа в список, выведи их сумму и максимум через пробел.",
    explanation: "map(int, ...) превращает строки в числа. list() собирает их в список. sum() и max() — встроенные функции.",
    example: "nums = [3, 7, 2, 9]\nprint(sum(nums), max(nums))\n→ 21 9",
    difficulty: "⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["sum(nums) и max(nums)"],
    tests: [{ input: "3 7 2 9", expected: "21 9" }]
  },
  {
    id: "8.5",
    title: "Поиск минимума",
    description: "Напиши функцию, возвращающую минимум списка БЕЗ встроенной min().",
    explanation: "Запоминаем первый элемент как минимум. Проходим по списку и обновляем, если нашли меньшее.",
    example: "def my_min(arr):\n    m = arr[0]\n    for x in arr:\n        if x < m: m = x\n    return m\nprint(my_min([3, 1, 4, 1, 5]))\n→ 1",
    difficulty: "⭐⭐",
    starter: "def my_min(arr):\n    ...\nprint(my_min([3, 1, 4, 1, 5]))",
    hints: ["Пройди по списку и запоминай наименьший"],
    tests: [{ input: "", expected: "1" }]
  },
  {
    id: "8.6",
    title: "Подсчёт гласных",
    description: "Считай строку, посчитай количество гласных (аеёиоуыэюя).",
    explanation: "Создаём строку с гласными. Для каждой буквы проверяем, есть ли она в этой строке.",
    example: "s = \"программирование\"\nvowels = \"аеёиоуыэюя\"\ncount = 0\nfor c in s:\n    if c in vowels: count += 1\nprint(count)\n→ 7",
    difficulty: "⭐⭐",
    starter: 's = input().lower()\nvowels = "аеёиоуыэюя"\n...',
    hints: ["Пройди по символам и проверь, есть ли символ в vowels"],
    tests: [{ input: "программирование", expected: "7" }]
  },
  {
    id: "8.7",
    title: "Удаление пробелов",
    description: "Считай строку и выведи её без пробелов.",
    explanation: "Метод replace(' ', '') заменяет все пробелы на пустую строку.",
    example: "s = \"привет мир\"\nprint(s.replace(' ', ''))\n→ приветмир",
    difficulty: "⭐",
    starter: "s = input()\n...",
    hints: ["s.replace(' ', '')"],
    tests: [
      { input: "привет мир", expected: "приветмир" },
      { input: "a b c", expected: "abc" }
    ]
  },
  {
    id: "8.8",
    title: "Второе максимальное",
    description: "Найди второе по величине число в списке.",
    explanation: "Можно отсортировать список по убыванию и взять второй элемент, либо найти max, удалить его и снова найти max.",
    example: "nums = [5, 1, 9, 3, 9, 2]\nprint(sorted(set(nums))[-2])\n→ 5",
    difficulty: "⭐⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["Отсортируй список и возьми предпоследний элемент"],
    tests: [
      { input: "5 3 9 1 9 2", expected: "5" },
      { input: "10 20 30", expected: "20" }
    ]
  },
  {
    id: "8.9",
    title: "Количество слов",
    description: "Считай строку и выведи количество слов в ней.",
    explanation: "split() разбивает строку по пробелам на список слов. len() считает их количество.",
    example: "s = \"привет как дела\"\nprint(len(s.split()))\n→ 3",
    difficulty: "⭐",
    starter: "s = input()\n...",
    hints: ["len(s.split())"],
    tests: [
      { input: "привет как дела", expected: "3" },
      { input: "один", expected: "1" }
    ]
  },
  {
    id: "8.10",
    title: "Замена буквы",
    description: "Считай строку. Замени все буквы 'а' на 'о' и выведи результат.",
    explanation: "Метод replace(старое, новое) заменяет все вхождения подстроки.",
    example: "s = \"мама\"\nprint(s.replace('а', 'о'))\n→ момо",
    difficulty: "⭐",
    starter: "s = input()\n...",
    hints: ["s.replace('а', 'о')"],
    tests: [
      { input: "мама", expected: "момо" },
      { input: "программа", expected: "прогроммо" }
    ]
  },
  {
    id: "8.11",
    title: "Список квадратов",
    description: "Считай N. Создай список квадратов чисел от 1 до N и выведи его.",
    explanation: "Генератор списков: [выражение for переменная in последовательность].",
    example: "n = 5\nprint([i*i for i in range(1, n+1)])\n→ [1, 4, 9, 16, 25]",
    difficulty: "⭐⭐",
    starter: "n = int(input())\n...",
    hints: ["[i*i for i in range(1, n+1)]"],
    tests: [
      { input: "5", expected: "[1, 4, 9, 16, 25]" },
      { input: "3", expected: "[1, 4, 9]" }
    ]
  },
  {
    id: "8.12",
    title: "Фильтр чётных",
    description: "Считай список чисел. Выведи только чётные через пробел.",
    explanation: "Проходим по списку и печатаем только те числа, которые делятся на 2 без остатка.",
    example: "nums = [1, 2, 3, 4, 5, 6]\nprint(*[x for x in nums if x % 2 == 0])\n→ 2 4 6",
    difficulty: "⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["if x % 2 == 0"],
    tests: [
      { input: "1 2 3 4 5 6", expected: "2 4 6" },
      { input: "7 8 9", expected: "8" }
    ]
  }
];
