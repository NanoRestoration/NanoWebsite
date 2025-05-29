'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from "../../public/Gonano_Logo.svg"
import Button from "./button"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="fixed w-full bg-midnight-blue/80 h-24 z-20 sm:flex justify-center hidden">
            <div className="w-full px-20 flex justify-between items-center opacity-100">
                <div className="w-1/5 flex justify-center">
                    <Link
                        href={"/"}
                    >
                        <Image
                            src={logo}
                            width={125}
                            height={90}
                            alt="Gonano LOGO Image"
                            className="" />
                    </Link>

                </div>
                <div className="w-3/5 flex justify-evenly font-semibold">
                    <div className="hover:text-purple-gradient cursor-default h-8 py-1 my-auto" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        <h3 >Products</h3>
                        {isOpen && (
                            <div className="absolute text-black bg-white flex flex-col justify-evenly min-h-52 w-2xs font-medium z-20 rounded">
                                <Link href={"/products/shingle"} className="h-1/3 hover:bg-purple-gradient p-2 rounded">
                                    <h2>Shingle Saver</h2>
                                    <p className="text-sm font-normal my-auto">Extend the life of your Shingles</p>
                                </Link>
                                <Link href={"/products/membrane"} className="h-1/3 hover:bg-purple-gradient p-2 rounded">
                                    <h2>Elastometric Membrane</h2>
                                    <p className="text-sm font-normal">Transform your roof Membrane</p>
                                </Link>
                                <Link href={"/products/wood"} className="h-1/3 hover:bg-purple-gradient p-2 rounded">
                                    <h2>Wood Saver</h2>
                                    <p className="text-sm font-normal">Extend the life Wood surfaces</p>
                                </Link>
                                <Link href={"/products/concrete"} className="h-1/3 hover:bg-purple-gradient p-2 rounded">
                                    <h2>Concrete Saver</h2>
                                    <p className="text-sm font-normal">Extend the life of your Concrete</p>
                                </Link>

                            </div>
                        )}
                    </div>
                    <h3 className="hover:text-purple-gradient h-8 py-1 my-auto">
                        <Link href={"/about"}>
                            About
                        </Link>
                    </h3>
                    <h3 className="hover:text-purple-gradient h-8 py-1 my-auto">
                        <Link href={"/science"}>
                            Science
                        </Link>
                    </h3>
                    <div className="text-base">
                        <Button link={"/quote"} title={"Free Quote"}/>
                    </div>
                </div>
                <div>
                    <Image src={"/NanoRestoLogo.png"} width={282} height={282} alt="Nano restoration logo" className="max-h-20 max-w-20"/>
                </div>

            </div>
        </div>
    )
}
