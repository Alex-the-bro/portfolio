import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  jquery,
  git,
  figma,
  threejs,
  afrihost,
  tih,
  Photoshop,
  drip,
  profolio,
  screenquest,
  vx
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developement",
    icon: web,
  },
  {
    title: "Content Management Systems",
    icon: mobile,
  },
  {
    title: "Social Media Management",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: Photoshop,
  },
];

const experiences = [
  {
    title: "IT Support Consultant",
    company_name: "Afrihost ISP",
    icon: afrihost,
    iconBg: "#D50032",
    date: "June 2018 - December 2020",
    points: [
      "Troubleshooting technical issues related to internet connectivity, website and email hosting on behalf of clients and stakeholders",
      "Assisting in website setup, domain management, and database operations, showcasing familiarity with web hosting environments.",
      "Demonstrate the ability to escalate issues to senior personnel when necessary, highlighting problem-solving skills.",
      "Providing technical expertise in configuring web applications and any tools associated, such as browsers or email clients.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Afrihost ISP",
    icon: afrihost,
    iconBg: "#D50032",
    date: "December 2020 - Jan 2023",
    points: [
      "Developing engaging content across digital platforms to educate users on topics around website management, internet connectivity, web hosting, and email services.",
      "Manageing the company's blog website using our in-house content management systems",
      "Fostering online communities, reflecting the ability to build and maintain online platforms that are aligned with corperate objectives.",
      "Managing content calendars, scheduling and planning which demonstrated strong organizational abilities.",
      "Analyzing social media metrics and suggesting actionable measure to be taken in response to data which displays a data-driven and analytical mindset.",
    ],
  },
  {
    title: "Community Manager",
    company_name: "Telesure Investment Holdings",
    icon: tih,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Managing and maintaining the 1Life Insurance internal website along with any content present on the website",
      "Producing concise performance reports to showcase my ability to interpret and present data effectively.",
      "Crafting and curating engaging content for various online platforms, showcasing creativity and attention to detail.",
      "Staying updated on industry trends and technology advancements, highlighting my commitment to learning and staying up to date in the industry.",
      "Coordinating with cross-functional teams, underscoring my teamwork and coordination skills.",
    ],
  },
];



const projects = [
  {
    name: "Drip Studio",
    description:
      "This web application enables custom 3D shirt design. Users upload logos or shirt patterns from desktop or use Artificial Intelligence for versatile personalization, creating unique shirts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
    ],
    image: drip,
    source_code_link: "https://github.com/Alex-the-bro/WordWaves-Studio",
    live_site: "https://wordwavestudio.netlify.app/"
  },
  {
    name: "VisionX",
    description:
      "A social media web application that allows users to create images generated by artificial intelligence using unique prompts and furthermore share them with the visionX community.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
    ],
    image: vx,
    source_code_link: "https://github.com/Alex-the-bro/visonX",
    live_site: "https://visionex.netlify.app/"
  },
  {
    name: "Screen Quest",
    description:
      "The website facilitates user searches for movies, TV shows, and games, presenting matching results for their queries, encompassing a comprehensive range of entertainment choices.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "IMDbAPI",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: screenquest,
    source_code_link: "https://github.com/Alex-the-bro/screenquest",
    live_site: "https://screenquest.netlify.app/"
  },
  {
    name: "Profolio Crafters",
    description:
      "Profolio Crafters is a business that offers CV writing, LinkedIn optimisation and portfolio website services. Their website, which I developed, includes WhatsApp intergration that allows users to instantly start a WhatsApp chat for service enquiries as well as smooth animations.",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: profolio,
    source_code_link: "https://github.com/Alex-the-bro/Profolio",
    live_site: "https://profolio.co.za/"
  },
  
];

export { services, technologies, experiences, projects };