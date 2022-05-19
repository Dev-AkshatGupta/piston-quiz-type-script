import  "./landing-page.css";
import {Link} from "react-router-dom";
const LandingPage = () => {
  return (
    <>
     <main className="display-flex ">
        <img src={"https://drive.google.com/uc?export=view&id=1C5fSMxIVWhBtfrpRFJAixsejOCRdqBKy"} alt="Beautiful Women" className="images-container padding-2"/>
        <section className="flex-center width-100 main-section ">
            <div className="section-div border-r-3 padding-2 flex-column-center-spaced-even">
                <h1 className="text-center">Piston <span className="text-accent">Quiz</span></h1>
                <p className="text-p">Hey everyone If Cars and Bikes are what excites you and you want to understand how
                    marketing engineering designing and colors  and shapes makes the automobile your beloved automobile . Then this is the place for it
                    to learn all things in fun way. </p>
                <Link to="/" className="btn  text-2 text-black ">
                    let's start Quiz </Link>
            </div>
        </section>
    </main>
    <div className="divider-2"></div>
    <h1 className="text-center text-accent ">Categories</h1>
     <section className=" flex-center-space-even padding-2 flex-wrap gap " id="categories-tiles">

        <a href="#question-tiles">

            <div className="width-30 border-r-3 card-shadow  flex-column-center-spaced-even bg-c-black padding-2">

                <div className="card-categories-image">
                    <img src="./assets/mc-queen.png" alt="Mc-queen" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <div>
                        <h2 className="text-center text-white">
                            Cartoons
                        </h2>
                        <p className="sub-text text-center">Quiz on car cartoons</p>
                    </div>
                </div>

            </div>
        </a>
        <a href="#question-tiles">
            <div className="width-30 border-r-3 card-shadow  flex-column-center-spaced-even bg-c-red padding-2">
                <div className="card-categories-image ">
                    <img src="./assets/bike.png" alt="Bike" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <div>
                        <h2 className="text-center text-white">
                            Bike
                        </h2>
                        <p className="sub-text text-center">What you know about bikes?</p>
                    </div>
                </div>

            </div>
        </a>
        <a href="#question-tiles">
            <div className="width-30 border-r-3 card-shadow  flex-column-center-spaced-even bg-c-green padding-2">
                <div className="card-categories-image">
                    <img src="./assets/honda-logo.png" alt="Engine" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <div>
                        <h2 className="text-center text-white">
                            Automobile Brands
                        </h2>
                        <p className="sub-text text-center">What you know about automobile brands?</p>
                    </div>
                </div>
            </div>
        </a>


        <a href="#question-tiles">
            <div className="width-30 border-r-3 card-shadow  flex-column-center-spaced-even bg-c-accent padding-2">
                <div className="card-categories-image">
                    <img src="./assets/piston-engine.png" alt="Engine" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <div>
                        <h2 className="text-center text-white">
                            Engine
                        </h2>
                        <p className="sub-text text-center">What you know about engines?</p>
                    </div>
                </div>
            </div>
        </a>


        {/* </div> */}
    </section>
    <div className="divider-2"></div>
    <h1 className="text-center">Trending <span className="text-accent">Quiz</span></h1>
    <section className=" flex-center-space-even padding-2 flex-wrap gap" id="question-tiles">

        <a href="./pages/rules.html">

            <div className="card-vertical border-r-3 card-shadow padding-2">

                <div className="card-quiz-image">
                    <img src="./assets/godzilla.jpg" alt="A GTR" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <h3 className="text-center">Why <strong className="text-accent">GODZILLA</strong> runs on road ? </h3>
                </div>

            </div>
        </a>
        <a href="./pages/rules.html">
            <div className="card-vertical border-r-3 card-shadow padding-2">
                <div className="card-quiz-image">
                    <img src="./assets/yezdi.jpg" alt="A GTR" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <h3 className="text-center">Do you know <strong className="text-accent">YEZDI</strong> ? </h3>
                </div>
            </div>
        </a>
        <a href="./pages/rules.html">
            <div className="card-vertical border-r-3 card-shadow padding-2">
                <div className="card-quiz-image">
                    <img src="./assets/scooter.jpg" alt="A GTR" className="border-r-3"/>
                </div>
                <div className="card-vertical-text">
                    <h3 className="text-center">Indian<strong className="text-accent"> Two wheelers </strong>legacy ? </h3>
                </div>
            </div>
        </a>
    </section>  
    {/*  second section for the trending quiz */}
    
 
    </>
  )
}

export default LandingPage


// https://drive.google.com/uc?export=view&id=1C5fSMxIVWhBtfrpRFJAixsejOCRdqBKy

// https://drive.google.com/file/d/1C5fSMxIVWhBtfrpRFJAixsejOCRdqBKy/view?usp=sharing