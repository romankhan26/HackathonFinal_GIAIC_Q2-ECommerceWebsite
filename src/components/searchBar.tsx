import Image from "next/image";
import HandBag from "../../assets/Handbag.png";
import Link from "next/link";
function SearchBar() {
    return (
      <div className="flex items-center justify-end w-full lg:w-[40%] md:w-[333px]">
        <div className="h-[34px] w-[40%] md:w-[290px] text-sm md:text-[13px] flex items-center justify-between rounded-full border border-[#FF9F0D] px-3 text-[#CACACA]">
          Search...
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"
            alt="search--v1"
          />
        </div>
        <Image
          width="24"
          height="24"
          className="h-6 w-6 ml-2"
          src={HandBag}
          alt="like--v1"
        />
      </div>
    );
  }
  export default SearchBar;
  