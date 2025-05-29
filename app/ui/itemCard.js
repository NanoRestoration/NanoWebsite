

export default function ItemCard({title, desc}) {
    return (
        <div className="lg:min-h-52 bg-darker-purple lg:w-1/4 text-center rounded-2xl lg:p-10 p-3">
            <h1 className="sm:text-3xl text-2xl font-semibold">{title}</h1>
            <p className="sm:text-lg text-base mt-5">{desc}</p>
        </div>
    )
}