import QuestionCard from "Components/QuestionCard/QuestionCard";
import RulesPage from "Pages/RulesPage/RulesPage";
import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { getACategoryQuizes } from "Redux/Reducers/FunctioningSlice";
type CategoriesParams = {
  category: string;
};
export const CategoryContainer = () => {
  const { category } = useParams<CategoriesParams>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getACategoryQuizes(category));
  }, []);
  const quizArr = useAppSelector((state) => state?.functioning?.quizes);
  return (
    <div className="flex-center gap-6 height-80vh">
      {quizArr.map(
        (
          {
            description,
            image,
            title,
          }: {
            description: string;
            image: string;
            title: string;
          },
          i: number
        ) => (
          <Link to={`/${category}/${i}`} key={title}>
            <QuestionCard
              description={description}
              image={image}
              title={title}
            />
          </Link>
        )
      )}
    </div>
  );
};
const CategoryPage = () => {
  const [display,setDisplay]=useState<boolean>(false);
  return (
    <div>
   {!display && <RulesPage setDisplay={setDisplay}/>}
    {display && <CategoryContainer/>}
    </div>
  );
};

export default CategoryPage;
