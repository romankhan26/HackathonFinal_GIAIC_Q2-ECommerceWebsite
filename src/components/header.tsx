import Image from "next/image";
import Link from "next/link";
import NavLinks from "./navlinks";
import SearchBar from "./searchBar";

function FoodTuck() {
  return (
    <div className="font-bold text-lg md:text-[20px] justify-center text-center leading-[32px] text-white">
      <span className="text-[#FF9F0D]">Food</span>tuck
      <br />
    </div>
  );
}

export default function Header() {
  return (
    <div className="z-40 relative text-sm mx-20 sm:flex sm:flex-col">
      <br />
      <FoodTuck />
      <div className="flex justify-between items-center px-5 lg:px-10 xl:px-18 2xl:px-26">
        <div className="flex-1 hidden lg:flex">
          <NavLinks />
        </div>
        <div className="flex-1 hidden lg:flex justify-end">
          <SearchBar />
        </div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/windows/100/menu--v1.png"
          alt="menu--v1"
          className="lg:hidden cursor-pointer"
        />
      </div>
      <br />
    </div>
  );
}
