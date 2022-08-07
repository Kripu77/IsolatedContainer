import Image from "next/image";
import wallet from "../images/wallet-cropped.webp"; 
import eth from "../images/eth.webp";
import doge from "../images/doge-computer.webp";
import future from "../images/developers-eth-blocks.webp";

const Card = () => {
  return (
    <section className=" lg:flex  text-left mx-auto lg:space-x-10 ">
      <div className="max-w-3xl mb-10 mx-auto rounded-md  border cursor-pointer border-gray-400 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-r from-cyan-200 to-blue-100">
          <Image
            src={wallet}
            placeholder="blur"
            objectFit="cover"
            height="238px"
            width="328px"
          />
        </div>
        <div className="p-5 text-lg leading-10">
          <h1 className="font-bold ">Pick a Wallet</h1>
          <p className="text-gray-600">
            {" "}
            A wallet lets you connect to Marpha on Ethereum network and manage
            your funds on clicks.
          </p>{" "}
        </div>
      </div>
      <div className="max-w-3xl mb-10 mx-auto rounded-md border cursor-pointer border-gray-400 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-r from-cyan-200 to-blue-100">
          <Image
            src={eth}
            placeholder="blur"
            objectFit="cover"
            height="238px"
            width="328px"
          />
        </div>
        <div className="p-5 text-lg leading-10 ">
          <h1 className="font-bold ">Get Marpha</h1>
          <p className="text-gray-600">
            {" "}
            Maprha is the heart of the Ethereum Blockchain and MPH is the
            currency of Marpha Chain. Buy MPH now on Binance.
          </p>{" "}
        </div>
      </div>
      <div className="max-w-3xl mb-10 mx-auto rounded-md border cursor-pointer border-gray-400 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-r from-cyan-200 to-blue-100">
          <Image
            src={doge}
            placeholder="blur"
            objectFit="cover"
            height="238px"
            width="328px"
          />
        </div>
        <div className="p-5 text-lg leading-10 ">
          <h1 className="font-bold ">Use Dapp</h1>
          <p className="text-gray-600">
            {" "}
            Use the Maprha Dapp powered by Ethereum and check out what you can
            achieve.
          </p>{" "}
        </div>
      </div>
      <div className="max-w-3xl mb-10 mx-auto rounded-md border cursor-pointer border-gray-400 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-r from-cyan-200 to-blue-100">
          <Image
            src={future}
            placeholder="blur"
            objectFit="cover"
            height="238px"
            width="328px"
          />
        </div>
        <div className="p-5 text-lg leading-10 ">
          <h1 className="font-bold ">Start Building</h1>
          <p className="text-gray-600">
            {" "}
            Build your own on top of our Maprha JS SDK, please explore the DOCS and get connected via Discord Server.
          </p>{" "}
        </div>
      </div>
    </section>
  );
}

export default Card