import "./index.css";
// import intel from "../assets/svg/intel.svg"

export const SponsorsAndCollegeListed = () => {



    return(
        <div id="Section4" className="lg:mb-8">
            <br />

            {/* SPONSORS SECTION */}
            <div className=" w-60 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-6 pt-1  absolute right-0  retro-shadow2Opp
            lg:text-5xl lg:w-[24rem] lg:h-20">
                SPONSORS
            </div>

            {/* <div className="breaks"></div> */}
            <br className=" bg-red-600 breaks" />
            <br className=" bg-red-600 breaks" />
            <br className=" bg-red-600 breaks" />
            <br className=" bg-red-600 breaks" />
            <br className=" bg-red-600 breaks" />
            <div className="flex flex-col justify-center items-center 
            lg:flex-row lg:justify-evenly
            xl:py-20">
                {/* <img className="w-40" src={intel} alt="" /> */}
                {/* <img className="w-40" src={intel} alt="" /> */}
                {/* <img className="w-40" src={intel} alt="" /> */}
                <p className=" text-3xl font-sora font-black bg-white flex justify-center items-center pt-1 px-2
                xl:text-5xl">COMMING SOON</p>
            </div>
        </div>
    );
}