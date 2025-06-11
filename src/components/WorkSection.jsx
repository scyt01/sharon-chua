const positions = [
    {
        id: 1,
        image: "/work/aon.png",
        date: "Jun 2024 - Aug 2024",
        company: "Aon Centre for Innovation & Analytics (ACIA)",
        title: "Growth Analytics Intern",
        pointer1:
            "Provided analysis leveraging Databricks and Python to improve the existing strategic pricing solution used by teams servicing Aon’s largest markets which provide clients with 2-5% typical revenue uplift",
        pointer2:
            "Assisted with predictive model enhancement work used for strategic growth planning covering risk, health, talent and wealth across 33 countries globally",
        pointer3:
            "Contributed to the project team’s coding quality standards for Python and SQL, following industry’s best practices",
        tags: ["Databricks", "PySpark", "Azure DevOps", "Python", "SQL"],
        link: "https://www.aon.com/en/",
    },

    {
        id: 2,
        image: "/work/siemens.png",
        date: "Jul 2023 - Dec 2023",
        company: "Siemens Pte Ltd",
        title: "Data Analyst Intern",
        pointer1:
            "Led Singapore and Malaysia roll out of a Digital Transformation tool to streamline sales quotation process across ASEAN, resulting in 50% adoption rate in 3 months",
        pointer2:
            "Automated weekly data cleaning process with Python for over 10,000 rows of data",
        pointer3:
            "Created key sales and logistics dashboards with Microsoft Power BI for Higher Management’s review",
        tags: ["SAP Analytics Cloud", "Power BI", "Python"],
        link: "https://www.siemens.com/sg/en.html",
    },
];

export const WorkSection = () => {
    return (
        <section id="work" className="py-4 px-4 relative">
            <div className="section-container mx-auto max-w-6xl">
                <h1 className="md:text-[55px] mb-5">
                    <span className="text-secondary">Work Experience</span>
                </h1>

                <div className="grid grid-cols-1 gap-8">
                    {positions.map((position, key) => (
                        <div
                            key={key}
                            className="group bg-card border rounded-xl overflow-hidden shadow-xs card-hover grid grid-cols-1 md:grid-cols-3 gap-2"
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
                                        className="rounded-lg w-full h-full object-cover"
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
                                        {position.company}
                                    </a>
                                </div>

                                <div className="flex flex-wrap font-semibold">
                                    <p>{position.title}</p>
                                </div>

                                <div>
                                    <ul className="list-disc pl-10">
                                        <li>{position.pointer1}</li>
                                        <li>{position.pointer2}</li>
                                        <li>{position.pointer3}</li>
                                    </ul>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {position.tags.map((tag, key) => (
                                        <div
                                            key={key}
                                            className="p-2 text-foreground text-base border rounded-lg bg-border/70 flex justify-center items-center"
                                        >
                                            <img
                                                src={`/work/${tag.toLowerCase()}.png`}
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
