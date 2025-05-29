import Image from "next/image";
import Button from "./button";

export default function ProductGrid({ image, title, desc, buttonLink, buttonTitle }) {
    return (
        <div>
            <div className="w-full h-full mx-auto rounded-2xl bg-white">
                <div className="h-2/3">
                    <Image src={image} width={1920} height={1280} alt="Roof Shingles" className="h-96 overflow-hidden w-full rounded-t-2xl" />
                </div>
                <div className="h-1/3 p-3">
                    <div className="p-5 flex flex-col justify-evenly h-full">
                        <h3 className="font-semibold">{title}</h3>
                        <h1 className="text-xl">{desc}</h1>
                        <div className="mt-auto h-fit text-lg">
                            <Button link={buttonLink} title={buttonTitle} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}