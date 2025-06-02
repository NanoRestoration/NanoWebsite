import Image from "next/image";

export const metadata = {
  title: "Science",
  description: "The Science of GoNano",
};

export default function Science() {
  return (
    <div className="w-full pt-24 ">
      <section
        id="title"
        className="min-h-96  w-full bg-[url(/products/surface/Shingles.jpg)] bg-center "
      >
        <div className="w-full min-h-96  bg-linear-to-r from-midnight-blue via-midnight-blue/90 to-midnight-blue/60 xs:p-20 pt-20 px-2">
          <h1 className="w-fit p-2 bg-offWhite text-dark-purple font-bold rounded-2xl m-auto text-center">
            The Science Behind GoNano
          </h1>
          <div className="mb-30 mt-10 mx-auto lg:w-1/2 text-center">
            <h1 className="text-4xl font-semibold mb-10">
              The Last Roof You&apos;ll Ever Need.
            </h1>
            <p className=" text-xl max-md:px-2">
              GoNano is the first and only North American company to bring to
              market a sealant that replaces all sealants. Having said this, the
              technology behind GoNano spans decades and has gone through
              critical scientific and peer review. See why nanosilica replaces
              all other traditional asphalt shingle roofs for its durability and
              life-cycle cost savings.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Sealants"
        className="min-h-screen bg-white text-midnight-blue text-center py-30 px-2"
      >
        <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold  max-md:px-2">
          GoNano vs Traditional Sealants
        </h1>
        <div className="flex lg:w-4/5 justify-evenly text-2xl font-medium mt-20 mx-auto md:flex-row flex-col">
          <div className="w-11/12 md:w-1/2 m-auto md:m-0">
            <h2 className="font-semibold">Traditional Sealant</h2>
            <br />
            <ul className="text-xl text-left list-disc pl-5 w-full md:w-3/4 ml-auto">
              <li>Acts as an isolated, protective layer</li>
              <li className="my-2">
                Typical repair on microscale, adds layer of oil
              </li>
              <li>
                Less durable, flexible and resilient to aging due to
                environmental conditions
              </li>
            </ul>
          </div>
          <div className="w-11/12 md:w-1/2 m-auto md:m-0 mt-10 md:mt-0">
            <h2 className="font-semibold">GoNano Sealant</h2>
            <br />
            <ul className="text-xl text-left list-disc pl-5 w-full md:w-3/4 m-auto">
              <li>Modifies the mechanical properties of asphalt</li>
              <li className="my-2">
                Nanoscale (1000X smaller than a micro meter) forms precise
                shapes into asphalt pores
              </li>
              <li>
                Bonds to each asphalt shingle, and each shingle to the other
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={"/ParticleSize.jpg"}
          width={1200}
          height={650}
          alt="Size comparison of nano particle"
          className="m-auto"
        />
      </section>
      <section id="Classes" className="min-h-fit text-center py-30 ">
        <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold my-5">
          Shingle Class Transformation
        </h1>
        <div>
          <h2 className="text-4xl">Shingle Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 w-4/5 m-auto gap-3.5 mb-10 mt-5">
            <div className="w-[90%] p-4 m-auto bg-white border-0 rounded-lg  text-midnight-blue h-full ">
              <h3 className="text-3xl font-semibold">Class 1</h3>
              <p className="text-lg font-medium">
                Least resistant, can withstand at most a 1.25-inch steel ball
                test.
              </p>
            </div>
            <div className="w-[90%] p-4  m-auto bg-white border-0 rounded-lg text-midnight-blue h-full">
              <h3 className="text-3xl font-semibold">Class 2</h3>
              <p className="text-lg font-medium">
                Can withstand at most a 1.5-inch steel ball test.
              </p>
            </div>
            <div className="w-[90%] p-4  m-auto bg-white border-0 rounded-lg  text-midnight-blue h-full">
              <h3 className="text-3xl font-semibold">Class 3</h3>
              <p className="text-lg font-medium">
                Can withstand at most a 1.75-inch steel ball test.
              </p>
            </div>
            <div className="w-[90%] p-4  m-auto bg-white border-0 rounded-lg  text-midnight-blue h-full">
              <h3 className="text-3xl font-semibold">Class 4</h3>
              <p className="text-lg font-medium">
                Highest resistance, can withstand up to a 2-inch steel ball
                test.
              </p>
            </div>
          </div>
        </div>
        <p className="lg:w-2/3 m-auto text-xl px-10">
          For GoNano to earn a Class 4 certification, a 50.88mm(2-in) diameter
          steel ball was dropped from 20 feet above a vulnerable section of a
          shingled roof. Following these tests, roofs treated with GoNano showed
          no signs of damage and/or cracking.
          <span className="font-semibold">
            {" "}
            One treatment from GoNano&apos;s sealant transforms Class 1 shingles
            into Class 3, and two treatments into Class 4.
          </span>
        </p>
      </section>
      <section
        id="GoNanoEffect"
        className="min-h-fit py-30 text-center bg-white text-midnight-blue"
      >
        <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold my-5">
          Permanent Structure Modification
        </h1>
        <div className="w-2/3 m-auto">
          <h2 className="text-2xl max-md:text-[18px]">
            GoNano&apos;s technology doesn&apos;t add a protective layer, like
            traditional sealants, nor does it simply replace lost oil: it
            modifies and enhances the molecular structure of asphalt shingles
            permenantly.
          </h2>
        </div>
        <Image
          src={"/Shingle_Reaction.jpg"}
          width={1180}
          height={520}
          alt="Shingle Modification Process"
          className="m-auto w-11/12 lg:w-3/5"
        />
      </section>
      <section
        id="s1Particles"
        className="min-h-fit text-center  bg-[url(/products/surface/Crane_application.png)] bg-center bg-cover"
      >
        <div className="bg-midnight-blue/90 w-full h-full py-30">
          <h1 className="text-lg font-semibold max-lg:px-4">
            The result: a unified barrier against strains caused by
            environmental factors
          </h1>
          <p className="w-[80%] m-auto py-5">
            The evolution of GoNano technology created a shift in how sealants
            are approached. A regular shingle is sealed with oil, filling up the
            space in between shingles. GoNano modifies the molecular structure
            of asphalt shingles permanently. After application, a reaction
            occurs within each shingle. This reaction fuses both organic and
            inorganic material, creating new chemical links, called S1
            particles. These S1 particles link shingle granules together,
            working from the inside out, creating a unified barrier against
            environmental strains and saves you money by extending the lifespan
            of your roof.
          </p>
          <Image
            src={"/S1ParticleDiagram.jpg"}
            width={1050}
            height={460}
            alt="S1 Particle Display"
            className="m-auto"
          />
        </div>
      </section>
      <section
        id="Advantages"
        className="bg-purple-gradient min-h-fit py-30 text-center w-full"
      >
        <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold my-5 max-lg:px-4">
          GoNano Advantages
        </h1>
        <div className="flex justify-evenly lg:w-4/5 m-auto pt-2 sm:flex-row flex-col">
          <div className="sm:w-1/3 w-4/5 m-auto">
            <Image
              src="/icons/Protected_Icon.svg"
              width={300}
              height={300}
              alt="Shield With Check Mark icon"
              className="m-auto sm:2/3 w-1/2"
            />
            <h2 className="m-3 mt-0 text-3xl font-medium">
              Improved flexibility
            </h2>
            <p>
              Elastic strain resilience, high tensile strength to pressure and
              load, fracture aversion.{" "}
            </p>
          </div>
          <div className="sm:w-1/3 w-4/5 m-auto">
            <Image
              src="/icons/Repels_Icon.svg"
              width={300}
              height={300}
              alt="Repels Water Icon"
              className="m-auto sm:2/3 w-1/2"
            />
            <h2 className="m-3 mt-0 text-3xl font-medium">Hydrophobic</h2>
            <p>Impervious to moisture infiltration.</p>
          </div>
          <div className="sm:w-1/3 w-4/5 m-auto">
            <Image
              src="/icons/Improves-roof-health_Icon.svg"
              width={300}
              height={300}
              alt="Increased Health Icon"
              className="m-auto sm:2/3 w-1/2 "
            />
            <h2 className="m-3 mt-0 text-3xl font-medium">
              Adaptable fatigue life
            </h2>
            <p>Endures greater cycles and seasons of stress.</p>
          </div>
        </div>
      </section>
      <section
        id="Environment"
        className="min-h-fit py-30 text-center max-md:px-2"
      >
        <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold ">
          Environmental Impacts
        </h1>
        <div className="xs:w-2/3 m-auto mt-10">
          <p className="xs:text-2xl text-lg">
            GoNano&apos;s technology has been categorizedin accordance with the
            Occupational Safety and HealthAdministration standards (OHSA) as
            being:
          </p>
          <div className="m-auto w-4/5">
            <ol className="xs:text-xl sm:w-fit text-left m-auto mt-4 list-decimal ">
              <li>&quot;Quickly biodegradable&quot;</li>
              <li>&quot;No bioaccumulation potential&quot;</li>
              <li>&quot;No harm to aquatic organisms&quot;</li>
            </ol>
          </div>
          <p className="xs:text-2xl text-lg mt-10">
            In the coming years, the effects of climate change will mean an
            increase in severity of hail storms. Impact-resistant shingles will
            be a necessity for protection against increased frequency and
            strength of future storms.
          </p>
          <p className="xs:text-2xl text-lg mt-10">
            GoNano is therefore{" "}
            <span className="font-bold">
              safe for the environment and on human health.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
