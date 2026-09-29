export const level9 = [
  {
    id: "9.1",
    title: "Пузырьковая сортировка",
    description: "Реализуй сортировку пузырьком. Выведи отсортированный список.",
    explanation: "Сравниваем соседние элементы и меняем их местами, если они стоят в неправильном порядке. Повторяем, пока массив не отсортируется.",
    example: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr",
    difficulty: "⭐⭐",
    starter: "def bubble_sort(arr):\n    ...\nprint(bubble_sort([5,1,4,2,8]))",
    hints: ["Двойной цикл: внешний по i, внутренний по j < len-i-1"],
    tests: [{ input: "", expected: "[1, 2, 4, 5, 8]" }]
  },
  {
    id: "9.2",
    title: "Бинарный поиск",
    description: "Реализуй бинарный поиск. Выведи индекс или -1.",
    explanation: "Работает только на отсортированном массиве. Каждый шаг отбрасываем половину элементов, сравнивая с серединой.",
    example: "def binary_search(arr, target):\n    lo, hi = 0, len(arr)-1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1",
    difficulty: "⭐⭐",
    starter: "def binary_search(arr, target):\n    ...\nprint(binary_search([1, 3, 5, 7, 9], 7))",
    hints: ["Дели массив пополам через mid = (lo + hi) // 2"],
    tests: [{ input: "", expected: "3" }]
  },
  {
    id: "9.3",
    title: "Частотный словарь",
    description: "Считай строку, выведи самое частое слово.",
    explanation: "Словарь хранит пары «слово → количество». Метод get(ключ, 0) возвращает 0, если ключа ещё нет.",
    example: "words = ['кот', 'пёс', 'кот']\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(max(counts, key=counts.get))\n→ кот",
    difficulty: "⭐⭐",
    starter: "words = input().split()\ncounts = {}\n...",
    hints: ["counts[w] = counts.get(w, 0) + 1"],
    tests: [{ input: "кот пёс кот кот пёс", expected: "кот" }]
  },
  {
    id: "9.4",
    title: "Числа Фибоначчи",
    description: "Выведи первые N чисел Фибоначчи через пробел.",
    explanation: "Каждое следующее число — сумма двух предыдущих. Начинаем с 0 и 1.",
    example: "n = 7\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a+b\n→ 0 1 1 2 3 5 8",
    difficulty: "⭐⭐",
    starter: "n = int(input())\na, b = 0, 1\n...",
    hints: ["На каждой итерации: a, b = b, a+b"],
    tests: [{ input: "7", expected: "0 1 1 2 3 5 8" }]
  },
  {
    id: "9.5",
    title: "Простые числа",
    description: "Выведи все простые числа до N включительно.",
    explanation: "Число простое, если делится только на 1 и на себя. Проверяем делители от 2 до квадратного корня числа.",
    example: "def is_prime(x):\n    if x < 2: return False\n    for i in range(2, int(x**0.5)+1):\n        if x % i == 0: return False\n    return True",
    difficulty: "⭐⭐",
    starter: "n = int(input())\n...",
    hints: ["Проверяй делители от 2 до sqrt(n)"],
    tests: [{ input: "10", expected: "2 3 5 7" }]
  },
  {
    id: "9.6",
    title: "Решето Эратосфена",
    description: "Найди все простые до N через решето.",
    explanation: "Создаём массив «возможно простых». Начиная с 2, вычёркиваем все кратные текущего числа.",
    example: "n = 10\nsieve = [True]*(n+1)\nsieve[0] = sieve[1] = False\nfor i in range(2, int(n**0.5)+1):\n    if sieve[i]:\n        for j in range(i*i, n+1, i):\n            sieve[j] = False",
    difficulty: "⭐⭐⭐",
    starter: "n = int(input())\nsieve = [True] * (n+1)\n...",
    hints: ["Зачеркни кратные, начиная с i*i"],
    tests: [{ input: "30", expected: "2 3 5 7 11 13 17 19 23 29" }]
  },
  {
    id: "9.7",
    title: "Уникальные элементы",
    description: "Считай список чисел. Выведи только уникальные (без повторов) в том же порядке.",
    explanation: "Используем множество seen, чтобы запоминать уже встреченные элементы. Добавляем в результат только новые.",
    example: "nums = [1, 2, 2, 3, 1, 4]\nseen, result = set(), []\nfor x in nums:\n    if x not in seen:\n        seen.add(x)\n        result.append(x)\nprint(*result)\n→ 1 2 3 4",
    difficulty: "⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["Используй множество seen для отслеживания"],
    tests: [{ input: "1 2 2 3 1 4", expected: "1 2 3 4" }]
  },
  {
    id: "9.8",
    title: "Слияние списков",
    description: "Даны два отсортированных списка. Слей их в один отсортированный.",
    explanation: "Можно просто объединить списки и отсортировать: sorted(a + b). Или использовать два указателя для эффективности.",
    example: "a = [1, 3, 5]\nb = [2, 4, 6]\nprint(*sorted(a + b))\n→ 1 2 3 4 5 6",
    difficulty: "⭐⭐⭐",
    starter: "a = list(map(int, input().split()))\nb = list(map(int, input().split()))\n...",
    hints: ["Можно использовать два указателя или sorted(a+b)"],
    tests: [{ input: "1 3 5\n2 4 6", expected: "1 2 3 4 5 6" }]
  },
  {
    id: "9.9",
    title: "Максимальная сумма пары",
    description: "Найди максимальную сумму двух различных элементов списка.",
    explanation: "Находим два самых больших числа в списке и складываем их.",
    example: "nums = [5, 1, 9, 3, 7]\nsorted_nums = sorted(nums)\nprint(sorted_nums[-1] + sorted_nums[-2])\n→ 16",
    difficulty: "⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["Найди два максимальных числа"],
    tests: [
      { input: "5 1 9 3 7", expected: "16" },
      { input: "10 20 30", expected: "50" }
    ]
  },
  {
    id: "9.10",
    title: "Анаграмма",
    description: "Проверь, являются ли две строки анаграммами. Выведи 'да' или 'нет'.",
    explanation: "Анаграммы содержат одинаковые буквы в разном порядке. Сортируем обе строки и сравниваем.",
    example: "s1, s2 = \"listen\", \"silent\"\nif sorted(s1) == sorted(s2):\n    print(\"да\")\nelse:\n    print(\"нет\")\n→ да",
    difficulty: "⭐⭐",
    starter: "s1 = input()\ns2 = input()\n...",
    hints: ["Отсортируй обе строки и сравни"],
    tests: [
      { input: "listen\nsilent", expected: "да" },
      { input: "hello\nworld", expected: "нет" }
    ]
  },
  {
    id: "9.11",
    title: "Сдвиг массива",
    description: "Сдвинь список вправо на 1 позицию. Последний элемент становится первым.",
    explanation: "Срез nums[-1:] берёт последний элемент, nums[:-1] — всё кроме последнего. Склеиваем.",
    example: "nums = [1, 2, 3, 4, 5]\nprint(*(nums[-1:] + nums[:-1]))\n→ 5 1 2 3 4",
    difficulty: "⭐⭐",
    starter: "nums = list(map(int, input().split()))\n...",
    hints: ["nums[-1:] + nums[:-1]"],
    tests: [{ input: "1 2 3 4 5", expected: "5 1 2 3 4" }]
  },
  {
    id: "9.12",
    title: "Подсчёт вхождений",
    description: "Считай строку и символ. Выведи, сколько раз символ встречается в строке.",
    explanation: "Метод count() считает, сколько раз подстрока встречается в строке.",
    example: "s = \"программирование\"\nprint(s.count(\"р\"))\n→ 2",
    difficulty: "⭐",
    starter: "s = input()\nc = input()\n...",
    hints: ["s.count(c)"],
    tests: [
      { input: "программирование\nр", expected: "2" },
      { input: "hello\nl", expected: "2" }
    ]
  }
];
