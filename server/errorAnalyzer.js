const ERROR_PATTERNS = [
  {
    match: /SyntaxError: expected ':'/,
    title: "Забыто двоеточие",
    explain: "После if, elif, else, for, while, def нужно ставить ':'",
    hints: ["Пример: if x > 0:  ← двоеточие в конце"]
  },
  {
    match: /SyntaxError: invalid syntax/,
    title: "Синтаксическая ошибка",
    explain: "Python не понимает написанное. Проверь:",
    hints: [
      "Все ли скобки (), [], {} закрыты?",
      "Закрыты ли кавычки в строках?",
      "Нет ли опечаток в ключевых словах?"
    ]
  },
  {
    match: /IndentationError: expected an indented block/,
    title: "Нет отступа",
    explain: "После строки с ':' тело блока пишется с отступом (4 пробела).",
    hints: ["Не смешивай табы и пробелы", "Отступ — ровно 4 пробела"]
  },
  {
    match: /IndentationError: unexpected indent/,
    title: "Лишний отступ",
    explain: "Строка сдвинута вправо, хотя не должна.",
    hints: ["Убери лишние пробелы в начале строки"]
  },
  {
    match: /NameError: name '(\w+)' is not defined/,
    title: "Неизвестное имя",
    explain: (m) => `Переменная или функция '${m[1]}' не объявлена.`,
    hints: [
      "Проверь опечатки в имени",
      "Может, забыл присвоить значение перед использованием?",
      "Python чувствителен к регистру: Name ≠ name"
    ]
  },
  {
    match: /TypeError: can only concatenate str \(not "int"\) to str/,
    title: "Смешение типов",
    explain: "Нельзя складывать строку и число через '+'.",
    hints: [
      "Оберни число в str()",
      "Или используй f-строку: print(f'Возраст: {age}')"
    ]
  },
  {
    match: /TypeError: unsupported operand type\(s\) for \+: 'int' and 'str'/,
    title: "Смешение типов",
    explain: "Складываешь число и строку. input() возвращает строку!",
    hints: ["Преобразуй через int() или float()", "n = int(input()) — так правильно"]
  },
  {
    match: /ValueError: invalid literal for int\(\) with base 10: '(.+?)'/,
    title: "Не число",
    explain: (m) => `int() получил '${m[1]}' — это не целое число.`,
    hints: ["Пользователь ввёл текст вместо числа", "Проверь формат входных данных"]
  },
  {
    match: /ZeroDivisionError/,
    title: "Деление на ноль",
    explain: "Делить на 0 нельзя.",
    hints: ["Проверь знаменатель: if b != 0", "Используй try/except"]
  },
  {
    match: /IndexError: list index out of range/,
    title: "Выход за границы",
    explain: "Обращаешься к элементу, которого нет в списке.",
    hints: [
      "Индексы начинаются с 0",
      "Последний индекс = len(arr) - 1",
      "Проверь цикл: range(len(arr)), а не range(len(arr) + 1)"
    ]
  },
  {
    match: /KeyError: '?(\w+)'?/,
    title: "Ключ не найден",
    explain: (m) => `В словаре нет ключа '${m[1]}'.`,
    hints: ["Используй .get(key, default)", "Проверь: if key in dict"]
  },
  {
    match: /RecursionError/,
    title: "Бесконечная рекурсия",
    explain: "Функция вызывает саму себя без условия выхода.",
    hints: ["Добавь базовый случай: if n <= 1: return ...", "Проверь, что аргумент уменьшается"]
  },
  {
    match: /Timeout|timed out/,
    title: "Превышено время",
    explain: "Программа работает слишком долго — вероятно, бесконечный цикл.",
    hints: ["Проверь условие while — меняется ли переменная?", "Не забыл i += 1 внутри цикла?"]
  }
];

export function analyzeError(stderr, stdout, expected, actual) {
  if (stderr && stderr.trim()) {
    for (const p of ERROR_PATTERNS) {
      const m = stderr.match(p.match);
      if (m) {
        return {
          type: "runtime",
          title: p.title,
          explain: typeof p.explain === "function" ? p.explain(m) : p.explain,
          hints: p.hints,
          raw: stderr.trim().split("\n").slice(-4).join("\n")
        };
      }
    }
    return {
      type: "runtime",
      title: "Ошибка выполнения",
      explain: "Программа завершилась с ошибкой.",
      hints: ["Смотри сообщение ниже — там указана строка"],
      raw: stderr.trim()
    };
  }

  if (actual.trim() !== expected.trim()) {
    return analyzeWrongOutput(expected, actual);
  }

  return null;
}

function analyzeWrongOutput(expected, actual) {
  const exp = expected.trim();
  const act = actual.trim();
  const hints = [];

  if (!act) {
    return {
      type: "logic",
      title: "Пустой вывод",
      explain: "Программа ничего не вывела, а должна была.",
      hints: ["Используй print() для вывода", "Проверь, что print вызывается, а не просто определён"],
      expected: exp,
      actual: "(пусто)"
    };
  }

  const expLines = exp.split("\n");
  const actLines = act.split("\n");
  if (expLines.length !== actLines.length) {
    hints.push(`Ожидалось ${expLines.length} строк, а вывелось ${actLines.length}`);
  }

  const expNum = parseFloat(exp);
  const actNum = parseFloat(act);
  if (!isNaN(expNum) && !isNaN(actNum) && expNum !== actNum) {
    if (actNum === expNum + 1 || actNum === expNum - 1) {
      hints.push("Ошибка на 1 — проверь границы: range(a, b) не включает b");
    }
    if (actNum === expNum * 2) hints.push("Результат в 2 раза больше — не удвоил?");
    if (actNum === expNum / 2) hints.push("Результат в 2 раза меньше — не забыл умножить?");
    if (actNum === -expNum) hints.push("Проверь знак числа");
  }

  if (exp.toLowerCase() === act.toLowerCase() && exp !== act) {
    hints.push(`Проверь регистр: нужно "${exp}"`);
  }
  if (exp.replace(/\s+/g, " ") === act.replace(/\s+/g, " ") && exp !== act) {
    hints.push("Лишние пробелы или переводы строк");
  }
  if (exp.split(" ").sort().join(" ") === act.split(" ").sort().join(" ") && exp !== act) {
    hints.push("Слова те же, но порядок неверный");
  }
  if (hints.length === 0) {
    hints.push("Перечитай условие и сравни вывод посимвольно");
  }

  return {
    type: "logic",
    title: "Неверный ответ",
    explain: "Программа работает, но результат не совпадает с ожидаемым.",
    hints,
    expected: exp,
    actual: act
  };
}
