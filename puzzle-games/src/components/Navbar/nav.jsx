import React from "react";
import
{
    Routes,
    Route
} from "react-router-dom";
import Home from "../Homepage/Home";
import Hanoi from "../toh/Hanoi";
import DragPuzzle from "../Sliding-Puzzle/SlidingPuzzle";
import "./nav.css";

function NavBar()
{
    return(
        <div className="nav-page">
            <nav className="navbar fixed-top navbar-dark" style={{background: "linear-gradient(to right, #17191c, #29323c, #030d19)" }} >
                <div className="container-fluid">
                    <a href="/" title="Click here to go back to the homepage"  className="navbar-brand text-white">
                        <i className="fa-brands fa-react"/>
                        React Arcade Games
                    </a>
                    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/hanoi"  className="nav-link" >Towers Of Hanoi</a>
                            </li>
                            <li className="nav-item">
                                <a href="/slidingPuzzle" className="nav-link">Sliding Puzzle</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hanoi" element={<Hanoi/>}/>
                <Route path="/slidingPuzzle" element={<DragPuzzle/>}/>
            </Routes>


        </div>

    )

}
export default NavBar;