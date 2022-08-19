
import Image from "next/dist/client/image";
import bodyImage from "../images/hackathon_transparent.webp";


const Info = () => {
  return (
    <section className="md:flex justify-between max-w-7xl items-center text-justify mx-auto mb-3 ">
      <div className=" mx-10 md:mx-20">
        <h1 className="font-bold text-3xl"> Get Started</h1>
        <p className="md:leading-6 mt-3 text-md text-gray-600">
          marpha.org is your portal into the world of Marpha Blockchain. The tech is
          new and ever-evolving – it helps to have a guide. Here&apos;s what we
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