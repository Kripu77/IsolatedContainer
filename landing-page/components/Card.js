import Image from "next/image";
import wallet from "../images/wallet-cropped.webp"; 
import data from "../Data/landingData";
import { useMarphaStore } from "../store/dataStore";

const Card = () => {
const marpha = useMarphaStore((state)=>state.dataHouse);
console.log(marpha)
  return (
    <section className=" lg:flex flex-row flex-wrap  text-left mx-auto   md:p-10 ">
      {
        data.map((singleData)=>{
          const {id, header, Description, img} = singleData;

          return (
            <div
              className="md:w-screen   mb-10 mx-auto rounded-md border shadow-lg cursor-pointer border-gray-400 hover:scale-105 transition-all duration-500"
              key={id}
            >
              <div className="bg-gradient-to-r from-cyan-200 to-blue-100 md:pl-2 text-center ">
                <Image
                  src={img}
                
                  objectFit="cover"
                  height="278px"
                  width="328px"
                />
              </div>
              <div className=" p-6 md:p-12 md:leading-10 leading-7 ">
                <h1 className="font-bold text-2xl  ">{header}</h1>
                <p className="text-gray-600">{Description}</p>
              </div>
            </div>
          );

        })
      }
      
      
    </section>
  );
}

export default Card