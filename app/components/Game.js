"use client";
import { useState } from "react";

export default function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  // Function to determine the winner
  function playGame(choice) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];

    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("It's a tie!");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      setResult("You win! 🎉");
    } else {
      setResult("You lose! 😢");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-red-500">Rock, Paper, Scissors</h2>

      <div className="flex gap-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="px-4 py-2 bg-red-300 text-white font-bold rounded-lg hover:bg-red-500 transition"
            onClick={() => playGame(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      {playerChoice && (
        <div className="text-center mt-4">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p className="text-xl font-bold mt-2">{result}</p>
        </div>
      )}

      <button
        onClick={() => {
          setPlayerChoice(null);
          setComputerChoice(null);
          setResult("");
        }}
        className="mt-4 px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-600 transition"
      >
        Play Again
      </button>
    </div>
  );
}
