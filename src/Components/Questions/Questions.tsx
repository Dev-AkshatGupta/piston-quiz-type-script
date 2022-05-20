import React, { useState } from "react";
import "./Questions.css";
type QuestionsData = {
  options: string[];
  question: string;
  ques: number;
  answer: string;
};

const Questions = ({ options, question, ques, answer }: QuestionsData) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <div>
        <p className="text-question">
          {ques}) {question}
        </p>
        <div>
          {options.map((option) => (
            <p key={option}
              className={`text-ques-options ${option===selected ? "selected" : null}`}
              onClick={(e) => {
                setSelected(e.currentTarget.innerText);
              }}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
