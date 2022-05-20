import QuestionCard from "Components/QuestionCard/QuestionCard";
import React, { useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { getACategoryQuizes } from "Redux/Reducers/FunctioningSlice";
type CategoriesParams = {
  category: string;
};
const CategoryPage = () => {
  const { category } = useParams<CategoriesParams>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getACategoryQuizes(category));
  }, []);
  const quizArr = useAppSelector((state) => state?.functioning?.quizes);
  return (
    <div>
      <div className="flex-center">
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
      <Outlet />
    </div>
  );
};

export default CategoryPage;
