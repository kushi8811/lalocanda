import Image from "next/image";
import logo from "@/public/images/nobglogo.png";
function Logo() {
  return (
    <Image
      src={logo}
      alt="Il Vespro Logo"
      width={300}
      height={300}
      className="mx-auto m-10 md:mx-0 transition-transform hover:scale-105"
    />
  );
}

export default Logo;
