import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];
  return (
    <header className="flex items-center justify-between p4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Logo" width={180} height={80} />
        <nav>
          <ul className="md:flex gap-8 hidden">
            {Menu.map((item) => (
              <Link href={item.path} key={item.id}>
                <li
                  key={item.id}
                  className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
                >
                  {" "}
                  {item.name}{" "}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <Button>Get Started</Button>
    </header>
  );
};

export default Header;
