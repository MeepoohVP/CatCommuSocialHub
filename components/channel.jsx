import Link from "next/link"
export default function Channel(){
    return (
        <div className="w-full relative border-b-2 border-solid border-b-base-100 px-6 py-6 flex items-center justify-between"><img className="w-1/6 rounded-full" src="../garfield.jpeg" alt="" />
            <div className=""><h4 className="font-semibold text-md">Name</h4><p className="text-white/70 text-sm">lorem ipsum slalssaa assaip......</p></div>
            <div className="text-right"><p>12.00</p><p className="btn btn-sm btn-primary rounded-xl">2</p></div></div>
    )
}