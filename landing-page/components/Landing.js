

const Landing = () => {
  return (
    <section className="py-10 mx-10 text-center leading-10">
      <div className=" max-w-xs mx-auto">
        <h1 className="text-gray-500 leading-10 text-orange-600 font-italic text-lg border-b-2 transition-all duration-300 tracking-wider hover:border-orange-600">
          Launching: 2022/10/10
        </h1>
      </div>
      <h1 className="font-bold text-gray-700 text-3xl"> Welcome to Marpha</h1>
      <p className="text-xl text-gray-600 subpixel-antialiased my-4 ">
        Marpha is based on Ethereum network, the community-run technology
        powering the cryptocurrency Maprh (MPH) and thousands of decentralized
        applications.
      </p>
      <button className=" border-2 border-gray-800 px-2 my-4 rounded-md transition-all duration-500  hover:text-purple-600 hover:border-purple-600 hover:scale-110 hover:drop-shadow-2xl">
        Explore Marpha
      </button>
    </section>
  );
}

export default Landing