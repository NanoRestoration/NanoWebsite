import Image from "next/image";
import Button from "./ui/button";
import ProductGrid from "./ui/productGrid";

export default function Home() {
  return (
    <div className="w-lvw pt-24">
      <main className="bg-midnight-blue z-10">
        <section
          id="Home"
          className="pt-10 h-[100vh] w-full flex flex-col justify-start gap-20 max-md:gap-10 items-center sm:text-4xl text-2xl font-semibold bg-[url(/Roof-Spray-2.PNG)] bg-cover"
        >
          <div className="text-center w-2/3">
            <div className="">
              <Image
                src={"/NanoRestoLogo.png"}
                width={300}
                height={300}
                alt="Nano restoration Logo"
                className="m-auto p-5"
              />
            </div>
            <p className="text-center">Nano Coatings and Sealants for</p>
            <div className="text-cycler w-full flex justify-center lg:text-9xl sm:text-7xl xs:text-5xl text-4xl font-extrabold text-purple-gradient ">
              <span className="">CONCRETE</span>
              <span className="">WOOD</span>
              <span className="">SHINGLES</span>
              <span className="">MEMBRANES</span>
            </div>
          </div>
          <div className="text-center sm:w-fit w-4/5 mt-10">
            <p>
              Add up to{" "}
              <span className="font-bold text-orange-gradient">15 Years</span>{" "}
              of life to your roof
            </p>
            <p>
              Save{" "}
              <span className="font-bold text-orange-gradient">Thousands</span>{" "}
              on your roof maintenance
            </p>
          </div>
        </section>
        <section id="Products" className="h-fit bg-offWhite text-black py-10">
          <h1 className="text-5xl font-bold text-center my-5">
            Protection for your{" "}
            <span className="text-orange-gradient">Entire Home</span>
          </h1>
          <p className="w-2/5 max-md:w-xs text-center text-xl m-auto mb-10">
            Our nano coating solution consists of nano particles that transform
            the molecular structure of materials to modify permanently their
            properties, enhance their resistance and extend their lifespan by 10
            to 15 years.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-evenly m-auto gap-10 text-3xl text-midnight-blue w-4/5">
            <ProductGrid
              image="/products/surface/Shingles.jpg"
              title="Asphalt Shingles"
              desc="Protect Your shingles and add 10-15 years to its life"
              buttonLink="/products/shingle"
              buttonTitle="GoNano for Shingles"
            />
            <ProductGrid
              image="/products/surface/membrane-roof.webp"
              title="Elastometric Membrane"
              desc="Nano coatings for roof membranes"
              buttonLink="/products/shingle"
              buttonTitle="GoNano for Membranes"
            />
            <ProductGrid
              image="/products/surface/Concrete.jpg"
              title="Concrete Surfaces"
              desc="Protect Your shingles and add 10-15 years to its life"
              buttonLink="/products/concrete"
              buttonTitle="GoNano for Concrete"
            />
            <ProductGrid
              image="/products/surface/Wood.jpg"
              title="Wood Surfaces"
              desc="Protect Your shingles and add 10-15 years to its life"
              buttonLink="/products/wood"
              buttonTitle="GoNano for Wood"
            />
          </div>
        </section>
        <section id="extremeWeather" className="w-full py-20">
          <div className="flex justify-evenly  m-auto md:flex-row flex-col">
            <div className="md:w-1/3 w-4/5 m-auto">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Extreme Weather Protection
              </h1>
              <h2 className="my-5 text-xl text-offWhite">
                Don&apos;t worry about damage from extreme weather.
              </h2>
              <ol className="lg:text-xl text-lg text-offWhite">
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">01</p>{" "}
                  <p>Hail</p>
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">02</p> High
                  winds
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">03</p>{" "}
                  Extreme heat
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">04</p>{" "}
                  Water and ice
                </li>
              </ol>
              <div className="w-fit mt-5 mb-5">
                <Button link={"/quote"} title={"Get a Quote"} />
              </div>
            </div>
            <div className="md:w-1/2 w-4/5 m-auto">
              <Image
                src={"/products/surface/alexander-andrews-unsplash-Rainy.jpg"}
                width={1920}
                height={1280}
                alt="Heavy Rain on shingles"
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
        <section
          id="shingleProtection"
          className="w-full bg-offWhite text-black py-20"
        >
          <div className="flex justify-evenly  m-auto md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-4/5 m-auto">
              <Image
                src={"/products/surface/Crane_application.png"}
                width={1920}
                height={1280}
                alt="Heavy Rain on shingles"
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-1/3 w-4/5 m-auto">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Roofing Nanosealers
              </h1>
              <h2 className="my-5 text-xl ">
                Protect your roof permanently and extend its lifespan.{" "}
              </h2>
              <ol className="lg:text-xl text-lg">
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">01</p>{" "}
                  Application completed in only one day
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">02</p> No
                  dust or odor
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">03</p> Only
                  one treatment needed
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">04</p>{" "}
                  Permanent protection
                </li>
              </ol>
              <div className="flex gap-5 py-5">
                <Button link={"/products/shingle"} title={"Shingle Sealants"} />
                <Button
                  link={"/products/membranes"}
                  title={"Membrane Sealants"}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="woodConcrete"
          className="w-full bg-offWhite text-black py-20"
        >
          <div className="flex justify-evenly   m-auto md:flex-row flex-col">
            <div className="md:w-1/3 w-4/5 m-auto">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Wood and Concrete Nanosealers
              </h1>
              <h2 className="my-5 text-xl ">
                Protect your roof permanently and extend its lifespan.{" "}
              </h2>
              <ol className="lg:text-xl text-lg">
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">01</p>{" "}
                  Application completed in only one day
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">02</p> No
                  dust or odor
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">03</p> Only
                  one treatment needed
                </li>
                <li className="flex">
                  <p className="w-10 text-purple-gradient font-bold">04</p>{" "}
                  Permanent protection
                </li>
              </ol>
              <div className="flex gap-5 py-5">
                <Button link={"/products/wood"} title={"Wood Sealants"} />
                <Button
                  link={"/products/concrete"}
                  title={"Concrete Sealants"}
                />
              </div>
            </div>
            <div className="md:w-1/2 w-4/5 m-auto">
              <Image
                src={"/products/surface/jonathan-cooper-porch.jpg"}
                width={1920}
                height={1240}
                alt="Heavy Rain on shingles"
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
