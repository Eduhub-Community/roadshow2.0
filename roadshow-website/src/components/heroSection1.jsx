import "./index.css";
import hawamahalReduced from "../assets/jpg/hawaMahal 1.jpg"
import rajPathReduced from "../assets/jpg/rajPathReduced.jpg"
import { useEffect } from "react";
import right from "../assets/png/right.png"
import left from "../assets/png/left.png"
import hawamahalNotReduced from "../assets/jpg/hawamahaNotReducedl.jpg"
import rajPathNotReduced from "../assets/jpg/rajPath.jpg"
import victoriaMemorial from "../assets/jpg/victorialMemorial1.jpg"
import victoriaMemorialSmall from "../assets/jpg/victorialMemorial1Small.jpg"
import pune from "../assets/jpg/pune1.jpg"
import puneSmall from "../assets/jpg/pune1Small.jpg"
import { gsap } from "gsap";






export const HeroSection1 = () => {


    let counter = 0;
    let slides;



    const carosoul = (slides) => {


        slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        })
    }


    // TO MAKE THE IMAGE MOVE LEFT
    const forNext = () => {
        // console.log(counter);
        // console.log(slides);

        if (counter == 3) {
            counter = 0;
            slideImage();

        } else {

            counter++;
            slideImage();
        }


    }

    // TO MAKE THE IMAGES MOVE RIGHT
    const forPrev = () => {
        if (counter == 0) {
            counter = 3;
            slideImage();
        } else {
            counter--;
            slideImage();
        }
    }


    // TO MAKE THE IMAGES MOVE AUTOMATICALLY
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function Tutor() {
        
        for (let i = 1; i < 20; i--) {
            await sleep(10000);
            forNext();
        }
    }
    Tutor()



    // THIS FUNCTION IS USED TO ACTUALLY MOVE THE IMAGES.
    const slideImage = () => {

        slides.forEach((slide) => {

            slide.style.transform = `translateX(-${counter * 100}%)`
        })
    }

    const windowHeight = window.innerHeight;


    useEffect(() => {

        const anime = gsap.timeline();


        // THE HERO SECTION BOLD WRITING ANIMATIONN

        anime.fromTo("#HeroSectionWriting" , {
            
            duration: 1,
            y:`${windowHeight}`,
            opacity:0,
        },{
            opacity:1,
            delay: 3.7,
            ease:"back",
            y:0,
        })
        


        slides = document.querySelectorAll(".slides");
        // slides = Array.from(slidesNodeList);
        // slides = slides.concat(slides,slides);
        // console.log(slides);
        carosoul(slides);

    })






    return (
        <div id="HeroSectionId" className="heroSection relative overflow-hidden sm:h-5/">


            {/* THE LEFT BUTTON */}
            <div className="absolute left-0 somewhereBetween leftSlider flex justify-start items-center" onClick={forPrev}>
                <img className=" w-4 h-4 m-4" src={left} alt="" />
            </div>

            {/* THE RIGHT BUTTON */}
            <div className="absolute right-0 somewhereBetween leftSlider flex justify-end items-center" onClick={forNext}>
                <img className=" w-4 h-4 m-4" src={right} alt="" />
            </div>




            {/* THE IMAGES THAT ARE TO BE SHOWN */}
            <img className="slides image1 absolute object-cover " src={window.innerWidth > 450 ? hawamahalNotReduced : hawamahalReduced} alt="hawamahalImage" />

            <img className="slides image2 absolute object-cover object-center " src={window.innerWidth > 450 ? rajPathNotReduced : rajPathReduced} alt="hawamahalImage" />


            <img className="slides image1 absolute object-cover " src={window.innerWidth > 450 ? pune : puneSmall} alt="hawamahalImage" />


            <img className="image2 slides absolute object-cover object-center" src={window.innerWidth > 450 ? victoriaMemorial : victoriaMemorialSmall} alt="hawamahalImage" />






            <div id="HeroSectionWriting" className=" absolute bottom-12 left-12 font-sora sm:bottom-32 sm:left-10">


                <h1 className=" font-black text-white text-4xl 
                sm:text-7xl
                 lg:text-8xl 
                 2xl:text-9xl"><span >EDUHUB</span> <br /> COMMUNITY</h1>
                
                <p className=" font-black text-white text-sm sm:text-xl lg:text-3xl   lg:ml-2
                2xl:text-5xl">Unleash The Power Of BLOCKCHAIN &  OPENSOURCE </p>

                
            </div>
               


        </div>
    );
}