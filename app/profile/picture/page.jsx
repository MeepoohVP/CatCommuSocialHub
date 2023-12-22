export default function Picture(){
    return (
        <><div className="relative flex flex-wrap gap-4 ml-6 mt-4">
            <figure className="w-1/3 md:w-1/6 md:h-42 relative">
            <a href="../cat.jpeg"><img src="../cat.jpeg" alt="" className="md:h-full relative object-cover rounded-xl"/></a>
            </figure>
            <figure className="w-1/3 md:w-1/6 md:h-42 relative">
            <a href="../garfield.jpeg"><img src="../garfield.jpeg" alt="" className="md:h-full relative object-cover rounded-xl" /></a>
            </figure>
            </div></>
    );
}