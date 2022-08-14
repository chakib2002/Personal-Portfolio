import React from "react";

export default function Section() {
  return (
    <div className="mx-5 lg:mx-10 py-10">
      <div className="md:grid md:grid-cols-4 md:space-x-8 place-content-stretch">
        <div className="col-span-3">
          <div className="grid space-y-5 md:space-y-0 md:grid-cols-3 md:space-x-5">
            <div className="border-2 border-white py-5 px-2 rounded-3xl ">
              <input
                type="text"
                className="border-none focus:outline-none bg-slate-900 text-white w-full h-full px-3"
                placeholder="Name"
              />
            </div>
            <div className="border-2 border-white py-5 px-2  rounded-3xl ">
              <input
                type="text"
                className="border-none focus:outline-none bg-slate-900 text-white w-full h-full px-3"
                placeholder="Email"
              />
            </div>
            <div className="border-2  py-5 px-2  rounded-3xl ">
              <input
                type="text"
                className="border-none focus:outline-none bg-slate-900 text-white w-full h-full px-3"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="">
            <textarea
              type="text"
              className="focus:outline-none resize-none border-2 green-500 py-5 px-5 rounded-3xl mt-8 relative bg-slate-900 text-white h-full w-full"
              placeholder="Message"
              rows={8}
            />
          </div>
        </div>

        <button className="rounded-3xl py-5 md:py-0 w-full md:w-auto font-semibold tracking-widest my-5 md:my-0  text-center active:scale-95 lg:hover:scale-95 lg:active:scale-90 border-2 text-white transition duration-200 ease-out">
          Send
        </button>
      </div>
    </div>
  );
}
