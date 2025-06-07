import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="section-container mx-auto max-w-5xl">
        <h1 className="md:text-[55px] mb-8">
          <span className="text-secondary"> About </span>
        </h1>

        <div>
          <div className="space-y-6">
            <h2 className="font-semibold">
              Graduating student from Singapore Management University
            </h2>

            <p className="text-muted-foreground">
              I'm passionate about creating data-driven solutions to complex
              problems and constantly learning new technologies<br></br>and
              skills to stay at the forefront of the ever-evolving technology
              landscape. Currently, I am learning about AWS<br></br>Cloud
              Services by taking the AWS Certified Cloud Practitioner
              certification.
            </p>

            <p className="text-muted-foreground">
              I am seeking opportunities in the area of
              <span className="text-secondary font-semibold">
                {" "}
                AI/ML and Data Science{" "}
              </span>
              and I hope to contribute to meaningful projects<br></br>and make a
              lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
