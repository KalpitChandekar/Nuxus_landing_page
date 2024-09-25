import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="absolute top-0 right-0 -z-10">
        <div className="relative">
          <div className="absolute right-10 top-52 md:right-[33rem] md:top-[23rem] w-[100px] md:w-[250px]">
            <Image
              src="/circle1.png"
              width={373}
              height={314}
              alt="Hero"
              className=""
            />
          </div>
          <div className="absolute right-0 top-20 md:right-72 md:top-36 w-[170px] md:w-[350px]">
            <Image
              src="/circle2.png"
              width={567}
              height={567}
              alt="Hero"
              className=""
            />
          </div>
          <div className="absolute right-0 -top-10 w-[200px] md:w-[450px]">
            <Image
              src="/circle3.png"
              width={716}
              height={634}
              alt="Hero"
              className=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
