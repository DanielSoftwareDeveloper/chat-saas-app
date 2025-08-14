import MainWrapper from "@/components/shared/general/MainWrapper";
import { buttonVariants } from "@workspace/ui/components/button";
import Link from "next/link";

function Cta() {
  return (
    <section className="py-20">
      <MainWrapper className="theme-secondary border rounded-2xl p-8 sm:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white relative z-10">
          Ready to start your language journey?
        </h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto relative z-10">
          Join thousands of students who are improving their language skills
          every day.
        </p>
        <Link
          href="/sign-up"
          className={buttonVariants({ variant: "outline" })}
        >
          Register now
        </Link>
      </MainWrapper>
    </section>
  );
}
export default Cta;
