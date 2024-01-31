import { Button } from "@/components/ui/button";
import SigninCard from "@/components/signin-card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignoutCard from "./signout-card";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <nav className="w-full mx-auto bg-black">
      <div className="mx-auto max-w-7xl text-white p-5 flex justify-between">
        {/* Logo */}
        <h1 className="flex justify-center items-center gap-5">
          <p className="font-black text-xl ">academify</p>
          {session?.user ? (
            <ul className="flex justify-center items-center gap-5 text-sm">
              <li>Dashboard</li>
              <li>Panel</li>
            </ul>
          ) : null}
        </h1>

        <ul className="flex gap-5 text-sm justify-center items-center">
          <li>{session?.user ? <SignoutCard /> : <SigninCard />}</li>
          <li>
            <Button variant="blue" size="sm">
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
