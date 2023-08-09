import "./index.css";
import intel from "../assets/svg/intel.svg"

export const SponsorsAndCollegeListed = () => {



    return(
        <div>
            <br />

            {/* SPONSORS SECTION */}
            <div className=" w-60 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-6 pt-1 retro-shadow2 absolute right-0 belowNavbarPopup">
                SPONSORS
            </div>


            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex flex-col justify-center items-center">
                <img className="w-40" src={intel} alt="" />
                <img className="w-40" src={intel} alt="" />
                <img className="w-40" src={intel} alt="" />
            </div>
        </div>
    );
}