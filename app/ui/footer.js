import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return <div className="w-full h-full border-t-[6px] border-purple-gradient z-10">
        <div className="m-auto my-20 w-4/5 h-4/5 md:flex items-center md:justify-evenly grid sm:grid-cols-2 grid-cols-1 gap-10">

            <div >
                <Image
                    src={"/Gonano_Logo.svg"}
                    width={125}
                    height={90}
                    alt="Gonano Logo"
                    className="md:m-auto sm:m-0 m-auto"
                />
            </div>
            
                <div >
                    <h3 className="text-xl mb-4">Contact</h3>
                    <div className="text-xl w-full">
                        <p >Alberta 403-800-6155</p>
                        <p>BC 778-413-5444</p>
                    </div>
                </div>

                <div >
                    <h3 className="text-xl mb-4">Products</h3>
                    <div>
                        <p className="hover:text-purple-gradient hover:underline"> <Link href={"/products/shingle"}>Shingle</Link></p>
                        <p className="hover:text-purple-gradient hover:underline"> <Link href={"/products/shingle"}>Membrane</Link></p>
                        <p className="hover:text-purple-gradient hover:underline"> <Link href={"/products/concrete"}>Concrete</Link></p>
                        <p className="hover:text-purple-gradient hover:underline"> <Link href={"/products/wood"}>Wood</Link></p>
                    </div>
                </div>
            
            <div >
                <h3 className="text-xl mb-4">Menu</h3>
                <div className="font-medium ">
                    <p className="hover:text-purple-gradient hover:underline"> <Link href={"/"}>Home</Link></p>
                    <p className="hover:text-purple-gradient hover:underline"> <Link href={"/about"}>About</Link></p>
                    <p className="hover:text-purple-gradient hover:underline"> <Link href={"/science"}>Science</Link></p>
                </div>
            </div>
        </div>
    </div>
}