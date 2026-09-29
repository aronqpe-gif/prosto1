import { useState } from "react";
import Editor from "@monaco-editor/react";
import { ErrorPanel } from "./ErrorPanel";
import { saveProgress } from "./progress";
import { lintCode } from "./lint";

export default function Level({ level, onBack, onNext, hasNext }) {
  const [code, setCode] = useState(level.starter);
  const [results, setResults] = useState(null);
  const [running, setRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplain, setShowExplain] = useState(true);
  const [passed, setPassed] = useState(false);

  const warnings = lintCode(code);

  async function check() {
    setRunning(true);
    setResults(null);
    try {
      const r = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, tests: level.tests })
      });
      const data = await r.json();
      setResults(data.results);
      if (data.passed) {
        setPassed(true);
        saveProgress(level.classNum, level.id);
      }
    } catch (e) {
      setResults([
        {
          passed: false,
          error: {
            title: "Ошибка сети",
            explain: "Проверь подключение к серверу",
            hints: ["Убедись, что бэкенд запущен на порту 3000"]
          }
        }
      ]);
    }
    setRunning(false);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="p-6 overflow-auto border-r bg-gray-50">
        <button onClick={onBack} className="text-blue-600 mb-4">
          ← К уровням
        </button>
        <h1 className="text-2xl font-bold">{level.title}</h1>
        <p className="text-sm text-gray-500">{level.difficulty || "⭐"}</p>
        <p className="mt-3 text-gray-800 whitespace-pre-wrap">{level.description}</p>

        {/* Объяснение */}
        {level.explanation && (
          <div className="mt-4">
            <button
              onClick={() => setShowExplain(!showExplain)}
              className="text-blue-700 underline text-sm font-medium"
            >
              📖 {showExplain ? "Скрыть" : "Показать"} объяснение
            </button>
            {showExplain && (
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-800 whitespace-pre-wrap">
                {level.explanation}
              </div>
            )}
          </div>
        )}

        {/* Пример */}
        {level.example && (
          <div className="mt-3 p-3 bg-gray-100 border border-gray-300 rounded text-sm">
            <div className="font-semibold text-gray-700 mb-1">📌 Пример:</div>
            <pre className="whitespace-pre-wrap text-gray-800">{level.example}</pre>
          </div>
        )}

        {/* Подсказки */}
        {level.hints?.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-yellow-700 underline text-sm"
            >
              💡 {showHint ? "Скрыть" : "Показать"} подсказку
            </button>
            {showHint && (
              <ul className="mt-2 pl-5 list-disc text-sm bg-yellow-50 p-3 rounded">
                {level.hints.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button
          onClick={check}
          disabled={running}
          className="mt-5 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:opacity-50"
        >
          {running ? "⏳ Проверяем..." : "▶ Запустить"}
        </button>

        {results && (
          <div className="mt-5">
            <ErrorPanel results={results} />
          </div>
        )}

        {passed && hasNext && (
          <button
            onClick={onNext}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Следующий уровень →
          </button>
        )}
      </div>

      <div className="flex flex-col">
        {warnings.length > 0 && (
          <div className="p-3 bg-yellow-50 border-b text-sm text-yellow-800">
            {warnings.map((w, i) => (
              <div key={i}>{w}</div>
            ))}
          </div>
        )}
        <Editor
          height="100%"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v || "")}
        />
      </div>
    </div>
  );
}
