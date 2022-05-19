import React from "react";

type Category={
  description:string,
  image:string,
  title:string
}
const CategoriesCard = ({title,description,image}:Category) => {
  return (
    <div className="width-30 border-r-3 card-shadow  flex-column-center-spaced-even bg-c-black padding-2">
      <div className="card-categories-image">
        <img
          src={`${image}`}
          alt={`${title}`}
          className="border-r-3"
        />
      </div>
      <div className="card-vertical-text">
        <div>
          <h2 className="text-center text-white">{`${title}`}</h2>
          <p className="sub-text text-center">{`${description}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
