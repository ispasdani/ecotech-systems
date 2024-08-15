"use client";

import { useEffect, useState } from "react";

const PyramidAnimation = () => {
  const [pyramid, setPyramid] = useState<string[]>([]);

  const createPyramid = (): string[] => {
    const maxWidth = 30;
    const pyramidArray = [];

    for (let i = 1; i <= maxWidth; i += 2) {
      const spaces = " ".repeat((maxWidth - i) / 2);
      const stars = "*".repeat(i);
      pyramidArray.push(spaces + stars + spaces);
    }

    return pyramidArray;
  };

  const flickerEffect = (pyramidArray: string[]): string[] => {
    return pyramidArray.map((row) =>
      row
        .split("")
        .map((char) => (Math.random() > 0.8 ? " " : char)) // 20% chance to replace a character with a space
        .join("")
    );
  };

  useEffect(() => {
    const newPyramid = createPyramid();
    newPyramid.push(...newPyramid.slice(0, -1).reverse()); // Create the reflection
    setPyramid(newPyramid);

    const interval = setInterval(() => {
      setPyramid((prevPyramid) => flickerEffect(createPyramid()));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-black text-sm leading-none">
      {pyramid.map((row, index) => (
        <pre key={index} className="whitespace-pre-wrap">
          {row}
        </pre>
      ))}
    </div>
  );
};

export default PyramidAnimation;
