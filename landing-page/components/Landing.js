

const Landing = () => {
  return (
    <section className="py-10 mx-10 text-center leading-10">
      <h1 className="font-bold text-gray-700 text-3xl"> Welcome to Marpha</h1>
      <p className="text-xl text-gray-600 subpixel-antialiased my-4 ">
        Marpha is based on Ethereum network, the community-run technology powering the cryptocurrency   ether (ETH) and thousands of decentralized applications.
      </p>
      <button className=" border-2 border-gray-800 px-2 my-4 rounded-md transition-all duration-500  hover:text-purple-600 hover:border-purple-600 hover:scale-110 hover:drop-shadow-2xl">
        Explore Marpha
      </button>
    </section>
  );
}

export default Landing