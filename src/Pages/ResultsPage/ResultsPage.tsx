import React ,{useEffect} from 'react'
import "./ResultsPage.css";
import {useAppSelector,useAppDispatch} from "./../../Redux/hooks";
import {calculateResult} from "./../../Redux/Reducers/FunctioningSlice";

const ResultsPage = () => {
    const resultArr:any=useAppSelector(state=>state?.functioning?.resultStore);
    const score:number=useAppSelector(state=>state.functioning.result);
    const dispatch=useAppDispatch();
    useEffect(()=>{
    dispatch(calculateResult());
    },[]);
  return (
 <>
  <main className="display-flex ">

        <section className="flex-center width-100 main-section ">
            <div className="section-div border-r-3 padding-2  flex-column-center-spaced-even">
                <h1 className="text-center">Quiz <span className="text-accent">Results Time </span></h1>
                <h1 className="text-accent">{score}<span className="text-black"> / 100</span></h1>
               {resultArr.map((item:any,i:number)=><div >
                    <p className="text-question">{i+1}){item.question}</p>
                    <p className="text-results bg-c-green text-white">{item.answer}</p>
                    <p className={`text-results text-white ${item.answer==item.optionSelected?"bg-c-green":"bg-c-red"}`}>{item.optionSelected?item.optionSelected:"Nothing selected"}</p>
                </div>) }
             
            </div>
        </section>
        <img src="https://drive.google.com/uc?export=view&id=1loPHA8m3TiORvR2mjihyLTxnvSR0lXtt" alt="Beautiful Women" className="images-container padding-2"/>
    </main>
    <div className="divider-2"></div>
 </>
  );
}
export default ResultsPage
