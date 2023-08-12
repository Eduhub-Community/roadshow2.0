import "./index.css";
import insta from "../assets/png/instagram.png";
import linkedIn from "../assets/png/linkedin-logo.png";
import gitHub from "../assets/png/github.png";
import linktree from '../assets/svg/linktree-logo-icon.svg'



export const ContactUs = () => {

    const instagram = () => {

        window.open("https://www.instagram.com/eduhub_community/","_blank")
    }


    const linkedin = () => {

        window.open("https://www.linkedin.com/company/eduhub-community/mycompany/","_blank")
    }


    const github = () => {

        window.open("https://github.com/Eduhub-Community","_blank")
    }


    const linkTree = () => {

        window.open("https://linktr.ee/EduhubCommunity","_blank")
    }



    return(
        <div id="ContactUs" className="flex flex-col justify-center items-center">
            <br />

            <div className=" text-2xl font-sora font-black text-[#0249ac] bg-white p-2">CONTACT US</div>

            <br />


            <div className="flex justify-center items-center">

                <img className="w-[2rem] h-[2rem] mx-2 mb-4 cursor-pointer" src={insta} alt="" onClick={instagram} />

                <img className="w-[2rem] h-[2rem] mx-2 mb-4 cursor-pointer" src={linkedIn} alt=""  onClick={linkedin}/>

                <img className="w-[2rem] h-[2rem] mx-2 mb-4 cursor-pointer" src={gitHub} alt=""  onClick={github}/>

                <img className="w-[2rem] h-[2rem] mx-2 mb-4 cursor-pointer" src={linktree} alt=""  onClick={linkTree}/>
                
            </div>
        </div>
    );
}