

export default function QualityCard({title, desc}) {
    return (
        <div className="bg-white rounded-2xl xs:w-4/5 h-full p-5 m-auto shadow-[0_0_7px] shadow-midnight-blue">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-lg mt-3">{desc}</p>
        </div>
    )
}