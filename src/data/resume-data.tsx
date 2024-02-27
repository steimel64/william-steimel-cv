import {
  GSKLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "William Steimel",
  initials: "WS",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo/@35.6629508,139.7202828,14.75z/data=!4m6!3m5!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms?entry=ttu",
  about:
    "Full Stack Data Scientist | Microsoft Certified: Azure Data Scientist Associate | Signate Master | JLPT N2",
  summary:
    "As a Data Science technical lead I have a passion for developing end-to-end AI solutions. My journey has been shaped by hands-on experience across diverse industries from financial services to Pharma, where I’ve harnessed data-driven strategies, embraced agile methodologies, and provided mentorship to drive meaningful change. Whether it’s wrangling data, designing models, or deploying solutions, I thrive on the entire stack. My track record? Delivering immediate bottom line impact through production-grade AI systems aligned to business strategy.",
  avatarUrl: "https://steimel64.github.io/SteimelSite/resources/img/profile.jpeg",
  personalWebsiteUrl: "steimel64.github.io",
  contact: {
    email: "steimel65@gmail.com",
    tel: "+07042825179",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/steimel64",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/steimelw/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/WilliamSteimel/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sophia University",
      degree: "Master of Science in Green Science and Engineering, Geospatial Data Analysis/Machine Learning: Mext Scholarship",
      start: "2017",
      end: "2019",
    },
    {
      school: "United Nations University",
      degree: "UNU-IAS Joint Diploma in Sustainability Science",
      start: "2017",
      end: "2019",
    },
    {
      school: "Felician University",
      degree: "Bachelor of Science in Business Administration, Minor: Global Peace and Justice Studies",
      start: "2010",
      end: "2015",
    },
    {
      school: "Kansai Gaidai University",
      degree: "Asian Studies Program, Study Abroad for two semesters",
      start: "2012",
      end: "2013",
    },
  ],
  work: [
    {
      company: "GSK",
      link: "https://www.gsk.com/en-gb/",
      badges: ["Technical Lead"],
      title: "Senior Data Scientist → Principal Data Scientist (Global Associate Director)",
      logo: GSKLogo,
      start: "2022",
      end: "2024",
      description:
        ["Spearheaded the development and oversight of the code base for Commercial Pharma AI Systems in Japan and globally for a team of around 15 internal/third party data engineers and data scientists.",
         "Deployed and scaled MVP fieldforce Omnichannel Decisioning AI engine into a uniform code base, supporting cross-brand usage from 0 to approximately 2000 users, while significantly reducing overall technical resource costs.",
         "Led the first delivery of an internal AI engine with a team, saving around £1.5 million in previously outsourced delivery costs.",
         "Successfully delivered multiple ML system deployments in the Omnichannel Decisioning Engine contributing to near double digit impact across all priority brands",
         "Reduced vendor lock on existing third party and upskilled a team of around 15 new internal data scientists and engineers to take over the work for smoother, high-quality delivery.",
         "Served as the single point of accountability for requests—from raw data to UI layer—interfacing with the business in Japanese.",
         "Fostered a culture of knowledge sharing and continuous learning to equip new members with essential Japan Pharma and technical expertise.",
         "Supported development of multiple successful PoCs thereby promoting interest in genAI and securing significant funding across the organization.",
        ]
      },
    {
      company: "KPMG Ignition Tokyo",
      link: "https://kpmg.com/jp/en/home/about/kit.html",
      badges: [],
      title: "Data Scientist",
      logo: GSKLogo,
      start: "2019",
      end: "2022",
      description:
      ['Reduced 15-25 hours of manual development work per document layout to one UI click, through development of scalable Azure Machine Learning Pipelines for self-service training of layout based NER models for extraction of key-value pairs from financial documents.', 
       'Utilized Scrapy web scraping and crawling framework and developed reusable ingestion scripts on over 20 Japanese open datasets for KPMG’s global Signals Repository platform.',
       'Developed the initial company wide labeling process for OCR documents and supervised the quality of annotators on the data labeling team for over 1500 financial document PDFs in Japanese.',
       'Maintained code quality and documentation of pipelines and software libraries for easier onboarding of new members.',
       'Designed and developed configuration based excel extraction and spreadsheet analysis library with open source libraries Pandas/Openpyxl/xlrd for ingestion of real estate property management reports and other related documents.',
       'Designed, planned, and implemented six generic reusable python libraries utilized across KPMGs document ingestion platforms.',
       'Implemented generic feature extraction functions on polygon shape data utilizing vector and raster data. Functions contributed to geoscaler python library for scaling geospatial data between geographical levels.',
       'Developed scenario based simulation system with Streamlit and Docker to forecast profit loss and cash flow of buildings in REIT portfolio using accounting and real estate domain knowledge.',
    ]
    },
    {
      company: "Lombard Inc.",
      link: "https://lombard.co.jp/",
      badges: [],
      title: "Machine Learning Specialist",
      logo: GSKLogo,
      start: "2018",
      end: "2019",
      description:
        ["Analyzed data from internal affiliate marketing application to get insight into partner behavior and develop recommender system."]
    },
    {
      company: "ADP",
      link: "https://www.adp.com/",
      badges: [],
      title: "Intern → Infrastructure & Operations Analyst → IT Service Manager",
      logo: GSKLogo,
      start: "2015",
      end: "2017",
      description:
        ["Responsible for management of overall quality of IT Service Areas including Data Center Site Mgmt, IT Hosting Ops, Critical Incident Response Team, Enterprise Change Control, and Mainframe",
         "Analyzed budgets totaling millions of dollars for technical projects to ensure proper allocation of resources",
         "Responsible for implementing reporting automation and statistical analysis to facilitate process optimization, capacity/demand forecasting, service level management, and audit compliance"],
    },
  ],
  skills: [
    "Python",
    "Applied Machine Learning",
    "LightGBM",
    "MLOps",
    "Omni-Channel Marketing",
    "Scrum/Agile",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "PySpark",
    "NLP",
    "LangChain",
    "Azure DataBricks",
    "Azure ML",
    "Azure",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "git"
  ],
  projects: [
    {
      title: "Iida Group Holdings- Saitama Land Price Estimation Challenge",
      techStack: [
        "Competitive Machine Learning"
      ],
      description: "Built model to predict housing prices in Saitama, Signate Bronze Medal Rank 98/593",
      link: "https://signate.jp/competitions/162"
    },
    {
      title: "JR East - Train Delay Prediction Challenge",
      techStack: [
        "Competitive Machine Learning"
      ],
      description: "Built model to predict Train Delay on JR East lines, Signate Gold Medal Rank 10/442",
      link: "https://signate.jp/competitions/363"
    },
    {
      title: "Japan Exchange Group- Algorithmic Trading with News Data",
      techStack: [
        "Competitive Machine Learning"
      ],
      description: "Built model to predict Stock prices with Japanese news data, Signate Silver Medal Rank 12/443",
      link: "https://signate.jp/competitions/443"
    },
    {
      title: "Intelligent Preprocessing for OCR Applications",
      techStack: [
        "Patent"
      ],
      description: "KPMG Ignition Tokyo, PCT/JP2020/043680",
      link: "https://patents.google.com/patent/WO2022113171A1/en"
    },
    {
      title: "Excel Extractor",
      techStack: [
        "Patent"
      ],
      description: "KPMG Ignition Tokyo, PCT/JP2021/021247",
      link: "https://patents.google.com/patent/WO2022215276A1/en?oq=PCT%2fJP2021%2f021247"
    },
    {
      title: "An Auto-ML, Evolutionary approach to Model Based Data Extraction for financial documents of varying format",
      techStack: [
        "Patent"
      ],
      description: "KPMG Ignition Tokyo, PCT/JP2021/035333",
      link: "https://patents.google.com/patent/WO2023047570A1/en?oq=PCT%2fJP2021%2f035333"
    },
    {
      title: "Microsoft Certified Azure Data Scientist Associate",
      techStack: [
        "Certification"
      ],
      description: "Applying data science and machine learning to implement and run machine learning workloads on Azure Cloud",
      link: "https://www.credly.com/badges/defe25e0-7a77-4300-85dc-819a9e0758cc/linked_in"
    },

    
    {
      title: "Helsinki University- Full Stack Open",
      techStack: [
        "Certification"
      ],
      description: "Deep Dive Into Modern Web Development course covering React, Redux, Node.js, MongoDB, GraphQL and TypeScript",
      link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/7cb0dac44c849774ff5879c0e73c4153"
    },
  ],
} as const;
