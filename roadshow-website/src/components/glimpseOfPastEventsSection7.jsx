import "./index.css";
import event1Img from "../assets/jpg/eventAuditoriumGettingPrize.jpeg";
import event2Img from "../assets/jpg/eventAuditorium.jpeg";
import event3Img from "../assets/jpg/aceHackRegistrationLine.jpeg";
import event4Img from "../assets/jpg/aceHackImageBillBoard.jpeg";


export const GlimpseOfPastEvents = () => {



    return (
        <div className=" bg-[#2b2758] relative">
            <div className=" relative">
                <br />
                <br />
                <br />

                <div>
                    <h1 className=" text-[#c9c9c9] font-sora text-4xl font-black px-8
                    lg:text-6xl">GLIMPSE OF <br />PAST <span className="text-white underline underline-offset-8 ">EVENTS</span></h1>
                </div>

                <br />
                <br />
                <br />

                {/* IMAGE 1 AND 2 OF THE EVENTS SECTION */}
                <div className="sm:flex sm:flex-col sm:pl-8">
                    <div className=" bg-white w-4/5 flex flex-col justify-center items-center px-4 py-4 -rotate-6 relative left-12">
                        <img className=" " src={event1Img} alt="" />
                    </div>

                    <div className=" bg-white w-4/5 flex flex-col justify-center items-center px-4 py-4 rotate-6 relative  left-6 bottom-4">
                        <img className=" " src={event2Img} alt="" />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                {/* TECH MEET HEADING SECTION */}
                <div className=" w-60 bg-white h-16 text-[#0249ac] font-sora font-black text-3xl flex items-center  pl-6 pt-1 retro-shadow3 absolute right-0 bottom-1 lg:text-4xl lg:w-80  ">
                    TECH MEETS
                </div>
            </div>





            <div className="relative sm:mt-8 lg:mt-20">

                <br />
                <br />
                <br />


                {/* IMAGE 3 AND 4 OF THE EVENTS SECTION */}
                <div className="sm:flex sm:flex-col sm:pl-8">
                    <div className=" bg-white w-4/5 flex flex-col justify-center items-center px-4 py-4 -rotate-12 relative left-12">
                        <img className=" " src={event3Img} alt="" />
                    </div>

                    <div className=" bg-white w-4/5 flex flex-col justify-center items-center px-4 py-4 rotate-6 relative  left-6 bottom-4">
                        <img className=" " src={event4Img} alt="" />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />

                {/* TECH HACKATHON SECTION */}
                <div className=" w-72 bg-white h-16 text-[#0249ac] font-sora font-black  text-3xl flex items-center  pl-6 pt-1 retro-shadow3 absolute left-0 bottom-1">
                    HACKATHONS
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <br />
                <br />
                
                <p className=" text-white font-sora font-black text-2xl px-6 
                lg:text-3xl lg:px-10">If you are interested you can sponsor us by clicking the button below</p>


                <br />
                <br />
                <div className=" bg-white w-40 h-10 lg:w-60 lg:h-16 flex justify-center items-center font-black font-sora 
                text-[#0249ac] retro-shadow4
                lg:text-2xl">SPONSOR US</div>
                <br />
                <br />

            </div>

        </div>
    );
}