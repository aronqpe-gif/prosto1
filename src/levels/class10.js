export const level10 = [
  {
    id: "10.1",
    title: "Класс Student",
    description: "Создай класс Student с полями name и grade. Метод info() возвращает 'Имя: оценка'.",
    explanation: "Класс — шаблон объекта. __init__ — конструктор. self — ссылка на сам объект.",
    example: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    def info(self):\n        return f'{self.name}: {self.grade}'",
    difficulty: "⭐",
    starter: "class Student:\n    def __init__(self, name, grade):\n        ...\n    def info(self):\n        ...\ns = Student('Иван', 5)\nprint(s.info())",
    hints: ["self.name = name, self.grade = grade", "return f'{self.name}: {self.grade}'"],
    tests: [{ input: "", expected: "Иван: 5" }]
  },
  {
    id: "10.2",
    title: "Наследование",
    description: "Animal.speak() → '...', Dog(Animal).speak() → 'Гав!'",
    explanation: "Наследование позволяет классу-потомку брать методы родителя и переопределять их.",
    example: "class Animal:\n    def speak(self):\n        return '...'\nclass Dog(Animal):\n    def speak(self):\n        return 'Гав!'",
    difficulty: "⭐⭐",
    starter: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        ...\nd = Dog()\nprint(d.speak())',
    hints: ["Переопредели метод speak в Dog"],
    tests: [{ input: "", expected: "Гав!" }]
  },
  {
    id: "10.3",
    title: "Обработка исключений",
    description: "Если деление на 0 — выведи 'Ошибка', иначе результат деления (float).",
    explanation: "try/except позволяет поймать ошибку и обработать её, вместо падения программы.",
    example: "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Ошибка')",
    difficulty: "⭐⭐",
    starter: "try:\n    a = int(input())\n    b = int(input())\n    ...",
    hints: ["except ZeroDivisionError: print('Ошибка')"],
    tests: [
      { input: "10\n2", expected: "5.0" },
      { input: "5\n0", expected: "Ошибка" }
    ]
  },
  {
    id: "10.4",
    title: "JSON-парсинг",
    description: "Дан JSON-объект. Выведи значение поля 'name'.",
    explanation: "json.loads() превращает JSON-строку в словарь Python.",
    example: "import json\ndata = json.loads('{\"name\": \"Аня\"}')\nprint(data['name'])\n→ Аня",
    difficulty: "⭐⭐",
    starter: "import json\ndata = json.loads(input())\n...",
    hints: ["data['name']"],
    tests: [{ input: '{"name": "Аня", "age": 16}', expected: "Аня" }]
  },
  {
    id: "10.5",
    title: "Стек",
    description: "Реализуй класс Stack с push, pop. Выведи результат последнего pop.",
    explanation: "Стек — LIFO (последний пришёл — первый ушёл). В Python удобно через список.",
    example: "class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        return self.items.pop()",
    difficulty: "⭐⭐⭐",
    starter: "class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        ...\n    def pop(self):\n        ...\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\nprint(s.pop())",
    hints: ["push → append, pop → self.items.pop()"],
    tests: [{ input: "", expected: "3" }]
  },
  {
    id: "10.6",
    title: "Класс Vector",
    description: "Класс Vector(x, y). Метод length() возвращает длину вектора (округли до 2 знаков).",
    explanation: "Длина вектора = √(x² + y²). Используем math.sqrt и round.",
    example: "import math\nclass Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def length(self):\n        return round(math.sqrt(self.x**2 + self.y**2), 2)",
    difficulty: "⭐⭐",
    starter: "import math\nclass Vector:\n    def __init__(self, x, y):\n        ...\n    def length(self):\n        ...\nv = Vector(3, 4)\nprint(v.length())",
    hints: ["math.sqrt(x**2 + y**2)", "round(..., 2)"],
    tests: [{ input: "", expected: "5.0" }]
  },
  {
    id: "10.7",
    title: "Очередь (Queue)",
    description: "Реализуй очередь. enqueue добавляет, dequeue удаляет из начала.",
    explanation: "Очередь — FIFO (первый пришёл — первый ушёл).",
    example: "class Queue:\n    def __init__(self):\n        self.items = []\n    def enqueue(self, item):\n        self.items.append(item)\n    def dequeue(self):\n        return self.items.pop(0)",
    difficulty: "⭐⭐⭐",
    starter: "class Queue:\n    def __init__(self):\n        self.items = []\n    def enqueue(self, item):\n        ...\n    def dequeue(self):\n        ...\nq = Queue()\nq.enqueue(10)\nq.enqueue(20)\nq.enqueue(30)\nprint(q.dequeue())\nprint(q.dequeue())",
    hints: ["enqueue → append, dequeue → pop(0)"],
    tests: [{ input: "", expected: "10\n20" }]
  },
  {
    id: "10.8",
    title: "Банковский счёт с проверкой",
    description: "Класс Account. withdraw не должен уводить баланс в минус. Выведи итоговый баланс.",
    explanation: "Перед снятием денег проверяем, хватает ли средств.",
    example: "class Account:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount",
    difficulty: "⭐⭐",
    starter: "class Account:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n    def withdraw(self, amount):\n        ...\nacc = Account(100)\nacc.withdraw(30)\nacc.withdraw(90)\nprint(acc.balance)",
    hints: ["if amount <= self.balance: self.balance -= amount"],
    tests: [{ input: "", expected: "70" }]
  },
  {
    id: "10.9",
    title: "Декоратор-счётчик",
    description: "Напиши декоратор, который считает, сколько раз вызвали функцию. После 3 вызовов выведи счётчик.",
    explanation: "Декоратор — функция, которая принимает другую функцию и добавляет поведение.",
    example: "def counter(func):\n    count = 0\n    def wrapper():\n        nonlocal count\n        count += 1\n        func()\n        if count == 3: print(count)\n    return wrapper",
    difficulty: "⭐⭐⭐",
    starter: "def counter(func):\n    count = 0\n    def wrapper():\n        nonlocal count\n        ...\n    return wrapper\n\n@counter\ndef hello():\n    pass\n\nhello()\nhello()\nhello()",
    hints: ["count += 1, после вызова если count == 3: print(count)"],
    tests: [{ input: "", expected: "3" }]
  },
  {
    id: "10.10",
    title: "Связанный список (поиск)",
    description: "Реализуй поиск значения в односвязном списке. Верни True/False.",
    explanation: "Идём по ссылкам next, пока не найдём значение или не дойдём до конца.",
    example: "def find(head, target):\n    while head:\n        if head.val == target: return True\n        head = head.next\n    return False",
    difficulty: "⭐⭐⭐",
    starter: "class Node:\n    def __init__(self, val, next=None):\n        self.val = val\n        self.next = next\n\ndef find(head, target):\n    ...\nhead = Node(1, Node(2, Node(3, Node(4))))\nprint(find(head, 3))\nprint(find(head, 5))",
    hints: ["Пока head не None: если head.val == target: return True"],
    tests: [{ input: "", expected: "True\nFalse" }]
  },
  {
    id: "10.11",
    title: "Кэш (мемоизация)",
    description: "Реализуй функцию fib с кэшем (словарём), чтобы не пересчитывать.",
    explanation: "Мемоизация сохраняет уже вычисленные результаты в словарь.",
    example: "cache = {}\ndef fib(n):\n    if n in cache: return cache[n]\n    if n <= 1: return n\n    cache[n] = fib(n-1) + fib(n-2)\n    return cache[n]",
    difficulty: "⭐⭐⭐",
    starter: "cache = {}\ndef fib(n):\n    ...\nprint(fib(10))\nprint(fib(20))",
    hints: ["if n in cache: return cache[n]", "cache[n] = результат"],
    tests: [{ input: "", expected: "55\n6765" }]
  },
  {
    id: "10.12",
    title: "Итератор Range",
    description: "Напиши класс MyRange, который работает как range. Выведи числа от 1 до 5.",
    explanation: "Итератор реализует __iter__ и __next__. Когда элементы закончились — raise StopIteration.",
    example: "class MyRange:\n    def __init__(self, start, end):\n        self.current = start\n        self.end = end\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current >= self.end:\n            raise StopIteration\n        val = self.current\n        self.current += 1\n        return val",
    difficulty: "⭐⭐⭐",
    starter: "class MyRange:\n    def __init__(self, start, end):\n        self.current = start\n        self.end = end\n    def __iter__(self):\n        return self\n    def __next__(self):\n        ...\nprint(*MyRange(1, 6))",
    hints: ["if self.current >= self.end: raise StopIteration"],
    tests: [{ input: "", expected: "1 2 3 4 5" }]
  },
  {
    id: "10.13",
    title: "Контекстный менеджер",
    description: "Напиши класс Timer, который при выходе из with печатает 'done'.",
    explanation: "__enter__ вызывается при входе в with, __exit__ — при выходе.",
    example: "class Timer:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        print('done')",
    difficulty: "⭐⭐⭐",
    starter: "class Timer:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        ...\nwith Timer():\n    pass",
    hints: ["в __exit__ сделай print('done')"],
    tests: [{ input: "", expected: "done" }]
  },
  {
    id: "10.14",
    title: "Глубокое копирование списка",
    description: "Скопируй вложенный список так, чтобы изменение копии не влияло на оригинал.",
    explanation: "Для вложенных структур нужен copy.deepcopy, обычный copy делает поверхностную копию.",
    example: "import copy\noriginal = [[1, 2], [3, 4]]\ncopied = copy.deepcopy(original)\ncopied[0][0] = 99",
    difficulty: "⭐⭐",
    starter: "import copy\noriginal = [[1, 2], [3, 4]]\ncopied = ...\ncopied[0][0] = 99\nprint(original)\nprint(copied)",
    hints: ["copy.deepcopy(original)"],
    tests: [{ input: "", expected: "[[1, 2], [3, 4]]\n[[99, 2], [3, 4]]" }]
  },
  {
    id: "10.15",
    title: "Сортировка объектов",
    description: "Отсортируй список студентов по оценке (по убыванию) и выведи имена.",
    explanation: "sorted() принимает key — функцию сортировки. Минус делает порядок по убыванию.",
    example: "students = [('Анна', 5), ('Борис', 3)]\nsorted_s = sorted(students, key=lambda x: -x[1])\nprint(*(s[0] for s in sorted_s))",
    difficulty: "⭐⭐",
    starter: "students = [('Анна', 5), ('Борис', 3), ('Вика', 5), ('Глеб', 4)]\n...",
    hints: ["sorted(students, key=lambda x: -x[1])"],
    tests: [{ input: "", expected: "Анна Вика Глеб Борис" }]
  }
];
