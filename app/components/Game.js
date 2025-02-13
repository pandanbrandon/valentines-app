"use client";
import { useState } from "react";

export default function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const [dateIdea, setDateIdea] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  const dateIdeas = [
    "Romantic dinner at a fancy restaurant 🍽️",
    "Picnic in the park 🌳",
    "Movie night with homemade popcorn 🎬🍿",
    "Stargazing with cozy blankets 🌌",
    "Board game night 🎲",
    "Cooking a new recipe together 🍳",
    "Visiting an art museum 🎨",
    "Ice skating or rollerblading ⛸️",
    "DIY spa night 💆‍♀️",
    "Road trip to a nearby town 🚗",
  ];
  

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
  
    // Pick a random date idea
    const randomDate = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
    setDateIdea(randomDate);
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
          <p className="text-lg font-semibold text-gray-700">
            You chose: <span className="text-black font-bold">{playerChoice}</span>
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Computer chose: <span className="text-black font-bold">{computerChoice}</span>
          </p>
          <p 
            className={`text-xl font-bold mt-2 ${
              result === "You win! 🎉" ? "text-green-500" : 
              result === "You lose! 😢" ? "text-red-500" : 
              "text-blue-500"
            }`}
          >
            {result}
          </p>
        </div>
      )}
  
      {/* ADD DATE IDEA DISPLAY HERE */}
      {dateIdea && (
        <div className="text-center mt-4 p-4 bg-pink-200 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-600">Valentine's Date Idea ❤️</h3>
          <p className="text-md font-medium text-gray-800">{dateIdea}</p>
        </div>
      )}
  
      <button
        onClick={() => {
          setPlayerChoice(null);
          setComputerChoice(null);
          setResult("");
          setDateIdea(""); // Reset the date idea
        }}
        className="mt-4 px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-600 transition"
      >
        Play Again
      </button>
    </div>
  );
  
}
