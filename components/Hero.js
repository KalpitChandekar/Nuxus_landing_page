import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:flex items-center justify-center max-w-4xl mx-auto mt-20 z-10 px-10 md:px-0">
      <div className="w-full">
        <div className="mx-auto max-w-sm">
          <h1 className="uppercase font-extrabold font-secondary text-2xl gradient-text">
            Laptops to the future
          </h1>
          <p className="font-medium text-[#747474]">
            The new 18 inch bezeless display offering a 4K display with smart
            screen feature.
          </p>
          <div className="mt-10 flex gap-2">
            <button class="px-6 py-2 border-2  text-black font-bold border-primary-gradient">
              SHOP NOW
            </button>

            <button class="px-6 py-2 bg-gradient-to-r from-[#9B77E7] to-[#1600A0] text-white font-bold hover:opacity-90 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 md:mt-0">
        <Image
          src="/laptop.png"
          width={500}
          height={500}
          alt="Hero"
          className=""
        />
      </div>
    </section>
  );
};
export default Hero;
