import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import git from "../../../public/git.svg";
import home from "../../../public/home.png";
import edugrid from "../../../public/edugrid.png";
import shorten from "../../../public/shorten.png";
import shop from "../../../public/shop.png";
import omnibiz from "../../../public/omnibiz.png";
import dashboard from "../../../public/dashboard.png";
import vgg from "../../../public/vgg.png";
import Experience from "../experience/Experience";
import Project from "../projects/projects";
import styles from "./Home.module.css";
const Home = () => {
  const projects = [
    {
      id: 1,
      img: edugrid,
      tools:
        "#React, #TailwindCSS , #JSON Server, #Github, #Imgur API, #Cloudinary API",
      title: "Edugrid",
      about:
        "Edugrid is a free online training platform  for teachers by teachers. Interested teachers can sign up to be content creators. It borrows some functionalities from Udemy. Teachers can also sign up to enroll for courses. Its still a work in progress.",
      githubLink: "https://github.com/Sambalicious/learn-It",
      demo: "https://edugrid.herokuapp.com",
    },
    {
      id: 2,
      img: shop,
      tools: "#Rest API, #React, #PWA, #SCSS, #Gitlab",
      title: "Omnibiz Retail",
      about:
        "Omnibiz Retail is a Software as a service Solution focused on helping retailers get  goods  they sell at the tip of their finger using the app. It provides solution by helping retailers place orders, process payment and also track their goods through the App.",

      disabled: true,
      demo: "https://shop.omnibiz.com",
    },
    {
      id: 3,
      img: home,
      tools: "#NextJs , #ReactJs, #Styled-Components , #Github,  #CSS",
      title: "World Ranks",
      about:
        "A NextJs Application that provides information about Countries. User can search for countries by Name, Region or Sub Region. User can also toggle between dark and light mode depending on their preference.",
      githubLink: "https://github.com/Sambalicious/Countries",

      demo: "https://countries-two.vercel.app/",
    },
    {
      id: 4,
      img: dashboard,
      tools: "#Rest API, #React, #PWA, #SCSS, #GitLab",
      title: "Omnibiz Pro",
      about:
        "Omnibiz pro is a unified platform to manage all sales channels and customers activities. Core features of this solution include Sales Automation, optimized route plans and an easy to use application to maximize sales orders efficiently. ",

      demo: "https://pro.omnibiz.com",

      disabled: true,
    },
    {
      id: 5,
      img: shorten,
      tools:
        "#NextJs , #Typescript, #Styled-Components , #NodeJs,  #Express,  #Postgres SQL,  #Chakra-UI",
      title: "Shorten",
      about:
        "A fullstack application built with postgres SQL, Typescript, NextJs and Chakra UI the converts a long URl to short Url that is easy to remember. ",

      demo: "https://shorten-fe.vercel.app",

      githubLink: "https://github.com/Sambalicious/shorten-FE",
    },
  ];

  const experiences = [
    {
      id: 1,
      img: omnibiz,
      duration: "September 2020 - Present",
      company: "Omnibiz Africa",
      job: "Omnibiz Africa is a one-stop business hub for SMEs.",
      role: "Frontend Developer",
      achievements: [
        "Built Custom components with React and SCSS",
        "Handled complex state management using react hooks and Context API.",
        " Learnt data caching and client side persistence with Local Forage.",
        "Worked closely with a senior Dev and learnt new technologies.",
        "Converted Figma Designs into pixel-perfect web pages. ",
        "Integrated backend APIs with the frontend applications",
        "Involved in  backlog, sprint planning and co-ordinated daily stand up as the scrum master.",
      ],
    },
    {
      id: 2,
      img: vgg,
      duration: "January 2020 - June 2020",
      company: "Venture Garden Group",
      job: "Venture Garden Group (VGG) is a leading provider of innovative.",
      role: "Frontend Developer (Intern)",
      achievements: [
        "Converted AdobeXD and Figma design into reusable codes.",
        "Built React application from scratch.",
        "Integrated backend APIs with the frontend applications",
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <div className={styles.wrapper__left__item} id="contact">
          <div className={styles.bio}>
            <img
              src={git}
              alt=""
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />

            <h3 className={styles.gradient__text}>Samuel Ayegbusi</h3>
            <h5 className={styles.stack}>Frontend Developer</h5>
          </div>

          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:stemitope370@gmail.com"
            >
              <div className={styles.email}>
                <div style={{ margin: "10px 10px 0 0" }}>
                  <MdContactMail size={"1.4rem"} />
                </div>
                <p> stemitope370@gmail.com</p>
              </div>
            </a>
            <div
              className={styles.phone}
              onClick={() => (window.location.href = "tel:+2347033098551")}
            >
              {" "}
              <div style={{ margin: "5px 10px 0 0" }}>
                <FiPhone />
              </div>
              <p> Tap here to call me</p>
            </div>

            <p className={styles.motivation}>
              Self-motivated, self-taught developer, who loves creating
              translating User Interface designs of various features into
              pixel-perfect web pages with awesome user experience.
            </p>

            <p>Connect with me</p>
            <div className={styles.contact__flex}>
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sambalicious"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facebook.com/cixtein"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/sambalicious_"
                >
                  <FaTwitter />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-ayegbusi-355169104/"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://stackoverflow.com/users/12493766/sambalicious"
                >
                  <FaStackOverflow />
                </a>
                <a
                  href="https://wa.me/2347033098551"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <div className={styles.tools__container}>
          <h3 id="tools" className={styles.tools}>
            Tools
          </h3>

          <div className={styles.tools__items}>
            <h1>HTML</h1>
            <h1>CSS3</h1>
            <h1>SCSS</h1>
            <h1>Javascript</h1>
            <h1> ReactJS</h1>
            <h1> NextJS</h1>
            <h1>MongoDB</h1>
            <h1> TailwindCSS</h1>
            <h1> Bootstrap</h1>
            <h1>Firebase</h1>
            <h1>RestAPI</h1>
            <h1>C#</h1>
            <h1>Github</h1>
            <h1>Styled-Components</h1>
            <h1>Netlify</h1>
            <h1>Vercel</h1>
            <h1>Heroku</h1>
          </div>
        </div>
        <h3 id="experience" className={styles.experience}>
          Experiences
        </h3>
        <div className={styles.wrapper__left__item}>
          {experiences.map((experience) => (
            <Experience key={experience.id} data={experience} />
          ))}
        </div>
      </div>

      <div className={styles.wrapper_right}>
        <div className={styles.wrapper__right}>
          <h3 id="projects" className={styles.projects}>
            Projects
          </h3>
          <div className={styles.wrapper__right__item}>
            {projects.map((project) => (
              <Project key={project.id} data={project} />
            ))}
          </div>

          <h3 className={styles.blog}>Blogs</h3>

          <div className={styles.wrapper__right__item}>
            <h3>Coming Soon...</h3>
            {/* <Blog
            description={
              " In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            }
            img={home}
            title={"Introduction to CSS"}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
