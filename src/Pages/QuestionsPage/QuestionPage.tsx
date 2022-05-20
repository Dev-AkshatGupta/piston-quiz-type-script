import { useAppSelector ,useAppDispatch} from "./../../Redux/hooks";
import { Link, Outlet, useParams } from "react-router-dom";
import "./QuestionPage.css";
import Questions from "Components/Questions/Questions";
import {useEffect} from "react";
import { resultStoreUpdate } from "./../../Redux/Reducers/FunctioningSlice";
type QuizParams = {
  quiz: string;
};
const QuestionPage = () => {
  const { quiz } = useParams<QuizParams>();
  const quizes = useAppSelector((state) => state?.functioning?.quizes);
  const quizArr = quizes[Number(quiz)]?.questions;
  const dispatch=useAppDispatch();
  Array.from(quizArr);
    useEffect(() => {
    dispatch(resultStoreUpdate(quizArr));
  }, [quizArr[0].Question1.question]);
  return (   
      <section className=" width-150 section-div padding-2  flex-column-center-spaced-even ">
        {quizArr.length !== 0 &&
          quizArr?.map((quiz: any, i: number) => (
            <Questions
              question={quiz[`Question${i + 1}`][`question`]}
              options={quiz[`Question${i + 1}`][`options`]}
              ques={i + 1}
              answer={quiz[`Question${i + 1}`][`answer`]}
              key={quiz[`Question${i + 1}`][`question`]}
            />
          ))}
          <Link to="/result">Submit Quiz</Link>
      </section>
 
  );
};

export default QuestionPage;
