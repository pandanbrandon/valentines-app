import Game from "./components/Game";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-red-500 mb-6">
        Valentine's Day App ❤️
      </h1>
      <Game />
    </div>
  );
}
