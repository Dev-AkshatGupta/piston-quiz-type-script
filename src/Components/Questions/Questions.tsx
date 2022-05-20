import React from "react";
type QuestionsData = {
  options: string[];
  question: string;
  ques:number,
  answer:string
};
const Questions = ({ options, question,ques,answer }: QuestionsData) => {
  return (
    <>
      <div>
        <p className="text-question">{ques}) {question}</p>
        <div>
            {options.map(option=><p className="text-ques-options"
            //  bg-c-green"
             >
           { option}
          </p>)}
        </div>
      </div>
    </>
  );
};

export default Questions;
