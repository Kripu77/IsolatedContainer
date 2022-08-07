import list from "../Data/navData,js";
import React from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [width, setWidth] = React.useState("");
  const [scrollPosition, setScrollPosition] = React.useState("");
  const [scrolled, setIsScrolled] = React.useState(false);
  const [isScrolledUp, setisScrolledUp] = React.useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-sm bg-black font-black transition ease transform duration-300`;

  //width handler function
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  //scroll handler
  const handleScroll = () => {
    let scroll = window.scrollY;
    setScrollPosition(scroll);
    if (scrollPosition > 150 && scrollPosition > scroll) {
      setisScrolledUp(true);
    } else {
      setisScrolledUp(false);
    }
  };

  //track width
  React.useEffect(() => {
    //handles changing width
    window.addEventListener("resize", handleWidth);

    //handles scroll position
    window.addEventListener("scroll", handleScroll);

    if (width > 770) {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
    if (width < 770) {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      }

      if (!isOpen) {
        document.body.classList.remove("overflow-hidden");
      }
    }

    //handle side effect
    return () => {
      window.removeEventListener("resize", handleWidth);

      window.removeEventListener("scroll", handleScroll);
    };
  }, [width, isOpen, scrollPosition]);

  return (
    <section
      className={
        isScrolledUp
          ? "bg-opacity-100 sticky top-0 z-10 md:flex justify-between px-10 py-5 items-center text-center bg-white border-b-2 border-gray-200 transition-all duration-700"
          : "md:flex justify-between  px-10 py-5 items-center text-center bg-white border-b-2 border-gray-200 bg-opacity-50"
      }
    >
      <section className="flex justify-between items-center">
        <svg
          className="hover:scale-150 transition-all duration-500"
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
        <div className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </div>
      </section>
      <section>
        <ul
          className={
            isOpen
              ? " fixed top-20 z-10 left-0 min-h-screen min-w-full transition-all bg-white bg-opacity-95 duration-300 text-xl "
              : " hidden  md:flex md:space-x-6"
          }
        >
          {list.map((li, index) => {
            return (
              <div key={index}>
                <li
                  className={
                    isOpen
                      ? "py-5 text-4xl"
                      : "hover:text-purple-600 transition-all hover:duration-850 ease-in-out  border-b-2 border-transparent hover:border-purple-500"
                  }
                >
                  {li.name}
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Nav;
