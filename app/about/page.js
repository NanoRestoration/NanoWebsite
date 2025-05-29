import Image from "next/image";

export default function About() {
    return <div className="pt-24">
        <section id="AboutUs" className="w-full bg-white text-dark-purple text-lg xs:p-20 py-20 px-5">
            <div className="lg:w-3/5 xl:w-2/5  text-center m-auto ">
            <Image src={"/NanoRestoLogo.png"} width={282} height={282} alt="Nano restoration Logo" className="m-auto bg-midnight-blue rounded-[50%] p-1"/>
                <h1 className="sm:text-5xl text-4xl font-bold mb-10">Meet the Company</h1>
                <p>Welcome to <span className="font-semibold">Nano Restoration!</span></p>
                <br />
                <p>
                    At Nano Restoration, we&apos;re passionate about giving your property a fresh start while doing our part for the planet. We specialize in rejuvenating roofs, fences, decks, driveways, and concrete, extending the lifespan of your roof by up to 15 years with innovative, eco-friendly solutions.
                </p>
                <br />
                <p>
                    Every year, countless roofs, fences, and concrete structures are torn out and sent to landfills—contributing to unnecessary waste and environmental harm. That&apos;s why we&apos;ve made it our mission to save your property and the planet by reviving and restoring, instead of replacing.
                </p>
                <br />
                <p>
                    Founded with the belief that restoration should be smarter, more sustainable, and cost-effective, we take pride in delivering top-quality results with minimal environmental impact. Whether you&apos;re a homeowner or a business owner, our team is here to help you protect and enhance your property while save you hard earned money and keeping waste out of landfills.
                </p>
                <br />
                <p>
                    Let&apos;s work together to restore, protect, and preserve—because every home deserves a second chance, and so does our planet.
                </p>
                <br />
                <div className="font-semibold">
                    <p>Alberta 403-800-6155</p>
                    <p>BC 778-413-5444</p>
                </div>
            </div>
        </section>
        <section id="Crafted" className="min-h-96 md:flex xs:p-20 py-20 px-5">
            <div className="md:w-1/2 h-full m-auto">
                <h1 className="sm:text-5xl text-4xl font-semibold text-center py-10">Crafted in Cananda, For Cananda</h1>
                <p className="md:w-4/5 m-auto">
                    Our nano sealer products are meticulously designed in North America, tailored to fulfill the needs of North American homeowners.
                    Each product undergoes rigorous field and laboratory testing, ensuring tangible benefits and superior performance in real-life applications.
                </p>
            </div>
            <div className="sm:w-1/2 xs:w-2/3 w-4/5 m-auto pt-5">
                <Image src={"/Canada_blank_map.svg"} width={1114} height={942} alt="Map of Canada" className="lg:w-4/5 xsp-5 m-auto"/>
            </div>
        </section>
        <section id="AboutNanoTech" className="w-full text-lg xs:p-20 py-20 px-5 bg-white text-dark-purple">
            <div className="lg:w-3/5 xl:w-2/5 text-center m-auto">
                <h3 className="text-neutral-400 font-medium">Backed by Science</h3>
                <h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold mb-10">About Nanotechnology</h1>
                <p>Nanotechnology is the science of engineering and technology at the nanoscale. As a reference point, the thickness of a sheet of paper is about 150,000 nanometers.</p>
                <br />
                <p>Ranging from 40 to 60 nanometers in size, the nanoparticles we use are infinitely microscopic. This is what allows them to penetrate materials to protect them from the inside.</p>
                <br />
                <p>Unlike a coating or paint that creates a protective layer on the surface, our nanosealers act on the molecular structure of materials to modify and strengthen them.</p>
            </div>
        </section>
    </div>
}