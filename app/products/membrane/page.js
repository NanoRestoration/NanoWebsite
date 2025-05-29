import Button from "@/app/ui/button";
import ItemCard from "@/app/ui/itemCard";
import QualityCard from "@/app/ui/qualityCard";
import Image from "next/image";


export default function Wood() {
    return <div className="pt-24">
        <section id="Heading" className="min-h-96 bg-[url(/products/surface/membrane-roof.webp)] bg-cover -mt-24 border-b-4 border-purple-gradient">
            <div className="w-full min-h-96  bg-linear-to-r from-midnight-blue via-midnight-blue/90 to-midnight-blue/40 pt-24">
                <div className="xs:p-20 px-5 py-20 xs:mb-20">
                    <h1 className="sm:text-6xl text-5xl font-bold mb-4 ">Roof Protector</h1>
                    <h2 className="text-xl sm:ml-20 ">Nano Roof Coating for Elastomeric Membrane Roofing</h2>
                </div>
                <div className="flex lg:flex-row flex-col justify-evenly xs:p-10 p-5 gap-3">
                    <ItemCard
                        title={"Extend roofing membrane lifespan by 10 to 15 years"}
                        desc={"Drastically slow down the aging process of your roofing by transforming its membrane with our nanotechnology."} />
                    <ItemCard
                        title={"Reduce your maintenance costs with roof rejuvenation"}
                        desc={"Reinforce the structure of your materials to get more resistant surfaces that require less maintenance. "} />
                    <ItemCard
                        title={"Avoid costly contingencies with our roof coating"}
                        desc={"Avoid infiltration, breakage and costly repairs by making your roof membrane more waterproof."} />
                </div>
            </div>
        </section>
        <section className="sm:p-20 px-5 py-20 bg-offWhite text-black text-center border-b-4 border-purple-gradient">
            <h1 className="sm:text-6xl text-4xl font-bold">Sealing Protection for Your Commercial Roofing</h1>
            <p className="md:w-3/5 m-auto mt-5 text-lg">
                Protect your roof: stop worrying about damage from extreme weather.
            </p>
            <div className="grid md:grid-cols-2 gap-5 m-auto xl:w-3/5 mt-12">
                <QualityCard title={"Strengthens the membrane"} desc={"Acts on the molecular structure of the membrane to transform and strengthen it."} />
                <QualityCard title={"Ultimate waterproofing"} desc={"Penetrates deep into the membrane to make it hydrophobic."} />
                <QualityCard title={"Freeze and thaw"} desc={"Fills microfissures to protect them from freezing and thawing cycles. "} />
                <QualityCard title={"Extreme heat"} desc={"Reflects UV rays to limit heat absorption and aging."} />
            </div>
        </section>
        <section className="flex md:flex-row flex-col flexjustify-evenly xs:p-20 px-5 py-20">
            <div className="sm:w-[30%] m-auto">
                <Image src={"/products/cans/Shingle_Saver.png"} width={4000} height={4000} alt="Shingle Saver Can" />
            </div>
            <div className="lg:w-1/3 md:w-1/2 m-auto">
                <h3 className="sm:text-4xl text-3xl font-semibold">Modify and enchance your membrane to gain an additional 10 to 15 years of lifespan.</h3>
                <p className="w-4/5 my-5 text-lg">
                    GoNano restores the original properties and waterproofing of your membrane.
                </p>
                <div className="flex gap-10">
                    <Button link={"/science"} title={"Learn More"} />
                    <Button link={"/quote"} title={"Free Quote"} />
                </div>
            </div>
        </section>
        <section className="bg-offWhite xs:p-20 px-5 py-20">
            <div className="w-32 p-5 rounded-2xl mx-auto bg-white -mt-36 shadow-[0_0_7px] shadow-black/50">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#675ce7">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z">
                    </path>
                        <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z"></path>
                    </g> </g>
                </svg>
            </div>
            <div className="mt-10 text-black text-center">
                <h1 className="sm:text-6xl xs:text-4xl text-3xl font-bold">10 to 15 years.</h1>
                <h1 className="sm:text-6xl xs:text-4xl text-3xl  font-bold">Guaranteed.*</h1>
                <div className="sm:w-1/2 m-auto text-lg">
                    <p className="my-5">
                        Our promise: GoNano technology will extend the lifespan of your roof so you won’t have to replace it for the next 10 to 15 years.
                    </p>
                    <p className="font-medium">*certain conditions apply</p>
                    <div className="m-auto w-fit mt-5">
                        <Button link={"/quote"} title={"Get Youre Free Quote"} />
                    </div>
                </div>
            </div>

        </section>
    </div>
}