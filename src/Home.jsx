export default function Home({ onSelect }) {
  const grades = [6, 7, 8, 9, 10, 11];
  const colors = [
    "from-green-400 to-green-600",
    "from-teal-400 to-teal-600",
    "from-yellow-400 to-yellow-600",
    "from-orange-400 to-orange-600",
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-center mb-3">
          🎮 Квест по программированию
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Выбери свой класс и начни приключение
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {grades.map((g, i) => (
            <button
              key={g}
              onClick={() => onSelect(g)}
              className={`p-8 bg-gradient-to-br ${colors[i]} text-white rounded-2xl shadow-lg hover:scale-105 transition`}
            >
              <div className="text-4xl font-bold">{g}</div>
              <div className="text-sm opacity-90 mt-1">класс</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">
          ПОНЯТЬ
        </p>
        <p className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">
          ЛЕГКО
        </p>
        <div className="w-16 h-0.5 bg-slate-400 mx-auto mt-3"></div>
      </div>
    </div>
  );
}
