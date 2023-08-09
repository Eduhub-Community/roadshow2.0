import "./index.css";
import eduhubGroup from "../assets/jpg/group .jpg"


export const WhySponsorSection = () => {


    return(
        <div>

            <br />
            <br />
            <br />

            <div className=" flex justify-center">
                <h1 className=" font-sora text-4xl font-black text-[#0249ac]">WHY<br /> SPONSOR  <span className="text-white bg-[#0249ac] px-1 py-1">US?</span></h1>
            </div>

            <br />
            <br />


            {/* THE IMAGE OF THE WHY SPONSOR US SECTION GOES HERE */}
            <div className="flex flex-col items-center">
                <img className="w-4/5 retro-shadow" src={eduhubGroup} alt="" />
            </div>

            <br />
            <br />
            <br />

            <div className=" w-60 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-6 pt-1 retro-shadow2 absolute right-0 belowNavbarPopup">
                ABOUT US
            </div>

            <br />
            <br />
            <br />
            <p className="font-jost py-8 px-8 leading-6">It’s a community for learners by learners. The vision of this community is to build an environment where people can learn, implement and grow together. It provides people the opportunity to work with peers, showcase their talent and enhance their skills by working in-team. We promote Open source, Web3, Web dev culture through our community. We are the frontliner in the field of Open source and Web3.0.</p>

            
        </div>
    );
}