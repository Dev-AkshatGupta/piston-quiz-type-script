import React from 'react'
import { useLocation } from 'react-router-dom'

const RulesPage = () => {
const location=useLocation();
    console.log()
  return (
     <main className="display-flex ">

        <section className="flex-center width-100 main-section ">
            <img src="../assets/undraw_accept_terms_re_lj38.svg" alt="Beautiful Women"
                className="images-container padding-2"/>
            <div className="section-div border-r-3 padding-2  flex-column-center-spaced-even">
                <h1 className="text-center">Rules and Regulations </h1>
                <ul className="car-icon-list">
                    <li className="text-p"><i className='bx bx-car'></i> Each right answer scores 10 Points</li>

                    <li className="text-p"><i className='bx bx-car'></i> Each MCQ has only one correct answer</li>

                    <li className="text-p"><i className='bx bx-car'></i>To win the quiz you need to score more than 70%</li>


                </ul>
                <a href="./question-pages.html" className="btn  text-2 text-black border-r-3">
                    let's start Quiz </a>
            </div>
        </section>

    </main>
  )
}

export default RulesPage
