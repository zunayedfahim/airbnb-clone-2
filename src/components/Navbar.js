import React from "react";
import { FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { DateRangePicker } from 'react-date-range';

const Navbar = () => {

    const [selectedSearch, setSelectedSearch] = React.useState('');
    const locationInput = React.useRef(null);
    const [selectedTab, setSelectedTab] = React.useState("Places");
    const [showProfileOptionModal, setShowProfileOptionModal] = React.useState(false);
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 50 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    const renderSearchModal = () => {
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
        return (
            selectedSearch==="Location" ? 
            <div className="absolute bg-white w-[38%] text-black left-[18.5%] rounded-3xl pt-8 pl-8 pb-10 mt-3">
                <h1 className="font-medium text-sm">GO ANYWHERE, ANYTIME</h1>
                <button className="font-medium text-lg flex justify-between items-center border border-gray-200 shadow-lg hover:shadow-xl text-purple-800 rounded-full py-4 px-8 w-[90%] mt-5">
                    <h1>I'm flexible</h1>
                    <video autoPlay playsInline preload="auto" crossOrigin="annonymous" className="w-8 h-8" poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg" >
                        <source src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality" type="video/mp4"/>
                    </video>
                </button>
            </div>
            :
            selectedSearch==="Check in" || selectedSearch==="Check out" ?
            <div className="absolute bg-white w-[63%] text-black left-[18.5%] rounded-3xl p-8 mt-3 flex items-center justify-center">
                <DateRangePicker
                    ranges={[selectionRange]}
                    // onChange={handleSelect}
                />
            </div> 
            :
            <div className="absolute bg-white w-[30%] text-black right-[18.5%] rounded-3xl p-8 mt-3">
                {/* Adults */}
                <div className="after:content-[''] after:bg-gray-200 after:h-[1px] after:w-full after:block after:my-3">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-medium">Adults</h1>
                            <p className="text-gray-500 text-sm">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center">
                            <button className="border border-gray-200 rounded-full h-10 w-10">-</button>
                            <h1 className="mx-2">0</h1>
                            <button className="border border-gray-200 rounded-full h-10 w-10">+</button>
                        </div>
                    </div>
                </div>
                {/* Children */}
                <div className="after:content-[''] after:bg-gray-200 after:h-[1px] after:w-full after:block after:my-3">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-medium">Children</h1>
                            <p className="text-gray-500 text-sm">Ages 2–12</p>
                        </div>
                        <div className="flex items-center">
                            <button className="border border-gray-200 rounded-full h-10 w-10">-</button>
                            <h1 className="mx-2">0</h1>
                            <button className="border border-gray-200 rounded-full h-10 w-10">+</button>
                        </div>
                    </div>
                </div>
                {/* Infants */}
                <div className="after:content-[''] after:bg-gray-200 after:h-[1px] after:w-full after:block after:my-3">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-medium">Infants</h1>
                            <p className="text-gray-500 text-sm">Under 2</p>
                        </div>
                        <div className="flex items-center">
                            <button className="border border-gray-200 rounded-full h-10 w-10">-</button>
                            <h1 className="mx-2">0</h1>
                            <button className="border border-gray-200 rounded-full h-10 w-10">+</button>
                        </div>
                    </div>
                </div>
                {/* Pets */}
                <div className="">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-medium">Pets</h1>
                            <p className="text-xs underline whitespace-nowrap">Bringing an assistance animal?</p>
                        </div>
                        <div className="flex items-center">
                            <button className="border border-gray-200 rounded-full h-10 w-10">-</button>
                            <h1 className="mx-2">0</h1>
                            <button className="border border-gray-200 rounded-full h-10 w-10">+</button>
                        </div>
                    </div>
                    <h1 className="text-sm text-gray-600 mt-5 font-light">If you're lucky enough to have more than 2 pets with you, be sure to let your host know.</h1>
                </div>
            </div>
        )
        
    }

    const renderProfileOptionModal = () => {
        return (
            <div className="w-[80%] bg-white rounded-lg absolute top-[130%] right-[12%] text-black">
                <p className="h-10 hover:bg-gray-100 py-2 pl-4 text-sm text-gray-800 font-medium mt-2">Sign up</p>
                <p className="h-10 hover:bg-gray-100 py-2 pl-4 text-sm text-gray-800">Login</p>
                <div className="w-full h-[1px] bg-gray-200 my-2"></div>
                <p className="h-10 hover:bg-gray-100 py-2 pl-4 text-sm text-gray-800">Host your home</p>
                <p className="h-10 hover:bg-gray-100 py-2 pl-4 text-sm text-gray-800">Host an experience</p>
                <p className="h-10 hover:bg-gray-100 py-2 pl-4 text-sm text-gray-800 mb-2">Help</p>
            </div>
        )
    }

    const renderNavbarTop = () => {
        return (
            <div className={`pl-20 pr-10 pt-5 flex justify-between items-center ${scrolled && "fixed top-0 left-0 right-0 bg-white pb-3 text-black border border-gray-100 shadow-md"}`}>
                {/* left */}
                {scrolled ? 
                    <img 
                        src={require('../assets/images/airbnb-pink.png')}
                        className="h-8"
                    />  
                    :
                    <img 
                        src={require('../assets/images/airbnb-white.png')}
                        className=""
                    />
                }
                
                {/* middle */}
                {!scrolled ? 
                    <div className="flex lg:ml-28">
                        <button className={`ml-8 font-light hover:text-gray-300 after:content-[''] after:block after:mx-auto after:bg-black hover:after:bg-white after:w-1 after:h-0.5 after:rounded ${selectedTab==="Places" && "after:bg-white after:w-6"} after:transition-all`} onClick={() => setSelectedTab("Places")}>Places to stay</button>
                        <button className={`ml-8 font-light hover:text-gray-300 after:content-[''] after:block after:mx-auto after:bg-black hover:after:bg-white after:w-1 after:h-0.5 after:rounded ${selectedTab==="Experiences" && "after:bg-white after:w-6"} after:transition-all`} onClick={() => setSelectedTab("Experiences")}>Experiences</button>
                        <button className={`ml-8 font-light hover:text-gray-300 after:content-[''] after:block after:mx-auto after:bg-black hover:after:bg-white after:w-1 after:h-0.5 after:rounded ${selectedTab==="" && "after:bg-white after:w-6"} after:transition-all`} onClick={() => setSelectedTab("Places")}>Online Experiences</button> 
                    </div>
                    :
                    renderNavbarBottom()
                }
                

                {/* right */}
                <div className="flex relative">
                    <button className={`text-sm ${scrolled ? "hover:bg-gray-100" : "hover:bg-neutral-800"} p-2 px-4 rounded-full`}>Become a Host</button>
                    <button className={`mr-3 ${scrolled ? "hover:bg-gray-100" : "hover:bg-neutral-800"} p-2 px-4 rounded-full`}><FiGlobe /></button>
                    <button className={`mr-8 flex items-center bg-white p-1.5 pl-3 text-gray-500 rounded-3xl border border-gray-300 shadow-lg`} onClick={() => setShowProfileOptionModal(!showProfileOptionModal)} onBlur={() => setShowProfileOptionModal(false)}>
                        <div className="mr-3"><GiHamburgerMenu /></div>
                        <div className="text-3xl"><FaUserCircle /></div>
                    </button> 
                    {showProfileOptionModal && renderProfileOptionModal()}
                </div>
            </div>
        )
    }

    const renderNavbarBottom = () => {
        return (
            <div className={` ${scrolled ? "w-[20vw] h-12 bg-white border border-gray-300 shadow-lg" : "w-[63vw] mt-5 h-16"} transition-all ${selectedTab!=="" && !scrolled ? "bg-gray-100" : "bg-white"} flex justify-between rounded-full mx-auto text-sm whitespace-nowrap relative`}>
                {scrolled && 
                    <div className="w-full flex items-center justify-between pl-5 pr-2 py-3">
                        <input type="text" className="bg-transparent focus:outline-none placeholder:text-black" placeholder="Start your search"/>
                        <button className="bg-custom-pink hover:bg-custom-hover-pink rounded-full h-8 w-8 flex items-center justify-center text-lg text-white"><BiSearch /></button>
                    </div>
                }
                {/* Location */}
                {!scrolled && 
                    <label for="location" className={`pl-8 pr-14 pt-3.5 ${selectedTab==="Places" ? "w-[30%]" : "w-[50%]"} hover:bg-gray-200 rounded-full text-left ${document.activeElement===locationInput.current && "bg-white hover:bg-white shadow-lg"} after:content-[''] after:h-5 after:w-[1px] after:inline-block after:bg-gray-200 relative after:absolute after:right-0 after:top-[35%] hover:after:hidden`}>
                        <div className="font-mono text-black font-bold block">Location</div>
                        <input ref={locationInput} id="location" type="text" className="bg-inherit focus:outline-none text-black focus:bg-white" placeholder="Where are you going?" onFocus={() => setSelectedSearch("Location")} onBlur={() => setSelectedSearch("")}/>
                    </label>
                }
                

                {/* Check in */}
                {selectedTab==="Places" && !scrolled && 
                    <button className="text-left w-[20%] hover:bg-gray-200 rounded-full pl-8 pr-20 focus:bg-white focus:shadow-lg after:content-[''] after:h-5 after:w-[1px] after:inline-block after:bg-gray-200 relative after:absolute after:right-0 after:top-[35%] hover:after:hidden"  onFocus={() => setSelectedSearch("Check in")} onBlur={() => setSelectedSearch("")}>
                        <label className="font-mono text-black font-bold block">Check in</label>
                        <label className="text-gray-400">Add dates</label>
                    </button>
                }
                
                {/* Check out */}
                {selectedTab==="Places" && !scrolled && 
                    <button className="text-left w-[20%] hover:bg-gray-200 rounded-full pl-8 pr-20 focus:bg-white focus:shadow-lg after:content-[''] after:h-5 after:w-[1px] after:inline-block after:bg-gray-200 relative after:absolute after:right-0 after:top-[35%] hover:after:hidden"  onFocus={() => setSelectedSearch("Check out")} onBlur={() => setSelectedSearch("")}>
                        <label className="font-mono text-black font-bold block">Check out</label>
                        <label className="text-gray-400">Add dates</label>
                    </button>
                }

                {/* Guests */}
                {!scrolled &&
                    <button className={`py-3 pl-8 pr-2 ${selectedTab==="Places" ? "w-[30%]" : "w-[50%]"} flex justify-between items-center hover:bg-gray-200 focus:bg-white rounded-full text-left focus:shadow-lg`}  onFocus={() => setSelectedSearch("Guests")} onBlur={() => setSelectedSearch("")}>
                        <div>
                            <label className="font-mono text-black font-bold block">Guests</label>
                            <label className="text-gray-400">Add guests</label>
                        </div>
                        {/* Search button */}
                        {
                            selectedSearch!=="" ?
                            (<button className="ml-1 bg-custom-pink hover:bg-custom-hover-pink rounded-full h-12 px-3 font-medium flex items-center justify-center text-base"><BiSearch /> Search</button>)
                            :
                            (<button className="ml-4 bg-custom-pink hover:bg-custom-hover-pink rounded-full h-12 w-12 flex items-center justify-center text-lg"><BiSearch /></button>) 
                        }
                    </button>
                }
            </div>
            
        )
    }

    

    return (
        <div className="bg-black">
            {/* Navbar top */}
            {renderNavbarTop()}

            {/* Navbar bottom */}
            {renderNavbarBottom()}
            {selectedSearch!=="" && renderSearchModal()}
        </div>
    );
};

export default Navbar;

