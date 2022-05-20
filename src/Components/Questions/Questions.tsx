import React, { useEffect, useState } from "react";
import "./Questions.css";
import {updateResultStore } from "./../../Redux/Reducers/FunctioningSlice";
import { useAppDispatch } from "Redux/hooks";
type QuestionsData = {
  options: string[];
  question: string;
  ques: number;
  answer: string;
};

const Questions = ({ options, question, ques, answer }: QuestionsData) => {
  const [selected, setSelected] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <p className="text-question">
          {ques}) {question}
        </p>
        <div>
          {options.map((option) => (
            <p
              key={option}
              className={`text-ques-options ${
                option === selected ? "selected" : null
              }`}
              onClick={(e) => {
                setSelected(e.currentTarget.innerText);
                dispatch(updateResultStore({question,optionSelected:option}))
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
