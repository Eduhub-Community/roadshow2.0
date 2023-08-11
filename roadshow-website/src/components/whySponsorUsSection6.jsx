import "./index.css";
import eduhubGroup from "../assets/jpg/group .jpg"


export const WhySponsorSection = () => {


    return (
        <div>

            <br />
            <br />
            <br />

            <div className=" flex justify-center lg:my-12">
                <h1 className=" font-sora text-4xl font-black text-[#0249ac]
                lg:text-6xl">WHY<br /> SPONSOR  <span className="text-white bg-[#0249ac] px-1 py-1">US?</span></h1>
            </div>

            <br />
            <br />


            {/* THE IMAGE OF THE WHY SPONSOR US SECTION GOES HERE */}
            <div className="sm:flex sm:justify-center sm:items-center sm:rotate-3">
                <div className="flex items-center justify-center sm:w-4/5 
            sm:px-6 sm:py-6 sm:bg-[#c9c9c9] ">
                    <img className="w-4/5 sm:w-auto retro-shadow retro-shadow2Opp " src={eduhubGroup} alt="" />
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className=" w-60 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-6 pt-1 retro-shadow2 absolute right-0 belowNavbarPopup retro-shadow2Opp
            lg:text-5xl lg:w-96 lg:h-20 lg:mt-4">
                ABOUT US
            </div>

            <br />
            <br />
            <br />
            <p className="font-jost font-ubuntu py-8 px-8 leading-6 sm:text-lg sm:mx-8 lg:my-8 lg:mt-12 lg:mx-12">It’s a community for learners by learners. The vision of this community is to build an environment where people can learn, implement and grow together. It provides people the opportunity to work with peers, showcase their talent and enhance their skills by working in-team. We promote Open source, Web3, Web dev culture through our community. We are the frontliner in the field of Open source and Web3.0.</p>


        </div>
    );
}