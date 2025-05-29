'use client'
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/Gonano_Logo.svg"
import { useState } from "react"
import Button from "./button"

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState({ height: '0px', display: "none" })
    const [productTap, setProductTap] = useState({ height: '0px' })
    const [showProducts, setShowProducts] = useState(false)
    function open() {
        if (!isOpen) {
            setProductTap({ height: '0px', })
            setShow({ translate: "0 -328px"})
            setShow({ height: "328px"})
            setShowProducts(false)
        } else {
            setShow({ translate: '0 0px'})
            setShow({ height: "0px"})
        }
        setIsOpen(!isOpen)
    }
    function openProducts() {
        if (showProducts) {
            setProductTap({ height: '0px', })
            setShow({ height: "328px"})
        } else {
            setProductTap({ height: '112px' })
            setShow({ height: "420px"})
        }
        setShowProducts(!showProducts)
    }


    return (
        <div className="fixed w-full z-20 ">
            <div className="bg-midnight-blue/95 h-24 w-full px-10 flex justify-center sm:hidden ">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            width={125}
                            height={90}
                            alt="Gonano LOGO Image"
                            className="" />
                    </Link>
                </div>

                <div className="h-16 w-16 ml-auto my-auto bg-purple-gradient rounded-4xl flex items-center justify-center hover:cursor-pointer min-h-min" onClick={() => open()}>
                    <div className="w-10 h-10">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M5 7H19" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M5 12L19 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M5 17L19 17" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
            <div className="transition-all duration-500 overflow-hidden h-fit" style={show}>
                <div className="w-full bg-midnight-blue/95 transition-all duration-500 overflow-hidden ease-in-out min-h-fit pt-5">
                    <div className="px-10 mb-10" onClick={() => open()}>
                        <Button link={"/quote"} title={"Free Quote"} />
                    </div>
                    <div className="w-full flex flex-col gap-1 mb-10">
                        <p className="w-full text-2xl font-semibold px-10" onClick={() => openProducts()}>Products</p>
                        <div style={productTap} className="transition-all duration-500 overflow-hidden ease-in-out bg-white text-black w-full px-10">
                            <Link href={"/products/shingle"} onClick={() => open()}>
                                <p className="text-lg hover:text-purple-gradient font-semibold active:text-purple-gradient">Shingle Saver</p>
                            </Link>
                            <Link href={"/products/membrane"} onClick={() => open()}>
                                <p className="text-lg hover:text-purple-gradient font-semibold active:text-purple-gradient">Elastometric Membrane</p>
                            </Link>
                            <Link href={"/products/wood"} onClick={() => open()}>
                                <p className="text-lg hover:text-purple-gradient font-semibold active:text-purple-gradient">Wood Saver</p>
                            </Link>
                            <Link href={"/products/concrete"} onClick={() => open()}>
                                <p className="text-lg hover:text-purple-gradient font-semibold active:text-purple-gradient">Concrete Saver</p>
                            </Link>
                        </div>
                    </div >
                    <div className="hover:text-purple-gradient w-full px-10 mb-10" onClick={() => open()}>
                        <Link href={"/science"}><p className="text-2xl font-semibold active:text-purple-gradient">Science</p></Link>
                    </div>
                    <div className="hover:text-purple-gradient w-full px-10 mb-10" onClick={() => open()}>
                        <Link href={"/about"}><p className="text-2xl font-semibold active:text-purple-gradient">About</p></Link>
                    </div>


                </div>
            </div>

        </div>
    )
}