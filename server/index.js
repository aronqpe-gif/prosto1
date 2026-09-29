import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { analyzeError } from "./errorAnalyzer.js";

const app = express();

// Разрешаем CORS (при необходимости можно ограничить конкретным доменом)
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static("dist"));

app.post("/api/run", async (req, res) => {
  const { code, tests } = req.body;
  if (!code || !Array.isArray(tests)) {
    return res.status(400).json({ error: "Неверный запрос" });
  }

  const results = [];

  for (const t of tests) {
    let piston;
    try {
      const r = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "python",
          version: "3.10.0",
          files: [{ content: code }],
          stdin: t.input || "",
          run_timeout: 3000,
          compile_timeout: 5000
        })
      });
      piston = await r.json();
    } catch (e) {
      results.push({
        passed: false,
        error: {
          type: "system",
          title: "Сервер недоступен",
          explain: "Не удалось запустить код. Попробуй ещё раз.",
          hints: []
        }
      });
      continue;
    }

    const stdout = piston.run?.stdout || "";
    const stderr = piston.run?.stderr || "";
    const expected = (t.expected || "").trim();
    const error = analyzeError(stderr, stdout, expected, stdout);

    results.push({
      passed: !error,
      input: t.input || "(нет)",
      expected,
      actual: stdout.trim() || "(пусто)",
      error
    });
  }

  const passed = results.every((r) => r.passed);
  res.json({ passed, results });
});

// Настройка порта: берем PORT из окружения хостинга или по умолчанию 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту ${PORT}`);
});
