/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yajushreshtha Shukla",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yajushreshtha Shukla Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Yajushreshtha Shukla",
  logo_name: "yajushreshtha shukla",
  nickname: "Yaju",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/10JIyRwrIuHDH5XmIwufAWGU8FJO23o7J/view?usp=sharing",
  portfolio_repository: "https://github.com/Soyvor",
  githubProfile: "https://github.com/Soyvor",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Soyvor",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yajushreshtha-shukla/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yajushreshtha@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/daym_yaju/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/soyvor/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/yajushreshtha",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/yaju19_19",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/yaju5656",
    },
    {
      siteName: "Google Developers",
      iconifyClassname: "simple-icons:android",
      style: {
        color: "#72bf6a",
      },
      profileLink: "https://www.kaggle.com/yaju5656",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Symbiosis Institute  of Technology, Pune",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "SIT.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.sitpune.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineering Essentials",
      subtitle: "- Microsoft Learn",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/bb352303a377ed046e2292ac45fa8e752aee2ec7fd793048331dca2f6389db40",
      alt_name: "Microsoft essentials",
      color_code: "#8C351599",
    },
    {
      title: "Generative Ai Essentials",
      subtitle: "- Microsoft Learn",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/923e40ec0d87350d1d6e27dce25599799c9540c72a9fcec4af622b6722713e70",
      alt_name: "Microsoft essentials",
      color_code: "#8C151599",
    },
    {
      title: "AZ 900",
      subtitle: "- Microsoft Learn",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/yajushreshthashukla-7886/?username=YajushreshthaShukla-7886&section=activity",
      alt_name: "Microsoft essentials",
      color_code: "#8C151599",
    },
    {
      title: "Business Intelligence Specialization",
      subtitle: "-Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/D38YQ8656AXK",
      alt_name: "google.ai",
      color_code: "#00000099",
    },
    {
      title: "Cybersecurity Specialization",
      subtitle: "-Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/3HS87N54U79B",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Git and Github Fundamentals",
      subtitle: "- Alex Aklson",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WJPDDH78VSKS",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science",
      subtitle: "- Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VUKCRQXJFYPC",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Agile Project Management",
      subtitle: "- Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/9VRX42L53G48",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Ai specialization",
      subtitle: "-University of Helsinki",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mnIc8i_5TgdIF8iNq-5sP9MatZaRPSl5/view",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Product Designer",
          company: "Indian Foods.inc",
          company_url: "https://legatohealthtech.com/",
          logo_path: "indianfoods.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "At Indian Foods Company, I gained insights into product execution and collaborated with sales and web teams to enhance production value. Utilizing data science and predictive data exploration, I optimized targeted customer ads, contributing to strategic growth initiatives.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "App Development",
          company: "Flipkart Grid",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "flip.png",
          duration: "June 2024 - Oct 2024",
          location: "Pune, Maharashtra",
          description:
            "I have developed an AI-based chatbot for the Flipkart platform as part of the Flipkart Grid 6.0 Project Development Program 2024. It utilizes data science, Gemini API, and alternate API solutions to ensure website stability, enhancing customer support and improving user experience.",
          color: "#9b1578",
        },
        {
          title: "FulL Stack Developer",
          company: "Symbiosis University",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "SIT.png",
          duration: "June 2022 - September 2023",
          location: "Pune, Maharashtra",
          description:
            "I have developed a comprehensive Full Stack Application that allows students to review and evaluate professors' performance, report student issues, and raise concerns about ragging incidents within the college, fostering a safer and more transparent campus environment while promoting accountability and continuous improvement among faculty members.",
          color: "#9b1578",
        },
        {
          title: "UI/UX Designer",
          company: "Miurac Inc..",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "miurac.jpg",
          duration: "June 2022 - September 2022",
          location: "Bangalore,2022",
          description:
            "I improved the UI of the Full Stack website by utilizing Figma and Adobe XD for design purposes. I created updated components with a lighter deployment footprint, ensuring better performance, and incorporated 3D components to enhance visual appeal and user interaction.",
          color: "#000000",
        },
        {
          title: "Product Designer",
          company: "Indian Foods.inc",
          company_url: "https://legatohealthtech.com/",
          logo_path: "furnestry.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            " At Furnestry, I contributed to the development of the website, focusing on product layouts and ensuring the complete functionality of web processes. My role involved overseeing the entire workflow, from designing user-friendly interfaces to optimizing the extensive workings of the website for smooth and efficient performance.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Cloud Community Crew",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google.jpeg",
          duration: "June 2024 - Sept 2024",
          location: "Pune, Maharashtra",
          description:
            " I was part of the Google Cloud Community Crew, where we organized Google Cloud sessions. In these sessions, Google developers shared insights on how technology functions at Google and how we can effectively adapt and implement these tools, all provided free of cost to the participants.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "micro.png",
          duration: "June 2023 - Sept 2023",
          location: "Pune, Maharashtra",
          description:
            "As a Microsoft Student Partner, I participated in organizing sessions where Microsoft professionals provided training on various Microsoft technologies. These sessions offered insights into how Microsoft's tools and platforms work, helping students learn how to effectively use and adapt these technologies, all free of cost.",
          color: "#D83B01",
        },
        {
          title: "Developer Students Club Lead",
          company: "DSC SIT",
          company_url:
            "https://www.linkedin.com/company/gdsc-sit-pune/posts/?feedView=all",
          logo_path: "GDSC.png",
          duration: "Jan 2022 - Present",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Google summer of code Contestant",
          company: "Google",
          company_url:
            "https://www.linkedin.com/company/gdsc-sit-pune/posts/?feedView=all",
          logo_path: "GSOC.png",
          duration: "May 2022 - Sept 2022",
          location: "Kurnool, Andhra Pradesh",
          description:
            "I applied for GSoC with GNOME but didn’t officially get selected. However, I have continued contributing to the GNOME project since then, actively participating in open-source development, improving features, and collaborating with the community to enhance the overall user experience. This ongoing involvement has allowed me to grow as a developer and make meaningful contributions to the project.",
          color: "#0C9D58",
        },
        {
          title: "Girl Script Summer of Code Contributor 2024",
          company: "MLH",
          company_url:
            "https://www.linkedin.com/company/gdsc-sit-pune/posts/?feedView=all",
          logo_path: "gssoc.jpg",
          duration: "Sept 2024 - Present",
          location: "Bangalore , Karnataka",
          description:
            "I participated in the GirlScript Summer of Code (GSSOC), where I contributed to various open-source projects. Throughout the program, I collaborated with mentors and fellow participants, focusing on developing new features, fixing bugs, and enhancing documentation. I am currently still contributing to GSSOC, further honing my skills and actively engaging with the community to support ongoing projects and initiatives.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "HacktoberFest",
          company_url: "https://github.com/",
          logo_path: "HACK.png",
          duration: "October 23 - PRESENT",
          location: "Work From Home",
          description:
            "I participated in Hacktoberfest, contributing to various projects, including Python libraries, the joejames Python pip project, and Java algorithms for Oracle. I also submitted full-stack pull requests, focusing on optimizing performance and enhancing user experience, all while engaging with the open-source community.",
          color: "#181717",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yaju.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://dev.to/soyvor",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Symbiosis Institute of Technology , Pune",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/1ftjtVemSEn4UWsX7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
