import Image from "next/image"
import BSVCODE from "../assets/bsvcode.png"
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
export default  function Footer() {
  return (
    <footer className="px-8 py-7 sm:flex-row border-t-2 border-t-zinc-800 gap-4 flex justify-start items-center">
      <div className="flex gap-6 items-center justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Image src={BSVCODE} width={100} height={100} alt="bsvcode logo" />
        <p>Copyright &copy; 2022</p>
      </div>      
    </footer>
  );
}