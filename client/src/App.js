import { useState } from "react";

function App() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [character, setCharacter] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word1, word2 }),
    });
    const data = await response.json();
    console.log(data);
    setCharacter(data.overlappingCharacters);
    setNumber(data.longestOverlap);
    console.log(character);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center h-screen">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="word" className="block mb-2 text-xl font-medium">
              Enter a word
            </label>
            <input
              className="block p-2 text-center text-xl font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              value={word1}
              onChange={(e) => setWord1(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="word" className="block mb-2 text-xl font-medium">
              Word to compare
            </label>
            <input
              className="block p-2 text-center text-xl font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              value={word2}
              onChange={(e) => setWord2(e.target.value)}
            />
          </div>

          <button
            className="font-medium rounded-lg text-sm text-center text-white bg-green-400 hover:bg-green-600 px-5 py-2.5 transition duration-75 ease-in-out"
            type="submit"
          >
            Detect Overlap
          </button>
          <p className="text-xl mt-6">
            only <span className="text-orange-500">{number}</span> characters
            overlapped - <span className="text-blue-300">"{character}"</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
