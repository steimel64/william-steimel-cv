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
    "Full Stack Data Scientist | Signate Master | JLPT N2",
  summary:
    "As a Data Science technical lead I have a passion for developing end-to-end AI solutions. My journey has been shaped by hands-on experience across diverse industries from financial services to Pharma, where I’ve harnessed data-driven strategies, embraced agile methodologies, and provided mentorship to drive meaningful change. Whether it’s wrangling data, designing models, or deploying solutions, I thrive on the entire stack. My track record? Delivering immediate bottom line impact through production-grade AI systems aligned to business strategy.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGV6HV62LrFQg/profile-displayphoto-crop_800_800/B56ZrlQy5SL4AM-/0/1764782977021?e=1766620800&v=beta&t=ug7fR1jis4_zC5TrZUbc5qwpon95J8F4ewtpNCzMeys",
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
      end: "2025",
      description:
        [
         "Architected and coded core components of a real-time agentic system for speech monitoring with RAG integration and multimodal analysis, reducing company risk. Led 2 AI engineers and implemented backend/orchestration workflows.",
         "Built a full MLOps and data platform on Databricks, writing pipelines, automation, and deployment code. Cut runtimes by 80%, enabling daily automation and saving ~$200K annually. Led 4 engineers.",
         "Deployed and scaled an MVP ML decisioning engine from 0 → ~2,000 users across brands/markets. Implemented model-serving, data, and integration components, reducing outsourcing by £1.5M while leading 4 engineers.",
         "Engineered a full-stack agentic generative content web app (React/Next.js/TS + Python/FastAPI), contributing to frontend and backend. Supported 3 live generative-AI campaigns with a 4-engineer team.",
         "Embedded with business teams (Japanese & English) as the primary technical contact, writing production-ready code, prioritizing tasks, and guiding agile delivery as a de facto Scrum Master in high-ambiguity environments.",
         "Implemented CI/CD pipelines and DevOps workflows across all projects, automating testing, deployment, environment management, and monitoring for fast, reliable ML and full-stack delivery.",
         "Reduced vendor lock-in by upskilling 4 internal data scientists and engineers through hands-on collaboration on production systems.",
         "Maintained high-quality documentation and best practices, accelerating onboarding and enabling knowledge transfer across Japan Pharma and engineering teams.",
         "Led multiple LLM PoCs, implementing prototypes and providing field insights to Product teams to influence roadmap and platform improvements."
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
         "Responsible for implementing reporting automation and statistical analysis to facilitate process optimization, capacity/demand forecasting, service level management, and audit compliance"],
    },
  ],
  skills: [
    "Python",
    "Applied Machine Learning",
    "MLOps",
    "Omni-Channel Marketing",
    "Scrum/Agile",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "PySpark",
    "NLP",
    "Agentic AI",
    "DataBricks",
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
    {
      title: "AI Agents Fundamentals- Hugging Face",
      techStack: [
        "Certification"
      ],
      description: "AI Agent Fundamentals",
      link: "https://cdn-lfs-us-1.hf.co/repos/f2/34/f2344151f60f6027c436821dc61cf3f27a46435de57df8df50ad02b5acca7c07/23934dff86e9be9989af332f43156b45ed37b04d2eea6bfb512bd1d30c4e73f7?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-02-15.png%3B+filename%3D%222025-02-15.png%22%3B&response-content-type=image%2Fpng&Expires=1745344479&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NTM0NDQ3OX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2YyLzM0L2YyMzQ0MTUxZjYwZjYwMjdjNDM2ODIxZGM2MWNmM2YyN2E0NjQzNWRlNTdkZjhkZjUwYWQwMmI1YWNjYTdjMDcvMjM5MzRkZmY4NmU5YmU5OTg5YWYzMzJmNDMxNTZiNDVlZDM3YjA0ZDJlZWE2YmZiNTEyYmQxZDMwYzRlNzNmNz9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=phNYdc69xElJaR4MoFz%7Efbx94UJeOHKeByvvlih87psao-N31g80T7tdiY4Jme9ntG6Amm6k7eVzXeY1CPjNbwTXzNu4SvTTvzkdmvOs67%7EGlNMkkimxcSaIqAbIsq-pYge1lbfaUDiGHfjK-v4eAWSwkVtz3fOQhG9FG9P55TnbM2X68WQEYqdefrlwP09i4duS59jTV5zlFRo-eCAcFmqPPzzayMWj-eYA5zjBXcQ6POCEm61vDykdaOZDYKgkrkBiJJz0VTt0pp2JQwRVCpTISkMrfdcvMgHHEA4YVTb5hUSP2WK7tZ-Lak3KWbzGQtsIcCheP48a0P%7E2YCxyPA__&Key-Pair-Id=K24J24Z295AEI9"
    },
  ],
} as const;
