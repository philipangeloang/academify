import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignoutCard from "@/components/signout-card";
import SigninCard from "@/components/signin-card";

import { BiExclude } from "react-icons/bi";
import Link from "next/link";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full mx-auto bg-black">
      <div className="mx-auto max-w-7xl text-white p-5 flex justify-between">
        <div className="flex justify-center items-center gap-10">
          {/* Logo */}
          <Link href="/">
            <div className="flex gap-2">
              <BiExclude size={30} />
              <p className="font-black text-xl ">academify</p>
            </div>
          </Link>

          {/* Links for a signed in user */}
          {session?.user ? (
            <ul className="flex justify-center items-center gap-5 text-sm font-semibold">
              <Link href="/dashboard">
                <li className="hover:opacity-80">Dashboard</li>
              </Link>
              <Link href="/panel">
                <li className="hover:opacity-80">Panel</li>
              </Link>
            </ul>
          ) : null}
        </div>

        <ul className="flex gap-5 text-sm justify-center items-center font-semibold">
          <li>{session?.user ? <SignoutCard /> : <SigninCard />}</li>
          <li>
            <Button variant="blue" size="sm">
              Documentation
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
