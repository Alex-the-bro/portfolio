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
  bossup,
  screenquest,
  lexflix
  
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
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Producing concise performance reports to showcase my ability to interpret and present data effectively.",
  //     "Strategizing and implementing effective plans to engage with company clients, stakeholders, staff and partners",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Drip Studio",
    description:
      "A web-based application that allows users to customize 3D shirts by either uploading a design/logo from their desktop or by doing it all with Artificial Intelligence.",
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
  },
  {
    name: "Boss Up",
    description:
      "An entreprenuership blog and podcast website that serves the most invaluable content involving business and entrepreneurship.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "green-text-gradient",
      },
      
    ],
    image: bossup,
    source_code_link: "https://github.com/Alex-the-bro/boss-up",
  },
  {
    name: "Screen Quest",
    description:
      "A website that allows users to search for any movie, TV show or video game and in response the user gets a listing of all movies, tv shows and videos games that match the search.",
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
  },
  {
    name: "Netflix Landing Page(clone)",
    description:
      "A website that allows users to search for any movie, TV show or video game and in response the user gets a listing of all movies, tv shows and videos games that match the search.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: lexflix,
    source_code_link: "https://github.com/Alex-the-bro/netflix-landing-clone",
  },
  
];

export { services, technologies, experiences, projects };