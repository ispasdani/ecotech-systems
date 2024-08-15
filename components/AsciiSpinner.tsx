"use client";

import { useEffect, useState } from "react";

const AsciiSpinner = () => {
  const frames = [
    "     ______\n    /      \\\n   |        |\n    \\______/",
    "     ______\n    \\      /\n   |        |\n    /______\\",
    "     ______\n    /      \\\n   |        |\n    \\______/",
    "     ______\n    \\      /\n   |        |\n    /______\\",
  ];

  const [currentFrame, setCurrentFrame] = useState(frames[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const currentIndex = frames.indexOf(prevFrame);
        return frames[(currentIndex + 1) % frames.length];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [frames]);

  return (
    <div className="font-mono text-green-500 text-2xl whitespace-pre leading-tight">
      <pre>{currentFrame}</pre>
    </div>
  );
};

export default AsciiSpinner;
