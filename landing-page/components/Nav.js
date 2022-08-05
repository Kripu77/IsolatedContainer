const Nav = () => {
  return (
    <section className="sticky z-10 md:flex justify-between px-10 py-5 items-center text-center">
      <svg
        className="hover:scale-150 transition-all duration-300"
        width="22"
        height="44"
        viewBox="0 0 115 182"
        fill="none"
      >
        <path
          d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z"
          fill="#F0CDC2"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
        <path
          d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z"
          fill="#C9B3F5"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
        <path
          d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z"
          fill="#88AAF1"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
        <path
          d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z"
          fill="#C9B3F5"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
        <path
          d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z"
          fill="#F0CDC2"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
        <path
          d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z"
          fill="#B8FAF6"
          stroke="#1616B4"
          strokeLinejoin="round"
        ></path>
      </svg>

      <section>
        <ul className="md:flex md:space-x-6">
          <li className="hover:text-purple-600 transition-all hover:duration-850 ease-in-out ">
            Home
          </li>
          <li className="hover:text-purple-600 transition-all hover:duration-850 ease-in-out ">
            Trade
          </li>
          <li className="hover:text-purple-600 transition-all hover:duration-850 ease-in-out ">
            About
          </li>
          <li className="hover:text-purple-600 transition-all hover:duration-850 ease-in-out ">
            Learn
          </li>
          <li className="hover:text-purple-600 transition-all hover:duration-850 ease-in-out ">
            Developers
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Nav;
