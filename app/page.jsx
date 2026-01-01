import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-[50px]"></div>

      <div className="flex flex-col justify-center items-center  
     p-3 text-white">
        <div className="flex flex-col justify-center">
          <div className="logo font-bold text-5xl flex justify-center items-center">
            <span className="text-[#F7A6B8]">Don</span>
            <span className="text-[#48c9ea]">ut~</span>
            <span className='text-[#f7a6b800]'>-</span>
            <span className='w-20'><img src="/donuts.png" alt="" /></span>
          </div>

          <div className="text-lg">
            A simple way to bring people together and support what matters — seamlessly and securely
          </div>
        </div>

        <div className="mt-10 text-xl font-medium">
          <a href="/explore"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center leading-6 mx-1.5  ">Start Now</button></a>

          <a href="/read"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center leading-6 mx-1.5">Read more</button></a>
        </div>


        <div className="min-w-full bg-white min-h-1 opacity-10 mt-20"></div>


        <div className="mt-10 flex flex-col">
          <div className="flex justify-center">
            <h1 className="text-2xl font-medium">Your Friends can get you Donut</h1>
          </div>
          <div className="mt-15 flex justify-between gap-60  ">

            <div className="flex flex-col justify-center items-center ">
              <img className="bg-slate-500 rounded-full p-2 w-30" src="/work-from-home.png" alt="" />

              <h2 className="mt-5 text-lg font-medium">Friends want to help</h2>

              <p className="mt-2 text-center text-sm">Your friends are available for your help.</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <img className="bg-slate-500 rounded-full p-2 w-30" src="/bitcoin.png" alt="" />

              <h2 className="mt-5 text-lg font-medium">Friends want to help</h2>

              <p className="mt-2 text-center text-sm">Your friends are available for your help.</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <img className="bg-slate-500 rounded-full p-2 w-30" src="/social-services.png" alt="" />

              <h2 className="mt-5 text-lg font-medium">Friends want to help</h2>

              <p className="mt-2 text-center text-sm">Your friends are available for your help.</p>
            </div>
          </div>
        </div>


        <div className="min-w-full bg-white min-h-1 opacity-10 mt-20"></div>


        <div className="mt-10 flex flex-col">
          <div className="flex justify-center mb-7">
            <h1 className="text-2xl font-medium">Learn More About Us</h1>
          </div>
          <div className="mb-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pD-pXbY-GH4?si=t_e7fFzsLsjWXmvM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>

  );
}
