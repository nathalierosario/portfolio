import Image from "next/image";
import HeroText from "./hero-text";
import Typewriter from "./typewriter";

export default function Hero() {
  return (
    <div className="flex font-sans">
      <Image
        src="/main-img.png"
        alt="nathalie.jpg"
        width={500}
        height={500}
        quality={100}
      />

      <div className="flex-grow self-center">
        <HeroText />
        {/* <Typewriter /> */}
      </div>
    </div>
  );
}
