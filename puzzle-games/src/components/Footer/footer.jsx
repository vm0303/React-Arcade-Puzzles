import React from "react";
import "../Footer/footer.css";
const Footer = () => (


    <footer>

            <p className="footer-text"
                title="I put a copyright here so you would know where I got my inspiration from while doing the Towers of Hanoi program"
            >
                Towers of Hanoi: &copy; 2023 from &nbsp;
                <a
                    style={{color: "white"}}
                    target="_blank"
                    href="https://github.com/JakubKus/tower-of-hanoi"
                    rel="noreferrer">JakubKus from GitHub
                </a>
            </p>

            <p
                className="footer-text"
                title="I put a copyright here so you would know where I got my inspiration from while doing the Sliding Puzzle program"
            >
                Sliding Puzzle: &copy; 2022 from &nbsp;
                <a
                    style={{color: "white"}}
                    target="_blank"
                    href="https://www.youtube.com/watch?v=_wdbhVvMOCs&t=0s&ab_channel=BarelyCodingwithDanielBark"
                    rel="noreferrer">
                    Barely Coding with Daniel Bark
                </a>
            </p>
            <p className="footer-text">
                Edited and re-created by Vishal Madhav
            </p>


    </footer>

);

export default Footer;