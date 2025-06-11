import { Mail, Coffee } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-2 px-4 relative">
      <div className="section-container mx-auto max-w-6xl">
        <h1 className="md:text-[55px]">
          <span className="text-secondary">Hire Me</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 mt-2">
          <div className="bg-card border rounded-xl overflow-hidden shadow-xs card-hover col-span-3 col-start-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 flex justify-center items-center mt-5">
                <img
                  src="linkedin profile.png"
                  alt="linkedin profile photo"
                  className="rounded-full aspect-square w-[110px] object-cover"
                />
              </div>
              <div className="p-6 col-span-2 space-y-2">
                <h2 className="font-semibold">Sharon Chua</h2>
                <p className="text-lg text-foreground/80">
                  Aspiring Data Analyst/Engineer
                </p>
                <p className="text-sm">
                  SMU Business Analytics Graduate
                </p>
                <p className="text-sm">
                  Skilled in AWS, Python, SQL, Power BI, Tableau and Databricks
                </p>

                <div className="w-40 mt-5 rounded-lg linkedin-button flex gap-2 justify-center items-center">
                  <img src="linkedin icon.png" className="h-5 w-5" />
                  <a
                    href="https://www.linkedin.com/in/sharoncyt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-center inline-block"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4 pb-4 items-center">
          <p className="text-sm md:text-lg font-semibold flex items-center gap-2">
            I'm always up for a chat or a coffee! Feel free to reach out{" "}
            <Coffee />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11">
          <div className="md:col-span-3 md:col-start-5 p2 rounded-full cosmic-button flex sm:flex-row gap-2 md:gap-4 justify-center items-center">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:sharoncyt28@gmail.com"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-center inline-block"
            >
              sharoncyt28@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
