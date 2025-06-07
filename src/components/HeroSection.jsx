import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center md:grid md:grid-cols-2"
    >
      <div className="container max-w-4xl ml-0 md:ml-25 text-center md:text-left z-10">
        <div className="space-y-6">
          <h1 className="md:text-[55px] font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hey, I'm</span>
            <span className="text-secondary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sharon Chua
            </span>
          </h1>
          <h2 className="md:text-[34px] font-semibold opacity-0 animate-fade-in-delay-3">
            <span>Aspiring Data Analyst/Engineer</span>
          </h2>
        </div>
      </div>

      <div className="container flex justify-center md:justify-start ml-0 md:ml-40 h-auto object-cover mt-8 md:mt-0">
        <img
          src="../../public/profile.jpg"
          alt="profile photo"
          className="rounded-full aspect-square w-[300px]"
        />
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
