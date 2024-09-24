"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto my-10 max-w-6xl">
      <a href="/" className="logo">
        <Image src="/logo.png" width={128} height={77} alt="Logo" />
      </a>

      <ul className="flex space-x-16 font-primary font-medium uppercase">
        <li>
          <a href="/" className="">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="">
            Products
          </a>
        </li>
        <li>
          <a href="/specifications" className="">
            Specifications
          </a>
        </li>
        <li>
          <a href="/about" className="">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="">
        <ShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
