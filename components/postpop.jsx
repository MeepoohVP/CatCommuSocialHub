"use client"
import { usePathname } from "next/navigation";
export default function PostPop() {
  const pathname = usePathname();
  return (
    <>
      <button
        onClick={() => document.getElementById("post_pop").showModal()}
        className={`${pathname==="/chat" ? "hidden" : ""} btn btn-accent btn-circle fixed bottom-4 right-4 text-3xl flex flex-col items-center justify-center btn-md z-30 tooltip tooltip-left`}
        data-tip="Create new post"
      >
        <div className="">+</div>
      </button>
      <dialog className="modal" id="post_pop">
        <div
          className={`md:modal-box w-full h-[100vh] md:w-1/2 md:h-auto bg-base-100 z-30 modal-middle py-0`}
        >
          <form method="dialog">
            <div className="flex items-start justify-between pt-1 md:pt-0">
                <button className="btn invisible"></button>
            <h2 className="text-2xl md:text-xl font-semibold">Create new post</h2>
            <button className="btn btn-sm relative -top-2 btn-circle btn-ghost">
              ✕
            </button></div>
          </form>
          <form action="" className="mt-12 md:mt-auto">
            <textarea autoFocus type="text" rows="4" className="textarea h-[36vh] text-2xl md:text-xl md:p-1 textarea-lg focus:outline-none focus:border-none hover:outline-none hover:border-none w-full resize-none" placeholder="text"/>
            
            <div className="w-auto h-auto cursor-pointer mx-6 md:mx-1 tooltip tooltip-right " data-tip="Add image">
            <label for="file" className="w-fit"><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-14 h-auto" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12"/>
</svg></label>
            <input type="file" id="file" className="w-0 file-input file-input-secondary hidden" />
          </div>
          <div className="text-center mt-12 md:mt-6">
          <button type="submit" className="btn text-base btn-accent btn-sm btn-wide">Post</button>
            </div></form>
        </div>
      </dialog>
    </>
  );
}
