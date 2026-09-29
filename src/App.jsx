import { useState } from "react";
import Home from "./Home";
import LevelMap from "./LevelMap";
import Level from "./Level";
import { allLevels } from "./levels";

export default function App() {
  const [classNum, setClassNum] = useState(null);
  const [levelIdx, setLevelIdx] = useState(null);

  if (!classNum) return <Home onSelect={setClassNum} />;

  const levels = allLevels[classNum];

  if (levelIdx === null) {
    return (
      <LevelMap
        classNum={classNum}
        levels={levels}
        onOpen={setLevelIdx}
        onBack={() => setClassNum(null)}
      />
    );
  }

  return (
    <Level
      level={{ ...levels[levelIdx], classNum }}
      onBack={() => setLevelIdx(null)}
      onNext={() => setLevelIdx(levelIdx + 1)}
      hasNext={levelIdx + 1 < levels.length}
    />
  );
}
