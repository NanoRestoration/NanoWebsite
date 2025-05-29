import Button from "@/app/ui/button";
import ItemCard from "@/app/ui/itemCard";
import QualityCard from "@/app/ui/qualityCard";
import Image from "next/image";

export default function Wood() {
    return <div className="pt-24">
        <section id="Heading" className="min-h-96 bg-[url(/products/surface/WoodenFence.jpg)] bg-cover -mt-24 border-b-4 border-purple-gradient">
            <div className="w-full min-h-96  bg-linear-to-r from-midnight-blue via-midnight-blue/90 to-midnight-blue/40 pt-24">
                <div className="xs:p-20 px-5 py-20 xs:mb-20">
                    <h1 className="sm:text-6xl text-5xl font-bold mb-4 ">Wood Sealants</h1>
                    <h2 className="text-xl sm:ml-20 ">Total Protection For Your Wood Surfaces</h2>
                </div>
                <div className="flex lg:flex-row flex-col justify-evenly xs:p-10 p-5 gap-3">
                    <ItemCard
                        title={"Total Surface Protection"}
                        desc={"Our advanced nano-based solution penetrates deep into the wood, ensuring long-lasting durability from the inside out."} />
                    <ItemCard
                        title={"Apply In One Treatment"}
                        desc={"A single treatment is all you need to achieve superior exterior protection and sealing for your wood surfaces."} />
                    <ItemCard
                        title={"Completely Waterproof"}
                        desc={"This innovative wood sealer creates a completely waterproof barrier, effectively preventing water from seeping in and causing damage."} />
                </div>
            </div>
        </section>
        <section className="sm:p-20 px-5 py-20 bg-offWhite text-black text-center border-b-4 border-purple-gradient">
            <h1 className="sm:text-6xl text-4xl font-bold">The Only Wood Sealer You&apos;ll Need</h1>
            <p className="md:w-3/5 m-auto mt-5 text-lg">
                GoNano&apos;s wood sealant is the ultimate solution for protecting your wood surfaces from the harshest weather and contaminants.
                Our premium wood sealer penetrates deep into the wood, providing robust defense against various damaging elements.
                With just one treatment, you can ensure your wood remains resilient and beautiful for years to come. Say goodbye to frequent maintenance and enjoy the peace of mind that comes with superior protection.
            </p>
            <div className="grid md:grid-cols-2 gap-5 m-auto xl:w-3/5 mt-12">
                <QualityCard title={"Water and moisture"} desc={"Protects against water and moisture intrusion that damages wood. Our wood sealant creates a waterproof barrier, preventing water from seeping in and causing damage."} />
                <QualityCard title={"Grease and stains"} desc={"Prevents grease and stains from becoming embedded in the wood. GoNano&apos;s wood sealer ensures that your exterior wood surfaces stay cleaner and maintain their natural beauty longer."} />
                <QualityCard title={"Mold and mildew"} desc={"Prevents the growth and proliferation of plants responsible for mold and mildew. Our advanced wood sealant keeps your wood free from mold and mildew, enhancing its durability."} />
                <QualityCard title={"UV rays"} desc={"Reflects UV rays to limit heat absorption and aging. By reflecting harmful UV rays, our wood sealer reduces heat absorption and slows down the aging process of your wood surfaces."} />
            </div>
        </section>
        <section className="flex md:flex-row flex-col flexjustify-evenly xs:p-20 px-5 py-20">
            <div className="sm:w-[30%] m-auto">
                <Image src={"/products/cans/Wood Saver Can.png"} width={4000} height={4000} alt="" />
            </div>
            <div className="lg:w-1/3 md:w-1/2 m-auto">
                <h3 className="sm:text-4xl text-3xl font-semibold">Millions of nanoparticles.</h3>
                <h3 className="sm:text-4xl text-3xl font-semibold">A formidable technology.</h3>
                <p className="w-4/5 my-5 text-lg">
                    Our nanotechnology solution is made up of nanoparticles that transform the molecular structure of wood to enhance its properties, double its strength and extend its lifespan by 5 to 7 years.
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
                <h1 className="sm:text-6xl xs:text-4xl text-3xl font-bold">5 years.</h1>
                <h1 className="sm:text-6xl xs:text-4xl text-3xl  font-bold">Guaranteed.*</h1>
                <div className="sm:w-1/2 m-auto text-lg">
                    <p className="my-10">
                        Our promise: GoNano technology will protect your wood surfaces and you won&apos;t have to replace them for 5 to 7 years.
                    </p>
                    <p>
                        GoNano products are designed to last, and they&apos;ll keep working incredibly well for years and years. With a warranty that covers all of the most common causes of wear-and-tear &ndash; from peeling to high UV exposure &ndash; you can rest assured that your wood surfaces are protected with the best technology.
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