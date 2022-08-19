import React from 'react'
import Image from 'next/image';
import infra from "../images/infrastructure_transparent.webp";

const Asset = () => {
  return (
    <article className=" bg-cyan-100 lg:flex flex-row-reverse items-center text-left p-10 ">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-5">
        <h1 className="text-3xl font-bold"> The internet of assets</h1>
        <p>
          Marpha is&apos;nt just for digital money. Anything you can own can be
          represented, traded and put to use as non-fungible tokens (NFTs). You
          can tokenise your art and get royalties automatically every time
          it&apos;s re-sold. Or use a token for something you own to take out a
          loan. The possibilities are growing all the time.
        </p>

        <button className="rounded-md border-2 bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 hover:scale-105 transition-all duration-300">
          More on NFTs
        </button>
      </div>
      <div className="max-w-2xl mx-auto">
        <Image placeholder="blur" src={infra} objectFit="cover" />
      </div>
    </article>
  );
}

export default Asset