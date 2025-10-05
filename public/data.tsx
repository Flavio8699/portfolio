import Link from "../src/components/ui/Link";
import { Camera, Book, Footprints, Code, LineChart, Plane, Drone } from "lucide-react";

export const data = {
    sections: [
        { id: "about-me", label: "About Me" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "languages", label: "Languages" },
        { id: "interests", label: "Interests" },
    ],
    aboutme: {
        firstname: "Flávio",
        lastname: "Matias",
        email: "flavio8699@gmail.com",
        github: "Flavio8699",
        linkedin: "Flavio8699",
        description: "Software Developer 👨‍💻",
        terminal: "flavio@home:~$",
        summary: [
            '',
            'Hi, I\'m Flávio Matias, an IT enthusiast based in Luxembourg.',
            'I enjoy building apps, solving problems, and exploring new technologies.',
            'My interests include software development, system administration, DevOps, big data, and more.',
            'I love self-hosting projects, automating workflows, and staying up to date with the latest tech trends.',
            '',
        ]
    },
    education: [
        {
            title: "Master of Science, Information and Computer Sciences",
            year: "Sep 2022 – Sep 2024",
            school: "University of Luxembourg",
            description: [
                <>
                    Grade: <strong>16.6/20</strong> (Very Good)
                </>,
                <>
                    <strong>Thesis</strong>: Energy Performance Assessment of Deployment Pipelines.
                </>,
                <>
                    <strong>Focus</strong>: Investigated energy usage in DevOps deployment pipelines and developed a software framework for continuous energy monitoring using Prometheus & Grafana.
                </>
            ]
        },
        {
            title: "Bachelor of Science, Computer Science",
            year: "Sep 2019 – Jul 2022",
            school: "University of Luxembourg",
            description: [
                <>
                    Grade: <strong>17.9/20</strong> (Very Good)
                </>
            ]
        }
    ],
    experience: [
        {
            role: "Student Intern",
            company: "University of Luxembourg",
            start: "Sep 2023",
            end: "Jul 2024",
            description: [
                <>
                    Developed analyses and visualisations to explore large-scale patent datasets.
                </>,
                <>
                    Contributed to the open-source <Link href="https://gitlab.com/uniluxembourg/lcsb/eci/ULPatentTrends">ULPatentTrends</Link> project.
                </>,
                <>
                    Co-authored a peer-reviewed article: "<Link href="https://doi.org/10.1021/acs.estlett.4c00560">Revealing Chemical Trends: Insights from Data-Driven Visualisation and Patent Analysis in Exposomics Research</Link>"
                </>
            ],
            logo: "/logo/unilu.svg",
            skills: ["Big Data Analysis", "Data Visualisation", "HPC", "SLURM", "Python", "Pandas", "Numpy", "Jupyter Notebook"]
        },
        {
            role: "Student Intern",
            company: "University of Luxembourg",
            start: "Sep 2020",
            end: "Jul 2022",
            description: [
                <>
                    Developed iOS apps as part of seperate research projects.
                </>,
                <>
                    <Link href="#aerial-systems" stay={true}>Aerial Systems</Link>: drone mapping app.
                </>,
                <>
                    <Link href="#goodness-groceries" stay={true}>Goodness Groceries</Link>: eco-friendly shopping app.
                </>
            ],
            logo: "/logo/unilu.svg",
            skills: []
        },
        {
            role: "Full Stack Developer",
            company: "Compagnie de Construction Luxembourgeoise (CDCL)",
            start: "Apr 2018",
            end: "Dec 2020",
            description: [
                <>
                    Developed a <Link href="#stock-management-system" stay={true}>Stock Management System</Link> for construction sites and primary deposit, digitalizing item transfers and replacing paper vouchers.
                </>,
                <>
                    Created an electronic <Link href="#it-ticketing-system" stay={true}>IT Ticketing System</Link> to centralize employee requests.
                </>,
                <>
                    Applications used daily by <strong>~70-150 employees</strong>.
                </>
            ],
            logo: "/logo/cdcl.png",
            skills: []
        }
    ],
    projects: [
        {
            title: "Travel Tracker",
            year: "2025",
            company: undefined,
            inProgress: true,
            description: [
                <>
                    Web application allowing users to visualize their travels on an interactive world map.
                </>,
                <>
                    Users can create trips, add locations along their route, and attach images to capture moments from their journey.
                </>,
                <>
                    Displays a visual travel history with markers ("steps") on the map, showing routes and images along the way for each trip.
                </>
            ],
            skills: ["React", "JavaScript", "TypeScript", "Vite", "Python", "FastAPI", "RESTful API", "PostgreSQL", "TailwindCSS"]
        },
        {
            title: "Home Server Lab",
            year: "2023 - Present",
            company: undefined,
            inProgress: true,
            description: [
                <>
                    Personal project operating a Linux-based home server running containerized FOSS applications using Docker.
                </>,
                <>
                    Configured network services including DNS, firewall rules, and VPN to enable secure remote access.
                </>,
                <>
                    Implemented automated backup strategies for NAS storage.
                </>,
                <>
                    Developed Bash and Python scripts to automate tasks and monitor server performance.
                </>
            ],
            skills: [
                "Linux Administration",
                "Docker",
                "Networking (DNS, Firewall, VPN)",
                "Bash / Shell",
                "Python",
                "Automation & Monitoring",
                "NAS Backup Management"
            ]
        },
        {
            title: "Goodness Groceries",
            year: "2021 - 2022",
            company: "University of Luxembourg & Pall Center",
            description: [
                <>
                    Eco-friendly iOS application providing indicators describing the ecological background of grocery products.
                </>,
                <>
                    Helps users make sustainable shopping choices by highlighting environmental impact, suggesting eco-friendly alternatives, and providing clear carbon footprint information.
                </>,
                <>
                    Developed in partnership with <Link href="https://www.pallcenter.lu">Pall Center</Link> and the Sociology research department.
                </>,
                <>
                    The app was temporarily published on the App Store during the project.
                </>
            ],
            skills: ["iOS Development", "Swift", "SwiftUI", "UX/UI Design", "Xcode", "MVVM Design Pattern"],
            images: [
                "/images/goodness-groceries/screen_1.png",
                "/images/goodness-groceries/screen_2.png",
                "/images/goodness-groceries/screen_3.png",
            ],
            github: "https://github.com/Flavio8699/Goodness-Groceries"
        },
        {
            title: "Aerial Systems",
            year: "2022",
            company: "University of Luxembourg",
            description: [
                <>
                    iPad application for planning and executing drone missions that automatically capture images to create orthomosaic maps of agricultural fields.
                </>,
                <>
                    Generates a flight plan with coordinates (waypoints) to ensure complete coverage of the area.
                </>,
                <>
                    Integrates with <Link href="https://www.dji.com">DJI</Link> drones for automated flight paths, image capture, and mapping workflows.
                </>,
                <>
                    Designed to support agricultural monitoring goals such as crop health assessment and field analysis.
                </>
            ],
            skills: ["iPadOS Development", "Swift", "SwiftUI", "DJI SDK", "UI/UX Implementation", "Adaptive UI", "Xcode", "MVVM Design Pattern"],
            images: [
                "/images/aerial-systems/screen_1.png",
                "/images/aerial-systems/screen_2.png",
                "/images/aerial-systems/screen_3.png",
                "/images/aerial-systems/screen_4.png",
                "/images/aerial-systems/screen_5.png",
                "/images/aerial-systems/screen_6.png",
                "/images/aerial-systems/screen_7.png",
                "/images/aerial-systems/screen_8.png",
                "/images/aerial-systems/screen_9.png",
                "/images/aerial-systems/screen_10.png",
                "/images/aerial-systems/screen_11.png",
                "/images/aerial-systems/screen_12.png",
                "/images/aerial-systems/screen_13.png",
                "/images/aerial-systems/screen_14.png",
                "/images/aerial-systems/screen_15.png",
                "/images/aerial-systems/screen_16.png",
                "/images/aerial-systems/screen_17.png",
                "/images/aerial-systems/screen_18.png",
                "/images/aerial-systems/screen_19.png",
            ],
            github: "https://github.com/Flavio8699/Aerial-Systems"
        },
        {
            title: "AR Garden",
            year: "2022",
            company: "University of Luxembourg",
            description: [
                <>iOS application for designing and visualizing virtual gardens using Augmented Reality (AR).</>,
                <>Place, move, and scale virtual plants and objects in real-world environments.</>,
                <>Supports multi-user AR sessions for collaborative garden planning.</>
            ],
            skills: ["iOS Development", "Swift", "SwiftUI", "Augmented Reality", "ARKit", "RealityKit", "Xcode", "MVVM Design Pattern"],
            images: [
                "/images/ar-garden/screen_1.png",
                "/images/ar-garden/screen_2.png",
                "/images/ar-garden/screen_3.png",
                "/images/ar-garden/screen_4.png",
            ],
            github: "https://github.com/Flavio8699/AR-Garden"
        },
        {
            title: "Stock Management System",
            year: "2018 – 2020",
            company: "CDCL",
            description: [
                <>
                    Development of a stock management system allowing, among other things, the
                    visualisation of the inventory of construction sites in real-time.
                </>,
                <>
                    The program aims at digitalising the transfer of items between construction sites and the primary deposit by replacing paper vouchers with digital vouchers.
                </>,
                <>
                    Project requiring an understanding of the customer and business needs of the company for development in complete autonomy.
                </>,
                <>
                    Application used by the logistics department and construction site supervisors daily (~70 employees).
                </>
            ],
            skills: ["PHP", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "MySQL", "MVC Design Pattern"],
        },
        {
            title: "IT Ticketing System",
            year: "2018",
            company: "CDCL",
            description: [
                <>
                    Development of an electronic ticket system to track IT requests in 5 months.
                </>,
                <>
                    The program aims at centralising all the different types of requests from employees (support, technical problem, request for equipment, etc.), to give better transparency regarding the date on which the request will be processed and by which responsible person the ticket will be handled.
                </>,
                <>
                    The program is used by ~150 employees daily.
                </>
            ],
            skills: ["PHP", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "MySQL", "MVC Design Pattern"]
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            list: [
                "Python", "JavaScript", "TypeScript", "PHP", "Swift", "SQL"
            ]
        },
        {
            category: "Web & App Development",
            list: [
                "HTML", "CSS", "TailwindCSS", "Bootstrap", "React (Vite)", "FastAPI", "Django", "jQuery", "SwiftUI", "iOS/iPadOS Development", "UI/UX Implementation"
            ]
        },
        {
            category: "DevOps & Infrastructure",
            list: [
                "Linux Administration", "CLI", "SSH", "Git", "GitLab", "Docker", "CI/CD", "Bash / Shell", "Ansible"
            ]
        },
        {
            category: "Monitoring & Networking",
            list: [
                "Prometheus", "Grafana", "Automation & Monitoring", "Networking (DNS, Firewall, VPN)", "RESTful APIs", "NAS Backup Management"
            ]
        },
        {
            category: "Data & Machine Learning",
            list: [
                "Big Data Analysis", "Data Visualization", "Machine Learning (Supervised & Unsupervised)", "Pandas", "NumPy", "Jupyter Notebook", "HPC", "SLURM",
            ]
        },
        {
            category: "Databases",
            list: [
                "MySQL", "MariaDB", "PostgreSQL",
            ]
        },
        {
            category: "Soft Skills",
            list: [
                "Critical Thinking", "Problem Solving", "Continuous Improvement", "Communication & Teamwork", "Rapid Learner", "Initiative / Proactivity", "Time Management", "Attention to Detail"
            ]
        }
    ],
    languages: [
        { name: "Luxembourgish", level: "Native", progress: 100 },
        { name: "Portuguese", level: "Native", progress: 100 },
        { name: "English", level: "C1", progress: 73 },
        { name: "French", level: "C1", progress: 73 },
        { name: "German", level: "C1", progress: 73 },
        { name: "Spanish", level: "A2", progress: 22 },
    ],
    interests: [
        { name: "Traveling", icon: <Plane className="w-6 h-6" /> },
        { name: "Running", icon: <Footprints className="w-6 h-6" /> },
        { name: "Programming", icon: <Code className="w-6 h-6" /> },
        { name: "Photography", icon: <Camera className="w-6 h-6" /> },
        { name: "Drone Piloting", icon: <Drone className="w-6 h-6" /> },
        { name: "Investing", icon: <LineChart className="w-6 h-6" /> },
        { name: "Reading", icon: <Book className="w-6 h-6" /> },
    ]
};