"use client"
import Channel from "@/components/channel";
import { usePathname } from "next/navigation";
export default function Post() {
  return (
    <main className="relative h-full">
      <div className="fixed h-full md:h-[87.5%] w-full max-w-lg mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 md:w-[42%] lg:w-[30%] mt-2 overflow-auto">
                <div className="sticky top-0 z-30"><input type="text" className="input w-full bg-base-300" placeholder="search"/></div>
            <Channel/><Channel/><Channel/><Channel/><Channel/><Channel/><Channel/><Channel/><Channel/>
            </div>
            <div className="fixed right-0 w-full md:h-[87.5%] md:w-[69%] hidden lg:block">
                <div className="bg-base-300 h-[10%] flex items-center font-semibold"><h3 className="ml-4">Name</h3></div>
                <div className="overflow-y-scroll h-[80%] overflow-x-hidden bg-base-200"><div className="chat chat-start">
  <div className="chat-bubble mt-4">It's over Anakin, <br/>I have the high ground.</div>
  <div className="chat-bubble mt-12">It's over Anakin, <br/>I have the high ground.</div>
  <div className="chat-bubble mt-12">It's over Anakin, <br/>I have the high ground.</div>
  <div className="chat-bubble mt-12">It's over Anakin, <br/>I have the high ground.</div>
  <div className="chat-bubble mt-12">It's over Anakin, <br/>I have the high ground.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">You underestimate my power!</div>
</div>

</div><div className="flex h-[12%] bg-base-300 px-4 py-2"><input type="text" className="input w-full" /><button className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg></button></div>
            </div>
    </main>
  );
}
