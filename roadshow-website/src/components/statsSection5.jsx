import "./index.css";
import knowlegeHat from "../assets/png/knowlegeHat.png";
import registration from "../assets/png/registration.png";
import members from "../assets/png/group.png";


export const StatsSection4 = () => {



    return (
        <div id="Section5" className="lg:my-8 ">

            <br />
            <br />

            <div className=" w-48 bg-[#0249ac] h-16 text-white font-sora font-black text-3xl flex items-center justify-end pr-6 pt-1   belowNavbarPopup retro-shadow2Opp
            lg:text-5xl lg:w-72 lg:h-20">
                STATS
            </div>

            <br />
            <br />
            
            <div className="flex flex-col items-center lg:flex-row lg:justify-evenly">


                {/* THE THREE ITEMS */}
                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 lg:w-40 lg:h-40 bg-white rounded-full flex justify-center items-center
                    xl:w-60 xl:h-60">
                        <img className="w-40 h-40 lg:w-24 lg:h-24
                        xl:w-36 xl:h-36" src={knowlegeHat} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">60+ <br /> COLLEGES</p>
                </div>


                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 lg:w-40 lg:h-40 bg-white rounded-full flex justify-center items-center
                    xl:w-60 xl:h-60">
                        <img className="w-40 h-40 lg:w-24 lg:h-24
                        xl:w-36 xl:h-36" src={registration} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">7K+ <br /> REGISTRATIONS</p>
                </div>

                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 lg:w-40 lg:h-40 bg-white rounded-full flex justify-center items-center
                    xl:w-60 xl:h-60">
                        <img className="w-36 h-36 lg:w-20 lg:h-20
                        xl:w-36 xl:h-36" src={members} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">10K+ <br /> MEMBERS</p>
                </div>

            </div>
        </div>
    );
}