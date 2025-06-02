import Image from "next/image";
import Button from "./button";

export default function ProductGrid({
  image,
  title,
  desc,
  buttonLink,
  buttonTitle,
}) {
  return (
    <div>
      <div className="w-full h-150 mx-auto rounded-2xl bg-white ">
        <div className="h-2/3">
          <Image
            src={image}
            width={1920}
            height={1280}
            alt="Roof Shingles"
            className="h-96 overflow-hidden w-full rounded-t-2xl"
          />
        </div>
        <div className="p-2  border-2 border-amber-400">
          <div className="p-5  h-full">
            <h3 className="font-semibold max-md:text-lg py-2">{title}</h3>
            <h1 className="text-[18px] py-2">{desc}</h1>
            <div className=" flex flex-col align-middle content-center items-center py-2  text-[16px] ">
              <Button link={buttonLink} title={buttonTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
