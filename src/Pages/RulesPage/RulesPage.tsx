
const RulesPage = ({setDisplay}:{setDisplay:any}) => {
  return (
     <main className="display-flex ">

        <section className="flex-center width-100 main-section ">
            <img src="https://drive.google.com/uc?export=view&id=11dXU7nlS03qN5mGQySTL8GjxNcZGeMGv" alt="Beautiful Women"
                className="images-container padding-2"/>
            <div className="section-div border-r-3 padding-2  flex-column-center-spaced-even">
                <h1 className="text-center">Rules and Regulations </h1>
                <ul className="car-icon-list">
                    <li className="text-p"><i className='bx bx-car'></i> Each right answer scores 10 Points</li>

                    <li className="text-p"><i className='bx bx-car'></i> Each MCQ has only one correct answer</li>

                    <li className="text-p"><i className='bx bx-car'></i>To win the quiz you need to score more than 70%</li>


                </ul>
                <a onClick={()=>{setDisplay((display:boolean)=>!display)}} className="btn  text-2 text-black border-r-3">
                    let's start Quiz </a>
            </div>
        </section>

    </main>
  )
}

export default RulesPage
