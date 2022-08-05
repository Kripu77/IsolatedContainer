import Image from "next/dist/client/image";
import heroImage from "../images/hero.webp";

const Hero = () => {
  return (
    <section>
      <div className="bg-blue-600 py-6 text-center text-white">
        <p>The Merge is approaching, and comes with changes to Ethereum.</p>
        <span>More info on the Merge.</span>
      </div>

      <Image src={heroImage} layout="responsive" objectFit="cover" />
    </section>
  );
}

export default Hero