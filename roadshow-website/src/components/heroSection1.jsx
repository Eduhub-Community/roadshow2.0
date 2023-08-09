import "./index.css";
import hawamahal from "../assets/jpg/hawaMahal 1.jpg"

export const HeroSection1 = () => {



    return (
        <div className="heroSection relative">
            <img  src={hawamahal} alt="hawamahalImage" />


            <div className=" absolute bottom-12 left-8 font-sora">


                <h1 className=" font-black text-white text-4xl">EDUHUB COMMUNITY</h1>

                <p className=" font-black text-white text-lg">ROADSHOW</p>

            </div>
        </div>
    );
}