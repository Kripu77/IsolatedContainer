import Image from "next/image"
import Ether from "../images/what-is-ethereum.webp";


const Eth = () => {
  return (
    <article className=" bg-cyan-100 lg:flex items-center text-justify p-10 ">
      <div className="max-w-2xl mx-auto">
        <Image placeholder="blur" src={Ether} objectFit="cover" />
      </div>
      <div className="max-w-4xl mx-auto text-gray-800 space-y-5">
        <h1 className="text-3xl font-bold"> What is Marpha?</h1>
        <p>
          Marpha is a technology that&apos;s home to digital money, global
          payments, and applications. The community has built a booming digital
          economy, bold new ways for creators to earn online, and so much more.
          It&apos;s open to everyone, wherever you are in the world – all you
          need is the internet.
        </p>
        <div className="space-y-6 md:space-x-8">
          <button className="rounded-md border-2 bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 hover:scale-105 transition-all duration-300">
            What is Marpha?
          </button>
          <button className="rounded-md border-2 border-black py-2 px-5 hover:scale-105 transition-all duration-300 hover:text-blue-700 hover:border-blue-700 ">
            More on digital money
          </button>
        </div>
      </div>
    </article>
  );
}

export default Eth