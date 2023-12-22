import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavProfile(){
    const pathname = usePathname();
    return (
        <>
        <div className="navbar">
              <Link href="/profile/post" className={`btn btn-ghost ${pathname==="/profile/post" ? "text-accent hover:bg-transparent rounded-none border-b-2 border-solid border-b-accent hover:border-b-accent":"text-current"}`}>Post</Link>
              <Link href="/profile/picture" className={`btn btn-ghost ${pathname==="/profile/picture" ? "text-accent hover:bg-transparent rounded-none border-b-2 border-solid border-b-accent hover:border-b-accent":"text-current"}`}>Picture</Link>
          </div>
        </>
    );
}