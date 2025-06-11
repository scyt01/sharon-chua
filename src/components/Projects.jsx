import { cn } from "@/lib/utils";
import { ExternalLink, FileText, Github, Youtube } from "lucide-react";
import { useState } from "react";

const positions = [
  {
    id: 1,
    category: "AI",
    image: "/projects/project1.png",
    date: "Oct 2024",
    title:
      "Use of Artificial Intelligence (AI) in the Healthcare Industry Research Paper",
    pointer1:
      "Reviewed the history and market size of AI, use cases focusing on predictive and preventive healthcare globally in areas of medical diagnosis such as telemedicine, healthcare data management, COVID-19 pandemic management and future of AI in terms of biases, regulation and potential initiatives through the lens of smart cities",
    tags: [],
    filelink:
      "/projects/Use of Artificial Intelligence (AI) in the Healthcare Industry.pdf",
  },

  {
    id: 2,
    category: "Data Science",
    image: "/projects/project2.png",
    date: "Jan 2025 - Apr 2025",
    title: "AWS Big Data Architecture ETL Pipeline Group Project",
    pointer1:
      "Led a team of 6 to develop an end-to-end ETL pipeline to extract insights from London’s household energy consumption dataset and display visualisations for electricity fraud analysis and demand prediction based on weather conditions to benefit consumers and energy companies",
    pointer2:
      "Explored other services including DynamoDB and SQS for batch processing",
    pointer3:
      "Utilised AWS S3, Step Functions, Lambda, Glue, Athena, Sagemaker, Cloudwatch, Quicksight to build a scalable and efficient data pipeline as the final solution",
    tags: ["AWS", "Python"],
    githublink: "https://github.com/scyt01/AWS-ETL-Pipeline",
  },

  {
    id: 3,
    category: "Data Science",
    image: "/projects/project3.png",
    date: "Mar 2025",
    title: "Apache Airflow Individual Project - Web Scraping and Data Pipeline",
    pointer1:
      "Created a data pipeline with Airflow DAG to retrieve at least 100 video data from YouTube based on a dynamic topic through Python Selenium web scraping",
    pointer2: "Stored retrieved video data into MongoDB database",
    tags: ["Airflow", "Ubuntu", "MongoDB", "Python", "Selenium"],
    githublink: "https://github.com/scyt01/Apache-Airflow-Pipeline",
    youtubelink: "https://youtu.be/RsWLrtI_8Kc",
  },

  {
    id: 4,
    category: "Data Science",
    image: "/projects/project4.png",
    date: "Jan 2025 - Apr 2025",
    title: "Text Mining and Language Processing NLP Group Project",
    pointer1:
      "Trained Named Entity Recognition (NER) model using Python sklearn-crfsuite and NLTK",
    pointer2:
      "Evaluated CRF model using precision, recall and F1-score with gold truth data labelled by ChatGPT",
    pointer3:
      "Visualised results using entity frequency bar and pie charts and display text snippet examples using Spacy Dispacy Entity Visualizer",
    tags: ["Python", "Scikit-learn", "Spacy"],
    githublink: "https://github.com/scyt01/NER-sklearn-crfsuite",
  },

  {
    id: 5,
    category: "Data Science",
    image: "/projects/project5.jpg",
    date: "Jan 2024 - Apr 2024",
    title: "Data Analytics in Asia Group Project (Bangkok, Thailand)",
    pointer1:
      "Solved real-world challenges and propose improvements for a Japanese social media app by creating Random Forest and SGDRegressor predictive models with Python Pandas and NumPy and visualise results with Tableau for over 1,000,000 rows of data",
    tags: ["GitHub", "Tableau", "AWS", "Python"],
    link: "https://x.smu.edu.sg/getting-involved/smu-x-opportunity-award/bangkok-every-day-adventure-land-smiles",
  },

  {
    id: 6,
    category: "Visualisations",
    image: "/projects/project6.png",
    date: "Jan 2023 - Apr 2023",
    title: "Visual Analytics for Business Intelligence Group Project",
    pointer1:
      "Developed an interactive dashboard using Tableau and D3.js to visualise the factors that affect World Happiness from 2015 to 2022",
    tags: ["D3.js", "Tableau", "Python"],
    link: "https://va-t3-world-happiness-d3-dashboard.netlify.app/",
    filelink: "/projects/World Happiness Report.pdf",
  },

  {
    id: 7,
    category: "Visualisations",
    image: "/projects/project7.png",
    date: "May 2023",
    title: "Chicago Taxi Trips (2015-2017)",
    pointer1:
      "Analysis of taxi trips such as average fare distribution and payment methods, top 5 taxi companies in Chicago and most popular pickup and dropoff locations using Chicago Taxi Trips dataset from Google BigQuery",
    tags: ["Tableau"],
    link: "https://public.tableau.com/views/ChicagoTaxiTrips_16850874982430/Main?:language=en-US&:display_count=n&:origin=viz_share_link",
  },

  {
    id: 8,
    category: "Visualisations",
    image: "/projects/project8.png",
    date: "Dec 2023",
    title: "Grocery Sales (2022)",
    pointer1:
      "Visualised Actual vs Target revenue by month, Sales dollars by sub-category, Sales quantity by month and Average unit price by category, sub-category and month",
    tags: ["Power BI", "Python"],
    githublink: "https://github.com/scyt01/Grocery-Sales",
  },

  {
    id: 9,
    category: "Visualisations",
    image: "/projects/project9.png",
    date: "Aug 2021 - Oct 2021",
    title: "HDB Resale Analysis (January 2017 to June 2020)",
    pointer1:
      "This was a take-home assignment in Heicoders Academy AI100 training course",
    pointer2:
      "Analysis of HDB Resale data using Python libraries such as Pandas, Folium, Matplotlib to gain insights to make better decisions in choosing a HDB Resale flat or  BTO flats that are likely to appreciate in the resale market",
    tags: ["Python"],
    githublink: "https://github.com/scyt01/HDB-Resale",
  },

  {
    id: 10,
    category: "Web Development",
    image: "/projects/project10.png",
    date: "May 2024 - Nov 2024",
    title:
      "Final Year Project with Narwhal Financial Services Pte Ltd (Narfin)",
    pointer1:
      "Migrated the current SMU tBank Corporate Internet Banking System frontend UI from Vue.js which a previous team has done to OutSystems low code application platform",
    pointer2:
      "Improved existing banking features and developed new features in OutSystems according to existing API documentation such as Beneficiaries, Standing Instructions, Bill Payment, Direct Debit Authorization with regular sprints following Agile and Scrum methodologies",
    pointer3:
      "Conducted User Acceptance Testing (UAT) under individual user and group settings to gather feedback and ensure the system meets user requirements",
    tags: ["OutSystems", "Postman", "Figma"],
    link: "https://computing.smu.edu.sg/smu-teaching-bank",
    filelink: "/projects/Final Year Project.pdf",
  },

  {
    id: 11,
    category: "Web Development",
    image: "/projects/project11.jpg",
    date: "Aug 2023 - Oct 2023",
    title: "SMU Women In Tech x Google Ignite! 2023 Hackathon",
    pointer1:
      "Developed a mobile game collaboratively in a team of 5 to encourage sustainable living habits among youths aged 9-16 using Google Flutter and Dart",
    pointer2:
      "Designed game map and characters using Tiled Map Editor and prototyped UI in Figma",
    tags: ["Flutter", "Tiled", "Figma"],
    githublink: "https://github.com/ZhiLinR/GI-T8-Winx-Club",
    filelink: "/projects/Mobile Game Project.pdf",
  },

  {
    id: 12,
    category: "Cybersecurity",
    image: "/projects/project12.png",
    date: "Jan 2025 - Apr 2025",
    title: "Common Vulnerabilities and Exposures (CVE) Group Research Project",
    pointer1:
      "Researched on CVE-2024-21413 MonikerLink Vulnerability in Microsoft Outlook",
    pointer2:
      "Learnt about cybersecurity fundamentals with hands-on exercises using Kali Linux and Metasploitable such as CIA triad (Confidentiality, Integrity, Availability), SSL/TLS handshake, symmetric encryption (AES), asymmetric encryption (RSA), HMAC, digital certificate, user authentication & identity management, access control, security in terms of network, software and web",
    tags: ["Kali Linux", "Metasploitable"],
    filelink: "/projects/Cybersecurity Presentation.pdf",
    youtubelink: "https://youtu.be/Iin1F5K8pQo?si=duD0HMvMCaxEJTre",
  },

  {
    id: 13,
    category: "Behavioural Change",
    image: "/projects/project13.png",
    date: "Aug 2024 - Nov 2024",
    title: "Encourage Seniors To Use E-Payment in Singapore (IMDA)",
    pointer1:
      "Created behavioural strategy and ad campaign to improve the existing Infocomm Media Development Authority (IMDA) of Singapore’s Seniors Go Digital, E-payment Learning Journey Programme to change Singapore seniors' perception of E-Payments",
    pointer2:
      "Applied psychology and behavioural science theories from classroom learning",
    tags: [],
    filelink: "/projects/IMDA Project.pptx",
  },
];

const categories = [
  "AI",
  "Data Science",
  "Visualisations",
  "Web Development",
  "Cybersecurity",
  "Behavioural Change",
];

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("Data Science");
  const filteredPositions = positions.filter(
    (position) => position.category === activeCategory
  );
  return (
    <section id="projects" className="py-9 px-4 relative">
      <div className="section-container mx-auto max-w-6xl">
        <div>
          <p className="text-4xl md:text-[55px] text-secondary font-bold mb-2">
            Projects
          </p>
        </div>

        <div className="flex flex-wrap mb-3 border-b-2">
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
                <img
                  src={position.image}
                  alt={position.title}
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>

              <div className="p-6 col-span-2 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{position.date}</span>
                  <div className="flex">
                    {position.githublink && (
                      <a
                        href={position.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                      >
                        <Github />
                      </a>
                    )}

                    {position.link && (
                      <a
                        href={position.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                      >
                        <ExternalLink />
                      </a>
                    )}

                    {position.filelink && (
                      <a
                        href={position.filelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                      >
                        <FileText />
                      </a>
                    )}

                    {position.youtubelink && (
                      <a
                        href={position.youtubelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                      >
                        <Youtube />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap font-bold text-lg">
                  {position.title}
                </div>

                <div>
                  <ul className="list-disc pl-5 pr-10">
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
