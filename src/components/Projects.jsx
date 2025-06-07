import { cn } from "@/lib/utils";
import { useState } from "react";

const positions = [
  {
    id: 1,
    category: "Data Science",
    image: "/projects/project1.png",
    date: "Jan 2025 - Apr 2025",
    title: "AWS Big Data Architecture ETL Pipeline Group Project",
    pointer1:
      "Led a team of 6 to develop an end-to-end ETL pipeline to extract insights from London’s household energy consumption dataset and display visualisations for electricity fraud analysis and demand prediction based on weather conditions to benefit consumers and energy companies",
    pointer2:
      "Explored other services including DynamoDB and SQS for batch processing",
    pointer3:
      "Utilised AWS S3, Step Functions, Lambda, Glue, Athena, Sagemaker, Cloudwatch, Quicksight to build a scalable and efficient data pipeline as the final solution",
    tags: ["AWS", "Python"],
    link: "https://sparkly-walker-a7c.notion.site/SMU-Big-Data-Architecture-Group-Project-AWS-Amazon-Web-Services-ETL-Pipeline-1fee93d40bc780089b84ed8a1ab7bbf4?source=copy_link",
  },

  {
    id: 2,
    category: "Data Science",
    image: "/projects/project2.png",
    date: "Mar 2025 - Mar 2025",
    title: "Apache Airflow Individual Project - Web Scraping and Data Pipeline",
    pointer1:
      "Created a data pipeline with Airflow DAG to retrieve at least 100 video data from YouTube based on a dynamic topic through Python Selenium web scraping and store the video data into MongoDB database",
    tags: ["Airflow", "Ubuntu", "MongoDB", "Python", "Selenium"],
    link: "https://youtu.be/RsWLrtI_8Kc",
  },

  {
    id: 3,
    category: "Data Science",
    image: "/projects/project3.png",
    date: "Jan 2025 - Apr 2025",
    title: "Text Mining and Language Processing NLP Group Project",
    pointer1:
      "Trained Named Entity Recognition (NER) model using Python sklearn-crfsuite and NLTK",
    pointer2:
      "Evaluated CRF model using precision, recall and F1-score with gold truth data labelled by ChatGPT",
    pointer3:
      "Visualised results using entity frequency bar and pie charts and display good and bad text snippet example using Spacy Dispacy Entity Visualizer",
    tags: ["Python", "Scikit-learn", "Spacy"],
    link: "https://sparkly-walker-a7c.notion.site/SMU-Text-Mining-and-Language-Processing-Group-Project-NLP-Natural-Language-Processing-NER-Named-En-1fee93d40bc7808a854bf610c19c97c5?source=copy_link",
  },

  {
    id: 4,
    category: "Data Science",
    image: "/projects/project4.jpg",
    date: "Jan 2024 - Apr 2024",
    title: "Data Analytics in Asia Group Project (Bangkok, Thailand)",
    pointer1:
      "Solved real-world challenges and propose improvements for a Japanese social media app by creating Random Forest and SGDRegressor predictive models with Python Pandas and NumPy and visualise analysis results with Tableau for over 1,000,000 rows of data",
    tags: ["GitHub", "Tableau", "AWS", "Python"],
    link: "https://x.smu.edu.sg/getting-involved/smu-x-opportunity-award/bangkok-every-day-adventure-land-smiles",
  },

  {
    id: 5,
    category: "Data Science",
    image: "/projects/project5.png",
    date: "Jan 2023 - Apr 2023",
    title: "Visual Analytics for Business Intelligence Group Project",
    pointer1:
      "Developed an interactive dashboard using Tableau and D3.js to visualise the factors that affect World Happiness from 2015 to 2022",
    tags: ["D3.js", "Tableau", "Python"],
    link: "https://sparkly-walker-a7c.notion.site/SMU-Visual-Analytics-for-Business-Intelligence-Group-Project-Tableau-and-D3-js-ab5d57211f0a4b58961a81f3a75a5bf8",
  },

  {
    id: 6,
    category: "Web Development",
    image: "/projects/project6.png",
    date: "May 2024 - Nov 2024",
    title:
      "Final Year Project with Narwhal Financial Services Pte Ltd (Narfin)",
    pointer1:
      "Migrated the current SMU tBank Corporate Internet Banking System frontend UI from Vue.js which a previous team has done to OutSystems low code application platform",
    pointer2:
      "Improved existing banking features and developed new features in OutSystems according to existing API documentation such as Beneficiaries, Standing Instructions, Bill Payment, Direct Debit Authorization",
    pointer3:
      "Conducted User Acceptance Testing (UAT) under individual user and group settings to gather feedback and ensure the system meets user requirements",
    tags: ["OutSystems", "Postman", "Figma"],
    link: "https://sparkly-walker-a7c.notion.site/SMU-Final-Year-Project-2024-Improve-functionality-of-SMU-tBank-Corporate-Internet-Banking-system--12de93d40bc7808c8443f8f032d3f742",
  },

  {
    id: 7,
    category: "Web Development",
    image: "/projects/project7.jpg",
    date: "Aug 2023 - Oct 2023",
    title: "SMU Women In Tech x Google Ignite! 2023 Hackathon",
    pointer1:
      "Developed a mobile game collaboratively in a team of 5 to encourage sustainable living habits among youths aged 9-16 using Google Flutter and Dart programming language",
    pointer2:
      "Designed game map and characters using Tiled Map Editor and prototyped UI in Figma",
    tags: ["Flutter", "Tiled", "Figma"],
    link: "https://sparkly-walker-a7c.notion.site/SMU-Women-In-Tech-x-Google-Ignite-2023-Hackathon-Competition-Google-Flutter-110e93d40bc780b89964c4ac28f52451",
  },
];

const categories = ["Data Science", "Web Development"];

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Data Science");
  const filteredPositions = positions.filter(
    (position) => position.category === activeCategory
  );
  return (
    <section id="projects" className="py-7 px-4 relative">
      <div className="section-container mx-auto max-w-6xl">
        <div>
          <p className="md:text-[55px] text-secondary font-bold">
            Projects
            <span className="text-sm font-normal text-foreground pl-2">
              {" "}
              More projects will be updated soon!
            </span>
          </p>
        </div>

        <div className="flex mb-3 border-b-2">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "mr-5 text-lg text-semibold",
                "transition-colors duration-300 pb-2 cursor-pointer",
                activeCategory === category
                  ? "text-glow border-primary border-b-3"
                  : "text-foreground/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredPositions.map((position, key) => (
            <div
              key={key}
              className="group bg-card border rounded-xl overflow-hidden shadow-xs card-hover grid grid-cols-1 md:grid-cols-3"
            >
              <div className="col-span-1">
                <a
                  href={position.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={position.image}
                    alt={position.title}
                    className="rounded-lg w-full h-full object-contain"
                  />
                </a>
              </div>

              <div className="p-6 col-span-2 space-y-3">
                <div className="flex flex-wrap text-lg justify-end">
                  <span className="text-sm">{position.date}</span>
                </div>

                <div className="flex flex-wrap font-bold text-lg">
                  <a
                    href={position.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {position.title}
                  </a>
                </div>

                <div>
                  <ul className="list-disc pl-10">
                    {position.pointer1 && <li>{position.pointer1}</li>}
                    {position.pointer2 && <li>{position.pointer2}</li>}
                    {position.pointer3 && <li>{position.pointer3}</li>}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {position.tags.map((tag, key) => (
                    <div
                      key={key}
                      className="p-2 text-foreground text-base border rounded-lg bg-border/70 flex justify-center items-center"
                    >
                      <img
                        src={`projects/${tag.toLowerCase()}.png`}
                        alt={tag}
                        className="w-6 h-6 inline-block mr-2 object-contain"
                      />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
