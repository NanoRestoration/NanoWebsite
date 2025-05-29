'use client'

import axiosInstance from "../axiosInstance";
import { useState } from "react";
export default function Quote() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");
    const [roof, setRoof] = useState(false);
    const [wood, setWood] = useState(false);
    const [concrete, setConcrete] = useState(false);
    const [other, setOther] = useState(false);
    const [quoteSent, setQuoteSent] = useState(false)
    const [formErr, setFormErr] = useState(false)
    const [phoneErr, setPhoneErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const validPhone = new RegExp(/^[+]?[0-9]?[-\s.]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
    const validEmail = new RegExp(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/);

    const quote = {
        name,
        email,
        phone,
        desc,
        roof,
        wood,
        concrete,
        other
    }

    function clearErr() {
        setFormErr(false);
        setPhoneErr(false);
        setEmailErr(false);
    }

    function submit() {
        setDisableButton(true);
        if (name === "" || email === "" || phone === "" || desc === "") {
            setFormErr(true);
            setDisableButton(false);
        } else {
            if (!validPhone.test(phone)) {
                setPhoneErr(true);
                setDisableButton(false);
                return;
            }
            if(!validEmail.test(email)){
                setEmailErr(true);
                setDisableButton(false);
                return;
            }
            axiosInstance.post('/send', quote)
                .then((response) => {
                    setQuoteSent(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="pt-24">
            <h1 className="text-3xl font-semibold text-center">Get your 100% Free Quote</h1>
            <div className="bg-offWhite text-black flex flex-col  lg:w-1/3 md:w-1/2 xs:w-2/3 w-11/12 p-10 m-auto my-10 rounded-2xl">
                {!quoteSent && (<h2 className="text-xl font-medium text-center">Get your Quote</h2>)}
                {quoteSent ? (
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">Your quote request has been submitted. </h1>
                        <p className="text-lg mt-10">A representative will reach out with detailed information regarding your request.</p>
                        <p className="text-2xl mt-10 font-semibold" >Thank You!</p>
                    </div>
                ) : (
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5" onClick={clearErr}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div>
                            
                            <label htmlFor="Phone">Phone:{phoneErr && (
                                <span className="text-red-600"> Invalid Phone Number</span>
                            )}</label>
                            <input type="tel" id="Phone" name="Phone" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Phone #" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="Email">Email:{emailErr && (
                                <span className="text-red-600"> Invalid Email</span>
                            )}</label>
                            <input type="email" id="Email" name="Email" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor="desc">Describe your project:</label>
                            <textarea type="" id="desc" name="desc" className="w-full bg-white p-1 rounded border border-black/50" rows={4}
                                placeholder="Example: Shingles, Wood, Concrete, what the surface area and age of the material is. Whether or not you'll be needing any additional services." value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                        </div>
                        <div className="">
                            <p>Im Interested In (Optional)</p>
                            <div className="mb-1">
                                <input type="checkbox" id="roof" name="roof" className="hover:cursor-pointer" checked={roof} onChange={(e) => setRoof(e.target.checked)}></input>
                                <label htmlFor="roof" className="ml-1 hover:cursor-pointer ">Roof treatment</label>
                            </div>
                            <div className="mb-1">
                                <input type="checkbox" id="wood" name="wood" className=" bg-white hover:cursor-pointer" checked={wood} onChange={(e) => setWood(e.target.checked)}></input>
                                <label htmlFor="wood" className="ml-1 hover:cursor-pointer">Wood treatment</label>
                            </div>
                            <div className="mb-1">
                                <input type="checkbox" id="concrete" name="concrete" className=" bg-white hover:cursor-pointer" checked={concrete} onChange={(e) => setConcrete(e.target.checked)}></input>
                                <label htmlFor="concrete" className="ml-1 hover:cursor-pointer">Concrete treatment</label>
                            </div>
                            <div className="mb-1">
                                <input type="checkbox" id="other" name="other" className=" bg-white hover:cursor-pointer" checked={other} onChange={(e) => setOther(e.target.checked)}></input>
                                <label htmlFor="other" className="ml-1 hover:cursor-pointer">Other/Unsure</label>
                            </div>
                        </div>
                    </div>
                    {formErr && (
                        <div>
                            <p className="text-red-600">Please ensure all fields are filled out</p>
                        </div>
                    )}
                    {!disableButton ? (
                        <div onClick={submit}
                        className="hover:cursor-pointer m-auto mt-5 font-medium bg-purple-gradient w-fit p-3 rounded-xl shadow-2xl drop-shadow-[5px_5px_0_darker-purple] drop-shadow-darker-purple hover:drop-shadow-[0_0_0_darker-purple] transition-all duration-300 ease-out text-white">
                        Get Quote
                    </div>
                    ) : (
                    <div
                        className="hover:cursor-pointer m-auto mt-5 font-medium bg-purple-gradient w-fit p-3 rounded-xl shadow-2xl  drop-shadow-darker-purple hover:drop-shadow-[0_0_0_darker-purple] transition-all duration-300 ease-out text-white">
                        Get Quote
                    </div>
                    )}
                    
                </div>)}
            </div>
        </div>
    )
}