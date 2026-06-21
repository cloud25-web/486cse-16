import { useState } from "react";
import Sidebar from "../components/sidebar";

function Flashcards() {

  const flashcards = {
    DSA: [
      {
        question: "What is a Stack?",
        answer: "A LIFO data structure."
      },
      {
        question: "What is a Queue?",
        answer: "A FIFO data structure."
      }
    ],

    DBMS: [
      {
        question: "What is a Primary Key?",
        answer: "A unique identifier for a record."
      },
      {
        question: "What is Normalization?",
        answer: "The process of reducing data redundancy."
      }
    ]
  };

  const [subject, setSubject] = useState("DSA");
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const cards = flashcards[subject];

  return (
    <div className="flex min-h-screen bg-[#EEF2FF]">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-[#1E1B4B]">
          Flashcards
        </h1>

        <p className="text-gray-500 mt-2">
          Quick revision for important concepts.
        </p>

        <div className="mt-6">
      <label className="block mb-2 font-medium">
        Select Subject
      </label>

      <select
      value={subject}
      onChange={(e) => {
        setSubject(e.target.value);
        setCurrentCard(0);
        setShowAnswer(false);
      }}
    className="
      bg-white
      px-4
      py-3
      rounded-xl
      border
      border-gray-200
    "
  >
    <option>DSA</option>
    <option>DBMS</option>
  </select>
  </div>

  <p className="mt-4 text-indigo-600 font-medium">
  Card {currentCard + 1} of {cards.length}
</p>

  <div
  onClick={() => setShowAnswer(!showAnswer)}
  className="
  mt-8
  bg-[#DBEAFE]
  rounded-[32px]
  shadow-lg
  border
  border-indigo-100
  p-10
  min-h-[280px]
  flex
  items-center
  justify-center
  text-center
  cursor-pointer
  transition-all
  hover:shadow-xl
"
>
  <div>

    <h2 className="text-2xl font-semibold text-[#1E1B4B]">
      {cards[currentCard].question}
    </h2>

    <p className="mt-6 text-lg text-gray-600">
      {showAnswer
        ? cards[currentCard].answer
        : "Click to reveal answer"}
    </p>

  </div>
</div>

<div className="flex gap-4 mt-6">

  <button
    onClick={() => {
      if (currentCard > 0) {
        setCurrentCard(currentCard - 1);
        setShowAnswer(false);
      }
    }}
    className="
  bg-white
  px-6
  py-3
  rounded-xl
  shadow-md
  hover:shadow-lg
"
  >
    Previous
  </button>

  <button
    onClick={() => {
      if (currentCard < cards.length - 1) {
        setCurrentCard(currentCard + 1);
        setShowAnswer(false);
      }
    }}
    className="
  bg-[#6366F1]
  text-white
  px-6
  py-3
  rounded-xl
  hover:bg-[#4F46E5]
"
  >
    Next
  </button>
</div>

</div>

</div>
  );
}

export default Flashcards;