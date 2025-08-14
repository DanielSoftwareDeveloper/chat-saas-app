import MainWrapper from "@/components/shared/general/MainWrapper";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";

import { buttonVariants } from "@workspace/ui/components/button";

function Hero() {
  return (
    <section className="h-[40rem]">
      <MainWrapper className="max-w-[80%] h-full flex flex-col items-center justify-center ">
        <div className="text-center space-y-12">
          <h1 className="inline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-amber-400">
              Elevate your learning experience
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-sm md:text-lg lg:text-xl mt-6">
            Discover a new way to learn with our modern, interactive learning
            management system. Access high-quality courses anytime, anywhere.
          </p>

          <div className="flex justify-center gap-x-4">
            <Link
              href="/courses"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Explore courses
            </Link>
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Try Now
            </Link>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Hero;
