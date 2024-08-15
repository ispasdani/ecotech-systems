"use client";

import { useEffect, useState } from "react";

const MatrixVortex = () => {
  const [matrix, setMatrix] = useState<string[]>([]); // Explicitly define the state type as string[]

  const createMatrix = (): string[] => {
    // Return type of createMatrix is also explicitly string[]
    const rows = 200; // Number of rows
    const columns = 200; // Number of columns
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
    const newMatrix: string[] = []; // Define newMatrix as string[]

    for (let i = 0; i < rows; i++) {
      let row = "";
      for (let j = 0; j < columns; j++) {
        const randomChar = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        row += randomChar;
      }
      newMatrix.push(row);
    }

    return newMatrix;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrix(createMatrix());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-black text-sm leading-none w-full h-full overflow-hidden">
      {matrix.map((row, index) => (
        <pre key={index} className="whitespace-pre-wrap">
          {row}
        </pre>
      ))}
    </div>
  );
};

export default MatrixVortex;
