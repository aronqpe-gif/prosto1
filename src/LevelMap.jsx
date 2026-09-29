import { getProgress } from "./progress";

export default function LevelMap({ classNum, levels, onOpen, onBack }) {
  const done = getProgress(classNum);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button onClick={onBack} className="text-blue-600 mb-4">← Назад к классам</button>
      <h2 className="text-3xl font-bold mb-2">{classNum} класс</h2>
      <p className="text-gray-600 mb-8">
        Пройдено {done.length} из {levels.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {levels.map((lv, i) => {
          const isDone = done.includes(lv.id);
          const isLocked =
            i > 0 && !done.includes(levels[i - 1].id) && !isDone;
          return (
            <button
              key={lv.id}
              disabled={isLocked}
              onClick={() => onOpen(i)}
              className={`p-5 rounded-xl text-left shadow-md transition ${
                isDone
                  ? "bg-green-50 border-2 border-green-400"
                  : isLocked
                  ? "bg-gray-200 opacity-60 cursor-not-allowed"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-500">{lv.id}</span>
                <span>{isDone ? "✅" : isLocked ? "🔒" : lv.difficulty || "⭐"}</span>
              </div>
              <h3 className="font-bold mt-1">{lv.title}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}
