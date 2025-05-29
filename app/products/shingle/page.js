import Image from "next/image";
import Button from "@/app/ui/button";
export default function Shingle() {

    return <div className="w-full h-full pt-24">
        <section id="Product" className="w-full h-fit">
            <div className="flex lg:w-4/5 lg:p-0 justify-evenly m-auto mb-0 gap-2 my-10 md:flex-row flex-col">
                <div className="bg-[url(/products/Shingle-Saver-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-60 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] border-0">
                    <a href="#ShingleSaver" >
                        <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5 border-0">
                            <h1 className="font-bold text-5xl">Shingle Saver</h1>
                            <p className="w-3/4 text-2xl">The Ultimate protection for new and younger roofs</p>
                        </div>
                    </a>
                </div>
                <div className="bg-[url(/products/Revive-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-60 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <a href="#Revive">
                        <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5">
                            <h1 className="font-bold text-5xl">Revive</h1>
                            <p className="w-3/4 text-2xl">The Best way to protect and extend the life of older roofs</p>
                        </div>
                    </a>
                </div>
                <div className="bg-[url(/products/Bio-Boost-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-60 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <a href="#BioBoost">
                        <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5">
                            <h1 className="font-bold text-5xl w-full">Bio-Boost</h1>
                            <p className="w-3/4 text-2xl">Basic protection for an exceptional price</p>
                        </div>
                    </a>
                </div>
            </div>
            <p className="w-fit m-auto my-5 underline hover:text-purple-gradient"><a href="#Compare">Compare Our Products</a></p>
        </section>
        <section id="Benefits" className="w-full bg-dark-purple py-20 h-fit border-b-4 border-purple-gradient">
            <h1 className="text-5xl font-bold w-fit m-auto">Key Benefits</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-3/5 md:w-4/5 w-full gap-5 m-auto mt-10 ">
                <div className="w-3/4 text-center m-auto h-[200px]">
                    <Image src="/icons/sun-icon.svg" width={200} height={200} alt="Increased Health Icon" className="max-w-[170px] w-1/4 m-auto mb-3" />
                    <h2 className="font-semibold">Extreme heat</h2>
                    <p>By reflecting UV rays, our treatment limits heat absorption, slows aging, and prevents discoloration.</p>
                </div>
                <div className="w-3/4 text-center m-auto h-[200px]">
                    <div className="max-w-[170px] w-1/4 m-auto mb-3">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokewidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokelinecap="round" strokelinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7.5 15V7M7.5 7.5V10.5M7.5 7.5C7.5 5.29086 5.70914 3.5 3.5 3.5H0.5V6.5C0.5 8.70914 2.29086 10.5 4.5 10.5H7.5M7.5 7.5H10.5C12.7091 7.5 14.5 5.70914 14.5 3.5V0.5H11.5C9.29086 0.5 7.5 2.29086 7.5 4.5V7.5ZM7.5 7.5L11.5 3.5M7.5 10.5L3.5 6.5" stroke="#18863d"></path>
                            </g>
                        </svg>
                    </div>
                    <h2 className="font-semibold">Resist organic growth</h2>
                    <p>Prevents mold, mildew lichen and efflorescence from accumulating on roofs.</p>
                </div>
                <div className="w-3/4 text-center m-auto h-[200px]">
                    <Image src="/icons/hail-icon.svg" width={200} height={200} alt="Increased Health Icon" className="max-w-[170px] w-1/4 m-auto mb-3" />
                    <h2 className="font-semibold">Hail</h2>
                    <p>Our treatment transforms typical Class 1 shingles into Class 3 or 4 shingles, meeting North American impact resistance standards.</p>
                </div>
                <div className="w-3/4 text-center m-auto h-[200px]">
                    <div className="max-w-[170px] w-1/4 m-auto mb-3">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokewidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokelinecap="round" strokelinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M12 17L9 20M12 17L15 20M12 17V12M12 17V21M12 7L9 4M12 7L15 4M12 7V12M12 7V3M12 12L7.66985 9.49995M12 12L16.3301 14.4999M12 12L7.66985 14.4999M12 12L16.3301 9.49995M16.3301 14.4999L17.4282 18.598M16.3301 14.4999L20.4282 13.4019M16.3301 14.4999L19.7943 16.5M7.66985 9.49995L3.57178 10.598M7.66985 9.49995L6.57178 5.40187M7.66985 9.49995L4.20581 7.5M16.3301 9.49995L20.4282 10.598M16.3301 9.49995L17.4282 5.40187M16.3301 9.49995L19.7943 7.5M7.66985 14.4999L6.57178 18.598M7.66985 14.4999L3.57178 13.4019M7.66985 14.4999L4.20581 16.5" stroke="#7094ff" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"></path>
                            </g>
                        </svg>
                    </div>
                    <h2 className="font-semibold">Water and ice</h2>
                    <p>Our solution improves drainage by enhancing the hydrophobic properties of asphalt shingles, protecting your roof from water and ice damage.</p>
                </div>
            </div>
            <div className="m-auto w-fit mt-20">
                <Button link={"/quote"} title={"Get Youre Free Quote"} />
            </div>
        </section>
        <section id="ShingleSaver" className="min-h-screen  py-28 border-b-4 border-purple-gradient">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Shingle_Saver.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">SHINGLE SAVER</h1>
                <p className=" mt-10 text-2xl">
                    A new solution for extending and maintaining your roof. By using a nano-technology-driven approach, gonano developed a breathable,
                    deep penetrating, clear, hydrophobic, and UV-resistant coating to make asphalt shingles more durable.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Shingle_Saver.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Protected_Icon.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Fortify</h3>
                            <p className="text-xl">Significantly increase impact resistance, making your roof hailstorm ready.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Wind_Icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Enhance</h3>
                            <p className="text-xl">Boost wind resistance ensuring your shingles stay put in even extreme weather.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Repels_Icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Preserve</h3>
                            <p className="text-xl">Create a hydrophobic barrier that repels water and prevents moisture damage.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Improves-roof-health_Icon.svg" width={300} height={300} alt="Increased Health Icon" className="max-w-[170px] w-1/4 " />
                        <div className="my-auto text-left">
                            <h3 className="text-orange-gradient text-3xl">Longevity</h3>
                            <p className="text-xl">Extend the life of your roof by up to 15 years with just one treatment.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
        <section id="Revive" className="min-h-screen bg-white text-dark-purple py-28 border-b-4 border-purple-gradient">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Revive_label.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">Revive</h1>
                <p className=" mt-10 text-2xl">
                    GoNano Revive is an advanced solution for rejuvenating and protecting asphalt shingle roofs.
                    It offers unmatched durability, reduced maintenance, and extends the lifespan of asphalt surfaces by a minimum of 5 to 10 years.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Revive_label.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Time_Icon_dark.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Revive</h3>
                            <p className="text-xl">Bring back the strength and durability of your roof. </p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Improves-roof-health_Icon_dark.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Extend</h3>
                            <p className="text-xl">Add an impressive 5-10 years to the lifespan of your roof.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Protected_Icon_dark.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Protect</h3>
                            <p className="text-xl">Shield your roof from the elements with superior Nanotechnology. </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
        <section id="BioBoost" className="min-h-screen py-28 border-b-4 border-purple-gradient">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Bio-boost.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">Bio-Boost</h1>
                <p className=" mt-10 text-2xl">
                    GoNano Revive is an advanced solution for rejuvenating and protecting asphalt shingle roofs.
                    It offers unmatched durability, reduced maintenance, and extends the lifespan of asphalt surfaces by a minimum of 5 to 10 years.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Bio-boost.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Time_Icon.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Boosts Longevity</h3>
                            <p className="text-xl">Extend the life of your roof by up to 5 years.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Repels_Icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Resists Damage</h3>
                            <p className="text-xl">Helps defend against weather, UV exposure and everyday ware.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Deep penetration_Icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Restores Vitality</h3>
                            <p className="text-xl">Rehydrates shingles by infusing bio-oil and enhancing flexibility.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Cost savings_Icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Saves Money</h3>
                            <p className="text-xl">Reliable performance at a cost-effective price.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="Compare" className="bg-white w-full h-full overflow-scroll overflow-y-hidden">
            <Image src={"/products/Product_chart.png"} width={1900} height={1000} alt="Product comparison chart" className="w-3/4 m-auto min-w-[800px] overflow-scroll " />
        </section>
    </div>
}