import Link from "next/link";

export default function Button({link, title}) {
    return (
        <div className=" font-medium bg-purple-gradient w-fit p-3 rounded-xl shadow-2xl drop-shadow-[5px_5px_0_darker-purple] drop-shadow-darker-purple hover:drop-shadow-[0_0_0_darker-purple] transition-all duration-300 ease-out text-white">
            <Link href={link} >{title}</Link>
        </div>
    )
}