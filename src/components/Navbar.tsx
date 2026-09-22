import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import { useAuth } from "@/stores/UseAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex container h-full mx-auto justify-between items-center px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-transparent"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent
              side="left"
              showCloseButton={false}
              className="w-70 p-0"
            >
              {/* Menu Burger */}
              <SheetHeader className="border-b p-6">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the website.
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Burger */}
              <nav className="flex flex-col gap-4 p-6">
                <Link to="/" className="hover:text-[#004AC6]">
                  Home
                </Link>
                <Link to="/about" className="hover:text-[#004AC6]">
                  About Us
                </Link>
                <Link to="/services" className="hover:text-[#004AC6]">
                  Services
                </Link>
                <Link to="/teams" className="hover:text-[#004AC6]">
                  Teams
                </Link>
                <Link to="/blog" className="hover:text-[#004AC6]">
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block h-10 ">
          <img
            src="/LogoBgWhite.png"
            alt="LogoBgWhite"
            className="h-full w-auto"
          />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-[16px] font-bold">
        <Link to="/" className="hover:text-[#004AC6]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#004AC6]">
          About Us
        </Link>
        <Link to="/services" className="hover:text-[#004AC6]">
          Services
        </Link>
        <Link to="/teams" className="hover:text-[#004AC6]">
          Teams
        </Link>
        <Link to="/blog" className="hover:text-[#004AC6]">
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-1 md:gap-4">
            <p>Welcome, {user.name}</p>
            <Button variant="destructive" onClick={logout} className="">
              Logout
            </Button>
            <Link to="/createblog">
              <Button className="bg-[#2563EB] text-white  hover:text-white hover:bg-blue-400">
                Create New Blog
              </Button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-[#2563EB] text-white hover:text-white hover:bg-blue-400"
            >
              Login Here
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
