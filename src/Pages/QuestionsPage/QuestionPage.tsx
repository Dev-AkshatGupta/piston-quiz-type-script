import { useAppSelector } from "./../../Redux/hooks";
import { useParams } from "react-router-dom";
import "./QuestionPage.css";
import Questions from "Components/Questions/Questions";
type QuizParams={
    quiz:string
}
const QuestionPage = () => {
const {quiz}=useParams<QuizParams>();
console.log(quiz);
// const index:any=+quiz;
const quizes=useAppSelector(state=>state?.functioning?.quizes)
const quizArr=quizes[Number(quiz)]?.questions;
Array.from(quizArr);
return (
<div>
    {quizArr.length!==0 &&
        quizArr?.map((quiz:any,i:number)=><Questions question={quiz[`Question${i+1}`][`question`]} options={quiz[`Question${i+1}`][`options`]} ques={i+1} answer={quiz.answer} key={quiz.question}/>)}
</div>
  )
}

export default QuestionPage
