import "./index.css";
import blueEduhubLogo from "../assets/svg/eduhubWhiteLogoBlue.svg";
import { useEffect } from "react";
import { gsap } from "gsap";





export const StartingAnimation = () => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    useEffect(() => {

        const anime = gsap.timeline();

        anime.to(".BlueBackground",{
            x:`${-windowWidth}`,
            duration:3,
            ease:"none",
        })
        .to(".WhiteBackground", {
            y:`${-windowHeight}`,
            duration:2,
            ease:"power3",
        })



    })


    return(
        <div id="StartingAimation" className=" absolute w-[100vw] h-[100vh]">
            <div className="BlueBackground"></div>
            <div className="WhiteBackground">
                <img className="EduhubBlueLogo" src={blueEduhubLogo} alt="" />
            </div>
        </div>
    );
} 