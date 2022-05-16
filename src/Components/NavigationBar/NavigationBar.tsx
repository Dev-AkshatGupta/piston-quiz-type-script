import "./NavigationBar.css";
import {Link} from "react-router-dom";

export const NavigationBar=()=>{
    return (
        <nav className="component-navigation flex-end-space-betw">

        <div className="navigation-pri-part">
            <div className="logo-container"><img src={require("./../../Assets/Images/50px-50px.png")} alt="Beautiful piston"/>
            </div>
            <a >
                <h1 className="text-shadow"> PISTON <span className="text-accent">Quiz</span></h1>
            </a>
        </div>
        <div className="navigation-end-part">

            <a href="https://github.com/Dev-AkshatGupta" className="nav-btn-icon text-black" target="blank">
                <i className='bx bxl-github'></i>
            </a>
            <a href="https://twitter.com/Akshat86604233" className="nav-btn-icon text-black" target="blank">
                <i className='bx bxl-twitter'></i>
            </a>
            <a href="https://www.linkedin.com/in/akshat-gupta-257914157/" className="nav-btn-icon text-black"
                target="blank">
                <i className='bx bxl-linkedin'></i>
            </a>
        </div>

    </nav>
    );
}
