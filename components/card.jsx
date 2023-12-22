"use client"
import { useState } from "react";
import Link from "next/link";
export default function Card(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="card w-[90%] lg:w-[40%] rounded-none mb-8 bg-base-100">
      <div className="h-auto flex mx-4 my-2">
        {" "}
        <Link href="profile/post">
        <img
          className="rounded-full w-12"
          alt="account"
          src={props.account}
        /></Link>
        <div className="ml-2">
          <Link href="/profile/post"><div className="font-semibold">name</div></Link>
          <div className="text-xs">3 hours</div>
        </div>
      </div>
      <div className="ml-4 mb-2">My name is Garfield.</div>
      <figure>
        <img className="w-full"
          src={props.picture}
          alt="picture"
        />
      </figure>
      <ul className="actions flex items-center ">
        <li>
            <button className="btn btn-ghost hover:bg-transparent" onClick={() => setClicked(current => !current)}>
          {" "}
          <svg className={`${clicked ? "fill-red-400 hover:fill-red-400" : "fill-current hover:fill-white/70"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"
              
            ></path>
          </svg></button>
        </li>
        <li>
            <button className="btn btn-ghost hover:bg-transparent">
            <svg
            className="bi bi-chat-right-fill fill-current hover:fill-white/70"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
          </svg></button>
          
        </li>
        <li>
            <button className="btn btn-ghost hover:bg-transparent">
            <svg className="fill-current hover:fill-white/70" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
            </button>
          
        </li>
      </ul>
    </div>
  );
}
