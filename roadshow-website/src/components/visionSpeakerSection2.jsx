import "./index.css";
import speaker from "../assets/jpg/linuxTorwold.jpg"

export const VisionSpeakerSection2 = () => {



    return (
        <div >



            {/* THE VISION SECTION */}
            <div className=" w-48 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-14 pt-1 retro-shadow2 
            retro-shadow2Opp sm:mt-12 sm:mb-4 
            lg:text-5xl lg:w-72 lg:h-20">
                VISION
            </div>

            <p className=" px-8 py-8 font-ubuntu leading-6 sm:text-lg sm:leading-7 sm:mx-8 lg:text-xl lg:mx-12">It’s a community for learners by learners. The vision of this
                community is to build an environment where people can learn,
                implement and grow together. It provides people the opportunity
                to work with peers, showcase their talent and enhance their skills
                by working in-team. We promote Open source, Web3, Web dev
                culture through our community. We are the frontliner in the field
                of Open source and Web3.0.</p>




            {/* THE SPEAKER SECTION */}
            <div className=" w-56 bg-[#0249ac] h-16 text-white font-sora font-extrabold text-3xl flex items-center  pl-6 pt-1 retro-shadow2 absolute right-0 belowNavbarPopup retro-shadow2Opp
            lg:text-5xl lg:w-[20rem] lg:h-20">
                SPEAKER
            </div>


            <br />
            <br />
            <br />
            <br />
            <br />


            {/* SPEAKER 1 */}
            <div className="flex flex-col sm:flex-row px-8 items-center sm:my-12 lg:px-12">


                <br />
                <img className="w-80 lg:w-96" src={speaker} alt="Name of the speaker" />
                <br />
                <br />

                <div className="flex flex-col justify-center items-center sm:items-start">
                    <p className=" text-[#0249ac] font-black text-2xl font-sora bg-white px-3 py-1 flex items-center justify-center relative sm:right-0 sm:left-7 lg:text-4xl">LINUS TORWALD</p>

                    <p className=" py-4 font-ubuntu leading-6 sm:ml-8 lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus officiis, excepturi quod at, dolorum repudiandae unde repellat possimus a aliquid, ullam soluta voluptatum ipsam maiores accusantium nulla pariatur vel. Veritatis optio quaerat earum porro rem, accusantium delectus dolore placeat, est vitae exercitationem iusto nemo animi? Dolorum tenetur adipisci nihil.</p>
                </div>

            </div>
            <br />



            {/* SPEAKER 2 */}
            <div className="flex flex-col sm:flex-row-reverse px-8 items-center sm:my-12 lg:px-12">


                <br />
                <img className="w-80" src={speaker} alt="Name of the speaker" />
                <br />
                <br />

                <div className="flex flex-col justify-center items-center sm:items-end relative">
                    <p className=" text-[#0249ac] font-black text-2xl font-sora bg-white px-3 py-1 flex items-center justify-center relative 
                    lg:text-4xl sm:right-60 lg:right-[22.5rem]">LINUS TORWALD</p>

                    <p className=" py-4 font-jost font-ubuntu leading-6  sm:text-left sm:mr-11  lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam delectus officiis, excepturi quod at, dolorum repudiandae unde repellat possimus a aliquid, ullam soluta voluptatum ipsam maiores accusantium nulla pariatur vel. Veritatis optio quaerat earum porro rem, accusantium delectus dolore placeat, est vitae exercitationem iusto nemo animi? Dolorum tenetur adipisci nihil.</p>
                </div>

            </div>


        </div>
    );
}