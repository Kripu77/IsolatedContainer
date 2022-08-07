import Image from "next/image";
import infra from "../images/impact_transparent.webp";

const Explore = () => {
  return (
    <section className=" items-center bg-orange-200 text-left  p-10 ">
      <div className=" lg:flex flex-row-reverse items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <Image src={infra} placeholder="blur" objectFit="cover" />
        </div>
        <div className=" max-w-4xl mx-auto space-y-6  py-5 ">
          <h1 className="text-3xl font-bold"> A fairer financial system</h1>
          <p>
            Today, billions of people can’t open bank accounts, others have
            their payments blocked. Ethereum's decentralized finance (DeFi)
            system never sleeps or discriminates. With just an internet
            connection, you can send, receive, borrow, earn interest, and even
            stream funds anywhere in the world.
          </p>{" "}
          <button className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition-all duration-300">
            {" "}
            Explore DeFi
          </button>
        </div>
      </div>
    </section>
  );
}

export default Explore