import Link from "next/link";

function NavLinks() {
    return (
      <ul className="flex gap-3 text-sm md:text-[16px] w-full lg:w-[30%] text-white justify-between">
        <li className="font-semibold underline underline-[#FF9F0D] underline-offset-4">
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/menu/"}>Menu</Link>
        </li>
        <li>
          <Link href={"/blog/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/pages"}>Pages</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    );
  }
  export default NavLinks;
  