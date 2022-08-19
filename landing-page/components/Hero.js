import Image from "next/dist/client/image";
import heroImage from "../images/hero.webp";

const Hero = () => {
  return (
    <section>
      <div className="bg-blue-600 py-2 md:py-6 text-center text-white">
        <p>The Merge is approaching, and comes with changes to Marpha.</p>
        <span className="underline hover:no-underline ">More info on the Merge.</span>
      </div>

      <Image src={heroImage} layout="responsive" objectFit="cover" placeholder="blur" />
    </section>
  );
}

export default Hero