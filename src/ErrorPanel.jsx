export function ErrorPanel({ results }) {
  const failed = results.filter((r) => !r.passed);

  if (failed.length === 0) {
    return (
      <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded">
        <p className="text-green-800 font-bold">✅ Все тесты пройдены!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {failed.map((r, i) => (
        <ErrorCard key={i} result={r} index={i} />
      ))}
    </div>
  );
}

function ErrorCard({ result, index }) {
  const { error, input, expected, actual } = result;
  if (!error) return null;

  const style =
    {
      runtime: { bg: "bg-red-50", border: "border-red-500", icon: "💥" },
      logic: { bg: "bg-yellow-50", border: "border-yellow-500", icon: "🤔" },
      system: { bg: "bg-gray-50", border: "border-gray-400", icon: "⚠️" }
    }[error.type] || { bg: "bg-gray-50", border: "border-gray-400", icon: "❓" };

  return (
    <div className={`p-4 ${style.bg} border-l-4 ${style.border} rounded`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{style.icon}</span>
        <h3 className="font-bold">
          Тест {index + 1}: {error.title}
        </h3>
      </div>
      <p className="text-gray-800 mb-3">{error.explain}</p>

      {error.type === "logic" && (
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
          <div className="bg-white p-2 rounded border">
            <div className="text-gray-500 text-xs">Ожидалось:</div>
            <pre className="text-green-700 whitespace-pre-wrap">{expected}</pre>
          </div>
          <div className="bg-white p-2 rounded border">
            <div className="text-gray-500 text-xs">Получилось:</div>
            <pre className="text-red-700 whitespace-pre-wrap">{actual}</pre>
          </div>
        </div>
      )}

      {input && input !== "(нет)" && (
        <div className="mb-3 text-sm">
          <span className="text-gray-500">Входные данные: </span>
          <code className="bg-gray-100 px-2 py-1 rounded">{input}</code>
        </div>
      )}

      {error.hints?.length > 0 && (
        <div className="bg-white p-3 rounded border">
          <div className="font-semibold text-sm mb-1">💡 Что проверить:</div>
          <ul className="list-disc list-inside text-sm space-y-1">
            {error.hints.map((h, j) => (
              <li key={j}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {error.raw && (
        <details className="mt-2 text-xs">
          <summary className="cursor-pointer text-gray-500">
            Показать ошибку Python
          </summary>
          <pre className="mt-1 p-2 bg-black text-red-400 rounded overflow-auto">
            {error.raw}
          </pre>
        </details>
      )}
    </div>
  );
}
