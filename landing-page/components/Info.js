
import Image from "next/dist/client/image";
import bodyImage from "../images/hackathon_transparent.webp";


const Info = () => {
  return (
    <section className="flex justify-between max-w-7xl text-justify mx-auto ">
      <div className="mx-20 ">
        <h1 className="font-bold text-3xl"> Get Started</h1>
        <p className="leading-6 mt-3 text-lg text-gray-600">
          ethereum.org is your portal into the world of Ethereum. The tech is
          new and ever-evolving – it helps to have a guide. Here's what we
          recommend you do if you want to dive in.
        </p>
      </div>
      <div>
        <Image src={bodyImage} objectFit="cover" />
      </div>
    </section>
  );
}

export default Info