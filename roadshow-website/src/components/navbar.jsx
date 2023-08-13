import "./index.css";
import eduWhiteLogo from "../assets/svg/eduhubWritterWhiteLogo.svg";
// import eduBlueLogo from "../assets/svg/eduhubWrittenBlueLogo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";

export const Navbar = () => {

    var counter = 0;

    gsap.registerPlugin(ScrollTrigger);
    // let anime = gsap.timeline();

    
    
    useEffect(() => {

        // let anime = gsap.timeline();


        gsap.to("#NavbarMain" , {
            scrollTrigger: {
                trigger: "#Section2",
                markers: true,
                toggleActions: 'play reverse play reverse',
                endTrigger: "#Section8",
                start: "top 10%",
                end: "top 15%"
            },
            opacity: 1,
            
            
        });

       
        


        // .to("#NavbarMain" , {
        //     scrollTrigger: {
        //         trigger: "#Section8",
        //         markers: true,
        //         toggleActions: 'play none none reverse',
        //         start: "top 10%",
        //         end:"10% "
        //     },
        //     opacity: 0,
        //     duration: 1,
        // });
    })

    

    
    



    // HAMBURGER POPUP ANIMATION PART
    const hamburgerMenuPopUp = () => {
        counter++;
        console.log(counter);

        const bar1 = document.getElementById("ham1");
        const bar2 = document.getElementById("ham2");
        const bar3 = document.getElementById("ham3");



        if (counter % 2 == 0) {


            bar1.classList.remove("ham1");
            bar2.classList.remove("ham2");
            bar3.classList.remove("ham3");

            gsap.to("#navbarHamBurgerPopUp", {
                x: 0,
                duration: 1.2,
                ease: "power4",
            });
        }
        else if (counter % 2 != 0) {


            bar1.classList.add("ham1");
            bar2.classList.add("ham2");
            bar3.classList.add("ham3");


            // bar1.style.rotate = '45deg';

            gsap.to("#navbarHamBurgerPopUp", {
                x: -320,
                duration: 1.2,
                ease: "power4",
            })
        }

    }




    return (
        <div id="NavbarMain" className="h-14 w-5/5 bg-[#003379] flex justify-center items-center fixed top-0 navbarLevel 
    ">

            {/* THE EDUHUB LOGO */}
            <div >
                <img src={eduWhiteLogo} alt="eduhubCommunityMainLogo" />
            </div>


            {/* THE HAMBURGER MENU */}
            <div id="hamburgerMenu" className=" absolute w-10 h-10 bg-[##0249ac] rounded-full right-4 z-50 flex flex-col justify-center items-center cursor-pointer" onClick={hamburgerMenuPopUp}>

                <div id="ham1" className="w-8 h-1 bg-white absolute top-2 lines rounded-md"></div>
                <div id="ham2" className="w-8 h-1 bg-white absolute lines rounded-md"></div>
                <div id="ham3" className="w-8 h-1 bg-white absolute bottom-2 lines rounded-md"></div>
            </div>

            {/* THE HAMBURGER MENU POP UP */}
            <div id="navbarHamBurgerPopUp" className=" flex justify-center items-center fixed bg-[#003379] w-80 min-h-screen hamburgerMenuPopup z-40">

                <ul>
                    {/* THE HAMBURGER ELEMENTS */}
                    <li className=" my-4 mr-4 text-xl font-bold text-white font-sora "><a href="https://lu.ma/college-roadshow" target="_blank rel='noreferrer'" >Register</a></li>
                    <li className=" my-4 mr-4 text-xl font-bold text-white font-sora "><a href="#Section6">About Us</a></li>
                    <li className=" my-4 mr-4 text-xl font-bold text-white font-sora "><a href="#ContactUs">Contact Us</a></li>
                    <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1ElpxQDLP3gl73DfS_SjEpHS83_HLnwYf/view"   >
                        <li className=" my-4 mr-4 text-xl font-extrabold font-sora relative bg-white w-36 h-12 flex justify-center items-center top-4 text-[#0249ac] retro-shadow">Sponsor Us</li></a>
                </ul>
            </div>
        </div>
    );
}

