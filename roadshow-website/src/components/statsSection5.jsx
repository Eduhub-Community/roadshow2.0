import "./index.css";
import knowlegeHat from "../assets/png/knowlegeHat.png";
import registration from "../assets/png/registration.png";
import members from "../assets/png/group.png";


export const StatsSection4 = () => {



    return (
        <div>

            <br />
            <br />

            <div className=" w-48 bg-[#0249ac] h-16 text-white font-sora font-black text-3xl flex items-center justify-end pr-6 pt-1 retro-shadow2  belowNavbarPopup retro-shadow2Opp">
                STATS
            </div>

            <br />
            <br />
            
            <div className="flex flex-col items-center">


                {/* THE THREE ITEMS */}
                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 bg-white rounded-full flex justify-center items-center">
                        <img className="w-40 h-40" src={knowlegeHat} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">60+ <br /> COLLEGES</p>
                </div>


                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 bg-white rounded-full flex justify-center items-center">
                        <img className="w-40 h-40" src={registration} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">7K+ <br /> REGISTRATIONS</p>
                </div>

                <div className="flex flex-col justify-center items-center my-12">
                    <div className="w-56 h-56 bg-white rounded-full flex justify-center items-center">
                        <img className="w-36 h-36" src={members} alt="" />
                    </div>
                    <p className="font-sora font-black font-[#3D3D3D] text-center pt-4 text-xl">10K+ <br /> MEMBERS</p>
                </div>

            </div>
        </div>
    );
}