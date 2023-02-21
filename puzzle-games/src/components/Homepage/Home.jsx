import React from "react";
import "./home.css";
import aGif from "../../assets/Arcade.gif";


const Home = () =>
{
    return(

        <>
            <h1 className="title">Welcome to the React Arcade!</h1>


            <img
                src={aGif}
                alt="Arcade gif"
                title="A picture of a boy playing in an arcade.
           Gif by SleepySeaSlug at Deviant Art"/>
            <div className="home-text">
                <br/>
                <div className="sub-text">What is the React Arcade?</div>
                <div className="description">
                    <p>The React Arcade is a website that holds 2 iconic strategic puzzles that are typically seen in the Computer Science field.</p>
                    <div className="sub-text">Why did you create this website?</div>
                    <p>During my time in college, I have seen some of these strategical puzzles being used as examples in order to teach us about problem-solving.</p>
                    <p>  So, I thought that it would be cool to make these puzzles interactive so that people can test their problem-solving skills.</p>
                    <div className="sub-text">How to play these puzzle games?</div>
                    <p> Head to the Navbar on top of this page and click on the hamburger icon.</p>
                    <p> After the navbar expands, select one of the two puzzle games that you want to test your problem-solving skills with.</p>

                </div>
            </div>
            </>

    )
}




export default Home;
