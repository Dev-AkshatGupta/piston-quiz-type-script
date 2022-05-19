import React from 'react'

const QuestionCard = ({description,image,title}:{description:string,image:string,title:string}) => {
  return (
    <div className="card-vertical border-r-3 card-shadow padding-2">
            <div className="card-quiz-image">
              <img
                src={image}
                alt={title}
                className="border-r-3"
              />
            </div>
            <div className="card-vertical-text">
              <h3 className="text-center">
               {title}
              </h3>
            </div>
          </div>
  )
}

export default QuestionCard
