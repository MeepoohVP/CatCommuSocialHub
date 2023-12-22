'use client'
import Link from "next/link"
import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";
export default function Nav() {
    const pathname = usePathname()
    const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="navbar lg:px-12 bg-base-100 flex-wrap sm:flex-nowrap sticky top-0 left-0 z-20">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl hover:bg-transparent text-accent">
            CatCommu
          </a>
        </div>
        <div className="order-1 sm:order-none mx-auto sm:navbar-center sm:flex">
          <Link href="/" className={`btn btn-ghost group`}>
            <div className="tooltip tooltip-bottom group-hover:tooltip-open" data-tip="home">
            <svg
            className={`${pathname === "/" ? 'fill-accent border-b-2 border-solid border-accent' : 'fill-current'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path
                d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM11 13V19H13V13H11Z"
                
              ></path>
            </svg></div>
          </Link>
          <div className="btn btn-ghost group">
            <div className="tooltip tooltip-bottom group-hover:tooltip-open" data-tip="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" fill="currentColor"></path></svg>
          </div></div>
          <div className="btn btn-ghost group">
          <div className="tooltip tooltip-bottom group-hover:tooltip-open" data-tip="marketplace">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z" fill="currentColor"></path></svg></div>
        </div></div>
        
        <div className="navbar-end">
          <Link
            href="/chat"
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-transparent btn-md m-0"
          >
            <div className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                
                className={`bi bi-chat-fill ${pathname === "/chat" ? "fill-accent hover:fill-accent" : "fill-current"}`}
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15" />
              </svg>
            </div>
          </Link>
          <Link
            href="/profile/post"
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle ${pathname === "/profile/post" ? 'bg-accent hover:bg-accent' : ''}`}
          ><div className="tooltip tooltip-bottom" data-tip="profile">
            <div className="w-11">
              <img className="rounded-full"
                alt="Profile"
                src="../garfield.jpeg"
              />
            </div></div>
          </Link>
        </div>
      </div>
        
        
    </>
  );
}
