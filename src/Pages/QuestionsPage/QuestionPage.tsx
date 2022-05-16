
import "./QuestionPage.css";
const QuestionPage = () => {
  return (
    <>
      <main className=" flex-column-center-spaced-even">
        <h1>Engine <span className="text-accent">Quiz</span></h1>



        <section className=" width-150 section-div padding-2  flex-column-center-spaced-even ">
            <div>
                <p className="text-question">1) Each right answer scores 10 Points</p>
                <div>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>

                </div>
            </div>
            <div className="divider-2"></div>
            <div>
                <p className="text-question">2) Each right answer scores 10 Points</p>
                <div>
                    <p className="text-ques-options bg-c-green">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options bg-c-red">Each right answer scores 10 Points</p>

                </div>
            </div>
            <div className="divider-2"></div>
            <div>
                <p className="text-question">3) Each right answer scores 10 Points</p>
                <div>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>
                    <p className="text-ques-options">Each right answer scores 10 Points</p>

                </div>
            </div>
            <div className="divider-2"></div>


        </section>
        <a href="./results.html" className="btn btn-outline-pri text-2">
            Check Results</a>

    </main> 
    </>
  )
}

export default QuestionPage
