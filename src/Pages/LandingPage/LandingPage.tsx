import "./landing-page.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { getCategories } from "../../Redux/Reducers/FunctioningSlice";
import CategoriesCard from "Components/CategoriesCard/CategoriesCard";
import QuestionCard from "Components/QuestionCard/QuestionCard";
import { getACategoryQuizes } from "Redux/Reducers/FunctioningSlice";
const LandingPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { categories } = useAppSelector((state) => state?.functioning);
  useEffect(() => {
    dispatch(getACategoryQuizes("HistoryOFAutomobiles"));
  }, []);
  const quizArr = useAppSelector((state) => state?.functioning?.quizes);
  return (
    <>
      <main className="display-flex ">
        <img
          src={
            "https://drive.google.com/uc?export=view&id=1C5fSMxIVWhBtfrpRFJAixsejOCRdqBKy"
          }
          alt="Beautiful Women"
          className="images-container padding-2"
        />
        <section className="flex-center width-100 main-section ">
          <div className="section-div border-r-3 padding-2 flex-column-center-spaced-even">
            <h1 className="text-center">
              Piston <span className="text-accent">Quiz</span>
            </h1>
            <p className="text-p">
              Hey everyone If Cars and Bikes are what excites you and you want
              to understand how marketing engineering designing and colors and
              shapes makes the automobile your beloved automobile . Then this is
              the place for it to learn all things in fun way.{" "}
            </p>
            <a href="#question" className="btn  text-2 text-black " >
              let's start Quiz{" "}
            </a>
          </div>
        </section>
      </main>
      <div className="divider-2"></div>
      <h1 className="text-center text-accent ">Categories</h1>
      <section
        className=" flex-center-space-even padding-2 flex-wrap gap "
        id="categories-tiles"
      >
        {categories.map(
          (data: { title: string; description: string; image: string }) => (
            <Link to={`/${data.title.split(" ").join("")}`} key={data.title}>
              <CategoriesCard
                title={data.title}
                description={data.description}
                image={data.image}
              />
            </Link>
          )
        )}
      </section>
      <div className="divider-2"></div>
      <h1 className="text-center" id="questions">
        Trending <span className="text-accent" id="question">Quiz</span>
      </h1>
      <section
        className=" flex-center-space-even padding-2 flex-wrap gap"
        id="question-tiles"
      >
        {quizArr.map((quiz: any,i:number) => (
          <Link to={`/${"HistoryOFAutomobiles"}/${i}`} key={quiz.title}>
          <QuestionCard
            description={quiz.description}
            image={quiz.image}
            title={quiz.title}
          /></Link>
        ))}
      </section> 
    </>
  );
};

export default LandingPage;

