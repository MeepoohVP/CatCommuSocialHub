"use client"
import NavProfile from '@/components/navprofile'

export default function Layout({ children }) {
  return (
    <>
    <main className="bg-base-300 md:bg-base-200 w-full md:w-[75%] mx-auto">
        <div className="w-full h-[40vh] bg-secondary glass"></div>
        <div className="relative -top-24 flex flex-col">
          <figure>
            <img
              className="rounded-full w-36 h-36 mx-auto border-2 border-solid border-white"
              alt="profile"
              src="../garfield.jpeg"
            />
          </figure>
          <div className="self-center font-semibold text-lg ml-8">
            Username   <button className="btn btn-sm btn-ghost hover:bg-transparent tooltip tooltip-right" data-tip="edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
            </button>
          </div>
          <NavProfile/>
          {children}
        </div>
      </main></>
  )
}
