"use client";

import MainWrapper from "../general/MainWrapper";
import Logo from "../general/Logo";
import NavbarRoutes from "./NavbarRoutes";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { ModeToggle } from "@/components/theme/ModeToggle";

function Navbar() {
  return (
    <header className="bg-card border-b shadow h-20 sticky top-0 z-40">
      <MainWrapper className="h-full flex items-center justify-between">
        <div className="flex items-center gap-x-12">
          <Logo />
          <NavbarRoutes />
        </div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Sidebar />
          <>
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: "outline" })}
            >
              Register
            </Link>
          </>
        </div>
      </MainWrapper>
    </header>
  );
}
export default Navbar;
