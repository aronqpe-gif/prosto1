export function saveProgress(classNum, levelId) {
  const key = `quest_class_${classNum}`;
  const done = JSON.parse(localStorage.getItem(key) || "[]");
  if (!done.includes(levelId)) {
    done.push(levelId);
    localStorage.setItem(key, JSON.stringify(done));
  }
}

export function getProgress(classNum) {
  return JSON.parse(localStorage.getItem(`quest_class_${classNum}`) || "[]");
}

export function getXP(classNum) {
  return getProgress(classNum).length * 10;
}
